import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NoteListPage } from './note-list.page';

describe('NoteListPage', () => {
  let component: NoteListPage;
  let fixture: ComponentFixture<NoteListPage>;
  let noteListPage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(NoteListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    noteListPage = fixture.nativeElement;
    const items = noteListPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
