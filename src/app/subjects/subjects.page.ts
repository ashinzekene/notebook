import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: 'subjects.page.html',
  styleUrls: ['subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  newSubject: Subject;
  subjects: Observable<Subject[]>;
  isCreatingNew = false;
  constructor(public subjectService: SubjectsService, private router: Router) {}

  ngOnInit() {
    setTimeout(() => this.getSubjects(), 1000);
  }

  getSubjects() {
    this.subjects = this.subjectService.getUserSubjects();
  }

  createNew() {
    this.isCreatingNew = true;
    this.newSubject = {
      title: '',
      summary: '',
    };
  }

  handleTitleChange(e: KeyboardEvent) {
    this.newSubject.title = (e.target as HTMLElement).textContent;
  }

  handleSummaryChange(e: KeyboardEvent) {
    this.newSubject.summary = (e.target as HTMLElement).textContent;
  }

  async handlePageClick(e: TouchEvent) {
    if (!this.isCreatingNew) return;
    const { title, summary } = this.newSubject;
    if (!title || !summary) return;
    if (!(e.target as Element).closest('.new-subject')) {
      await this.subjectService.createSubject(title, summary);
      this.isCreatingNew = false;
    }
  }
}
