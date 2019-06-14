import { Component, OnInit } from '@angular/core';
import { Note, notes } from '../models/notes';
import { NotesService } from '../services/notes.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-note-list',
  templateUrl: 'note-list.page.html',
  styleUrls: ['note-list.page.scss']
})
export class NoteListPage implements OnInit {
  _notes: Note[];
  notes: Note[];
  loading = true;
  constructor(private notesService: NotesService) {
    this._notes = notes;
  }

  async ngOnInit() {
    this.notesService.getSubjectNotes('12').subscribe(n => {
      this.loading = false;
      this.notes = n;
    });
  }
}
