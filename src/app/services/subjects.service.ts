import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

import { Subject } from '../models/subjects';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectsService {
  constructor(private auth: AuthService, private afs: AngularFirestore) {}

  getUserSubjects(): Observable<Subject[]> {
    const u = this.auth.user;
    if (!u) return null;
    return this.afs.collection<Subject>(
      'subjects',
      ref => ref.where('userId', '==', u.uid).orderBy('dateModified', 'desc')
    ).valueChanges();
  }

  createSubject(title: string, summary: string) {
    const id = this.afs.createId();
    return this.afs.collection<Subject>('subjects').add({
      id,
      title,
      summary,
      userId: this.auth.user.uid,
      dateCreated: (new Date()).toISOString(),
      dateModified: (new Date()).toISOString(),
    });
  }
}
