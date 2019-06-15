import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Note, notes } from '../models/notes';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-list',
  templateUrl: 'note-list.page.html',
  styleUrls: ['note-list.page.scss']
})
export class NoteListPage implements OnInit {
  subjectId: string;
  notes: Note[];
  loading = true;
  constructor(private notesService: NotesService, private route: ActivatedRoute) {}

  async ngOnInit() {
    this.route.paramMap.pipe<Note[]>(
      switchMap((params: ParamMap) => {
        this.subjectId = params.get('id');
        return this.notesService.getSubjectNotes(this.subjectId);
      })
    )
      .subscribe(n => {
        this.loading = false;
        this.notes = n;
      });
  }
}
