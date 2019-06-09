import { Injectable } from '@angular/core';
import { subjects, Subject } from '../models/subjects';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  private subjects: Subject[] = subjects;
  constructor() { }

  getSubjects() {
    return subjects;
  }
}
