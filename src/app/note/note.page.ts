import { Component } from '@angular/core';
import { Router } from '@angular/router';
import MediumEditor from 'medium-editor';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, AlertController } from '@ionic/angular';

import { NotesService } from '../services/notes.service';
import { Note } from '../models/notes';
import { ListAuto } from '../medium-editor-plugins';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss']
})
export class NotePage {
  editor: any;
  creatingNew = false;
  subjectId = '';
  noteId: string;
  title = 'Title';
  loading = false;
  note: Partial<Note>;
  subscription: Subscription;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private notesService: NotesService,
    public alertController: AlertController,
    public actionSheetController: ActionSheetController
  ) {}

  ionViewDidEnter() {
    this.initEditor();
    const noteId = this.route.snapshot.paramMap.get('id');
    const subjectId = this.route.snapshot.params.subjectId;
    if (!noteId && subjectId) {
      this.creatingNew = true;
      this.subjectId = subjectId;
    } else {
      this.noteId = noteId;
      this.getNote(noteId);
    }
    document.addEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  initEditor() {
    const autolist = new ListAuto();
    this.editor = new MediumEditor('.medium-editor', {
      extensions: { autolist },
      autoLink: true,
      toolbar: {
        buttons: ['bold', 'italic', 'underline', 'unorderedlist', 'orderedlist', 'h3'],
        diffTop: 70,
      }
    });
  }

  getNote(id: string) {
    this.loading = true;
    this.subscription = this.notesService.getNote(id)
    .subscribe(note => {
      this.note = note;
      this.title = note.title;
      this.subjectId = note.subjectId;
      this.editor.setContent(note.content);
      this.loading = false;
    });
  }

  handleTitleChange(ev: Event) {
    this.title = (ev.target as HTMLElement).textContent;
  }

  ionViewWillLeave() {
    this.saveNote();
    this.editor.destroy();
    this.subscription.unsubscribe();
    document.removeEventListener('visibilitychange', this.handleVisibilityChange.bind(this));
  }

  handleVisibilityChange() {
    if (document.hidden) {
      this.saveNote();
    }
  }

  saveNote() {
    const content = this.editor.getContent();
    if (this.creatingNew) {
      this.createNote(content);
    } else {
      this.updateNote(content);
    }
  }

  showDeleteModal() {
    this.presentActionSheet();
  }

  async createNote(content: string) {
    if (!content) return;
    await this.notesService.createNote(this.title, content, this.subjectId);
    this.note = {
      title: this.title,
      content: content
    }
    this.creatingNew = false;
  }

  async updateNote(content: string) {
    if (this.nothingChanged(content) || !content) return;
    this.note.title = this.title;
    this.note.content = content;
    await this.notesService.updateNote(this.note);
  }

  nothingChanged(content: any) {
    return this.note.content === content &&
    this.title === this.note.title;
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Options',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.presentAlertConfirm();
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
      }]
    });
    await actionSheet.present();
  }

  async presentAlertConfirm() {
    const alert = await this.alertController.create({
      header: 'Delete?',
      message: 'Do you really want to delete this note?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
        }, {
          text: 'Okay',
          role: 'destructive',
          cssClass: 'danger',
          handler: async () => {
            await this.notesService.deleteNote(this.noteId);
            await alert.dismiss();
            this.router.navigateByUrl(`/subject/${this.subjectId}`);
          }
        }
      ]
    });
    await alert.present();
  }
}
