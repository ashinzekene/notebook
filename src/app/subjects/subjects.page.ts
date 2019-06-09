import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: 'subjects.page.html',
  styleUrls: ['subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: Subject[];
  newSubject: Subject;
  isCreatingNew = false;
  constructor(public subjectService: SubjectsService, private router: Router) {}

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
  }

  createNew() {
    this.isCreatingNew = true;
    this.newSubject = {
      title: '',
      summary: '',
      slug: '',
      categories: [],
      dateCreated: (new Date()).toISOString()
    };
  }

  handleTitleChange(e: KeyboardEvent) {
    this.newSubject.title = (e.target as HTMLElement).textContent;
  }

  handleSummaryChange(e: KeyboardEvent) {
    this.newSubject.summary = (e.target as HTMLElement).textContent;
  }
}
