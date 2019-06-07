import { Component, OnInit } from '@angular/core';
import { SubjectsService } from '../services/subjects.service';
import { Subject } from '../models/subjects';

@Component({
  selector: 'app-subjects',
  templateUrl: 'subjects.page.html',
  styleUrls: ['subjects.page.scss'],
})
export class SubjectsPage implements OnInit {
  subjects: Subject[] 
  constructor(public subjectService: SubjectsService) {}
  
  ngOnInit() {
    this.subjects = this.subjectService.getSubjects()
  }

}
