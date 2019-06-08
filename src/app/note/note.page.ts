import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss']
})
export class NotePage implements OnInit {
  public notes: Array<{ title: string; note: string; }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.notes.push({
        title: 'Item ' + i,
        note: 'This is item #' + i,
      });
    }
  }

  ngOnInit() {
  }
  // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
