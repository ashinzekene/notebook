import { Injectable } from '@angular/core';
import { Resolve, ActivatedRoute } from '@angular/router';
import { NotesService } from './notes.service';
import { Note } from '../models/notes';
import { switchMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteResolver implements Resolve<Observable<Note[]>> {
  constructor(private noteService: NotesService, private route: ActivatedRoute) {}

  resolve(): Observable<Note[]> {
    console.log(this.route.snapshot.params);
    return this.route.paramMap.pipe<Note[]>(
      switchMap(param => {
        const id = param.get('id');
        return this.noteService.getNote(id);
      })
    );
  }
}
