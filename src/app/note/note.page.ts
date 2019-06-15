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
  subjectId: string;
  noteId: string;
  title: 'Note';
  loading = false;
  note: Partial<Note>;
  constructor(private route: ActivatedRoute, private notesService: NotesService) {}

  ngOnInit() {
    this.initEditor();
    const noteId = this.route.snapshot.paramMap.get('id');
    const subjectId = this.route.snapshot.params.subjectId;
    console.log('SubjectID', subjectId);
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
      this.editor.pasteHTML(this.note.content);
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

  createNote() {

  }

  handleTitleChange(ev) {
    this.title = ev.target.textContent;
  }

  handleContextMenu(e: Event) {
    e.preventDefault();
  }

  ionViewWillLeave() {
    if (this.creatingNew) {
      const content = this.editor.getContent();
      // this.notesService.createNote(this.title, content, this.subjectId);
    }
    this.editor.destroy();
  }
}
