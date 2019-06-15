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
      ref => ref.where('userId', '==', u.uid)
      .orderBy('dateModified', 'desc')
    ).valueChanges();
  }

  getSubjectNotes(subjectId: string): Observable<Note[]> {
    const u = this.auth.user;
    return this.afs.collection<Note>(
      'notes',
      ref => ref.where('subjectId', '==', subjectId)
      .where('userId', '==', u.uid)
      .orderBy('dateModified', 'desc')
    ).valueChanges();
  }

  getNote(noteId: string): Observable<Note[]> {
    const u = this.auth.user;
    console.log('Getting note with ID', noteId);
    return this.afs.collection<Note>(
      'notes',
      ref => ref.where('id', '==', noteId)
      .where('userId', '==', u.uid)
    ).valueChanges();
  }

  createNote(title: string, content: string, subjectId: string) {
    const id = this.afs.createId();
    return this.afs.collection<Note>('notes').add({
      id,
      title,
      content,
      subjectId,
      userId: this.auth.user.uid,
      dateCreated: (new Date()).toISOString(),
      dateModified: (new Date()).toISOString(),
    });
  }
}
