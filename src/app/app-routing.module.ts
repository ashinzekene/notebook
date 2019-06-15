import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthResolver } from './services/auth.resolver';
import { NoteResolver } from './services/note.resolver';

const routes: Routes = [
  {
    redirectTo: '',
    path: 'subjects',
    pathMatch: 'full'
  },
  {
    path: '',
    resolve: { user: AuthResolver },
    loadChildren: './subjects/subjects.module#SubjectsPageModule' },
  {
    path: 'subject/:id',
    resolve: { user: AuthResolver },
    loadChildren: './note-list/note-list.module#NoteListPageModule'
  },
  {
    path: 'note/:id',
    resolve: { user: AuthResolver },
    loadChildren: './note/note.module#NotePageModule'
  },
  {
    path: 'note/:subjectId/new',
    resolve: { user: AuthResolver },
    loadChildren: './note/note.module#NotePageModule'
  },
  { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
