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
  constructor(public subjectService: SubjectsService, private router: Router) {}

  ngOnInit() {
    this.subjects = this.subjectService.getSubjects();
  }

  // openSubject(slug) {
  //   this.router.navigateByUrl()
  // }

}
