import { Component, OnInit, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: 'subjects.page.html',
  styleUrls: ['subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  @ViewChild(IonContent) content: IonContent;
  newSubject: Subject;
  subjects: Subject[];
  loading = true;
  isCreatingNew = false;
  constructor(public subjectService: SubjectsService, private router: Router) {}

  ngOnInit() {
    this.getSubjects();
  }

  getSubjects() {
    this.subjectService.getUserSubjects().subscribe(subjects => {
      this.subjects = subjects;
      this.loading = false;
    });
  }

  createNew() {
    this.isCreatingNew = true;
    this.content.scrollToTop();
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
    if (!title || !summary) {
      this.isCreatingNew = false;
      return;
    }
    if (!(e.target as Element).closest('.new-subject')) {
      this.loading = true;
      await this.subjectService.createSubject(title, summary);
      this.loading = false;
      this.isCreatingNew = false;
    }
  }
}
