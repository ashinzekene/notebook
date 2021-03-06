import { Component, ViewChild } from '@angular/core';
import { IonContent } from '@ionic/angular';
import { Router } from '@angular/router';

import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-subjects',
  templateUrl: 'subjects.page.html',
  styleUrls: ['subjects.page.scss'],
})
export class SubjectsPage {
  @ViewChild(IonContent) content: IonContent;
  newSubject: Partial<Subject>;
  subjects: Subject[];
  loading = true;
  isCreatingNew = false;
  subscription: Subscription;
  constructor(public subjectService: SubjectsService, private router: Router) {}

  ionViewDidEnter() {
    this.getSubjects();
  }

  getSubjects() {
   this.subscription = this.subjectService.getUserSubjects().subscribe(subjects => {
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
    if (!!(e.target as Element).closest('.new-subject')) return;
    if (!title || !summary) {
      this.isCreatingNew = false;
      return;
    }
    this.loading = true;
    this.isCreatingNew = false;
    await this.subjectService.createSubject(title, summary);
    this.loading = false;
  }

  ionViewDidLeave() {
    this.subscription.unsubscribe();
  }
}
