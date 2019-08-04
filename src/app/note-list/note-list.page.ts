import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Note } from '../models/notes';
import { NotesService } from '../services/notes.service';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';
import { Subscription } from 'rxjs';

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
  subscription: Subscription;
  constructor(
    private notesService: NotesService,
    private subjectService: SubjectsService,
    private route: ActivatedRoute
  ) {}

  async ionViewDidEnter() {
    this.loading = true;
    const subjectId = this.route.snapshot.paramMap.get('id');
    this.subjectId = subjectId;
    this.getNotes(subjectId);
    this.getSubject(subjectId);
  }

  handleTitleChange(ev) {
    const subject = this.subject;
    subject.title = ev.target.textContent;
    this.subjectService.updateSubject(subject);
  }

  handleSummaryChange(ev) {
    const subject = this.subject;
    subject.summary = ev.target.textContent;
    this.subjectService.updateSubject(subject);
  }

  getNotes(subjectId: string) {
    this.subscription = this.notesService.getSubjectNotes(subjectId)
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

  ionViewWillLeave() {
    this.subscription.unsubscribe();
  }
}
