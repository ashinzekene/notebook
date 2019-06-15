import { Component, OnInit } from '@angular/core';
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
export class NotePage implements OnInit {
  public editor: any;
  creatingNew = false;
  subjectId = '';
  noteId: string;
  title = 'Title';
  loading = false;
  note: Partial<Note>;
  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ngOnInit() {
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
  }

  getNote(id: string) {
    this.loading = true;
    this.notesService.getNote(id)
    .subscribe(note => {
      this.note = note[0];
      this.title = this.note.title;
      this.subjectId = this.note.subjectId;
      this.editor.setContent(this.note.content);
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
    this.title = (ev.target as Element).textContent;
  }

  handleContextMenu(e: Event) {
    e.preventDefault();
  }

  ionViewWillLeave() {
    const content = this.editor.getContent();
    if (this.creatingNew) {
      this.notesService.createNote(this.title, content, this.subjectId);
    } else {
      this.note.content = content;
      this.note.title = this.title;
      this.notesService.updateNote(this.note);
    }
    this.editor.destroy();
  }
}
