import { Component } from '@angular/core';
import MediumEditor from 'medium-editor';
import { ActivatedRoute } from '@angular/router';

import { NotesService } from '../services/notes.service';
import { Note } from '../models/notes';
import { ListAuto } from '../medium-editor-plugins';

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
  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ionViewDidEnter() {
    this.initEditor();
    const noteId = this.route.snapshot.paramMap.get('id');
    const subjectId = this.route.snapshot.params.subjectId;
    if (!noteId && subjectId) {
      this.creatingNew = true;
      this.subjectId = subjectId;
      this.note = {
        title: this.title,
      };
    } else {
      this.noteId = noteId;
      this.getNote(noteId);
    }
  }

  getNote(id: string) {
    this.loading = true;
    this.notesService.getNote(id)
    .subscribe(note => {
      this.note = note;
      this.title = note.title;
      this.subjectId = note.subjectId;
      this.editor.setContent(note.content);
      this.loading = false;
    });
  }

  initEditor() {
    const autolist = new ListAuto();
    this.editor = new MediumEditor('.medium-editor', {
      extensions: { autolist },
      toolbar: {
          buttons: ['bold', 'italic', 'underline', 'unorderedlist', 'orderedlist', 'h3']
      }
    });
  }

  handleTitleChange(ev: Event) {
    this.note.title = (ev.target as Element).textContent;
  }

  handleContextMenu(e: Event) {
    e.preventDefault();
  }

  ionViewWillLeave() {
    if (this.creatingNew) {
      this.createNote();
    } else {
      this.saveNote();
    }
    this.editor.destroy();
  }

  async createNote() {
    const content = this.editor.getContent();
    await this.notesService.createNote(this.note.title, content, this.subjectId);
  }

  saveNote() {
    const content = this.editor.getContent();
    this.note.content = content;
    this.notesService.updateNote(this.note);
  }

}
