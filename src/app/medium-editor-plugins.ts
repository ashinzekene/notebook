import MediumEditor from 'medium-editor';

const ol = ['1\\.', 'a\\.'];
const ul = ['-', '\\*'];

export const ListAuto = MediumEditor.Extension.extend({
  name: 'autolist',
  init() {
    this.subscribe('editableKeydownSpace', this.checkInput.bind(this));
    this.subscribe('editableKeydownTab', this.checkInput.bind(this));
  },
  checkInput() {
    const text = this.base.getSelectedParentElement().textContent;
    if ((new RegExp(`^\\s*(${ol.join('|')})`)).test(text) && this.base.getExtensionByName('orderedlist')) {
      this.base.execAction('delete');
      this.base.execAction('delete');
      this.base.execAction('delete');
      this.base.execAction('insertorderedlist');
    }
    if ((new RegExp(`^\\s*(${ul.join('|')})`)).test(text) && this.base.getExtensionByName('orderedlist')) {
      this.base.execAction('delete');
      this.base.execAction('delete');
      this.base.execAction('insertunorderedlist');
    }
  }
});
