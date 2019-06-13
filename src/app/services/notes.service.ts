import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Note } from '../models/notes';

@Injectable({
  providedIn: 'root'
})
export class NotesService {
  constructor(private auth: AuthService, private afs: AngularFirestore) {}

  getUserNotes(): Observable<Note[]> {
    const u = this.auth.user;
    if (!u) return null;
    return this.afs.collection<Note>(
      'notes',
      ref => ref.where('userId', '==', u.uid).orderBy('dateModified', 'desc')
    ).valueChanges();
  }

  getSubjectNotes(subjectId: string): Observable<Note[]> {
    return this.afs.collection<Note>(
      'notes',
      ref => ref.where('subjectId', '==', subjectId).orderBy('dateModified', 'desc')
    ).valueChanges();
  }

  createNote(title: string, content: string, subjectId: string) {
    return this.afs.collection<Note>('notes').add({
      title,
      content,
      subjectId,
      userId: this.auth.user.uid,
      dateCreated: (new Date()).toISOString(),
      dateModified: (new Date()).toISOString(),
    });
  }
}
