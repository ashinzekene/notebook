import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { Note } from '../models/notes';
import { NotesService } from '../services/notes.service';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';

@Component({
  selector: 'app-note-list',
  templateUrl: 'note-list.page.html',
  styleUrls: ['note-list.page.scss']
})
export class NoteListPage {
  subjectId: string;
  notes: Note[];
  subject: Subject;
  loading = true;
  constructor(
    private notesService: NotesService,
    private subjectService: SubjectsService,
    private route: ActivatedRoute
  ) {}

  async ionViewDidEnter() {
    this.loading = true;
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subjectId = subjectId;
    this.getNote(subjectId);
    this.getSubject(subjectId);
  }



  getNote(subjectId: string) {
    this.notesService.getSubjectNotes(subjectId)
      .subscribe(n => {
        this.loading = false;
        this.notes = n;
      });
  }

  getSubject(subjectId: string) {
    this.subjectService.getSubject(subjectId)
      .subscribe(s => {
        this.subject = s;
      });
  }
}
