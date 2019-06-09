import { Component, OnInit, OnDestroy } from '@angular/core';
import MediumEditor from 'medium-editor';
import AutoList from 'medium-editor-autolist';

@Component({
  selector: 'app-note',
  templateUrl: 'note.page.html',
  styleUrls: ['note.page.scss']
})
export class NotePage implements OnInit, OnDestroy {
  public editor: any;
  constructor() {}

  ngOnInit() {
    const autolist = new AutoList();
    this.editor = new MediumEditor('.medium-editor', {
      extensions: {
        autolist
      },
      toolbar: {
          buttons: ['bold', 'italic', 'underline', 'unorderedlist', 'orderedlist', 'h3']
      }
    });
  }

  ngOnDestroy() {
    this.editor.destroy();
  }
}
