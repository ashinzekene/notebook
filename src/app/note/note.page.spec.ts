import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed, async } from '@angular/core/testing';

import { NotePage } from './note.page';

describe('NotePage', () => {
  let component: NotePage;
  let fixture: ComponentFixture<NotePage>;
  let notePage: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(async () => {
    fixture = await TestBed.createComponent(NotePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a list of 10 elements', () => {
    notePage = fixture.nativeElement;
    const items = notePage.querySelectorAll('ion-item');
    expect(items.length).toEqual(10);
  });

});
