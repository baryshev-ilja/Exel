import ExcelComponentAbstract from '../../core/excel-component-abstract';
import {$} from '../../core/dom-framework';

export default class FormulaComponent extends ExcelComponentAbstract {
  static className = 'excel__formula';

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'Formula',
      listeners: ['input', 'click', 'keydown'],
      ...options,
    });
  }

  init() {
    super.init();

    this.$formula = this.rootElement.find('#formula');

    this.$on('table:select', ($cell) => {
      this.$formula.text($cell.text());
    });

    this.$on('table:input', ($cell) => {
      this.$formula.text($cell.text());
    });
  }

  toHTML() {
    return `
      <div class="info">fx</div>
      <div id="formula" class="input" contenteditable spellcheck="false"></div>
    `;
  }

  onInput(event) {
    this.$emit('formula:input', $(event.target).text());
  }

  onClick() {
    console.log('click');
  }

  onKeydown(event) {
    const keys = ['Enter', 'Tab'];
    if (keys.includes(event.key)) {
      event.preventDefault();

      this.$emit('formula:done');
    }
  }
}
