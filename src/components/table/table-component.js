import ExcelComponentAbstract from '../../core/excel-component-abstract';
import {$} from '../../core/dom-framework';
import {createTable} from './table.template';
import {resizeHandler} from './table.resize';
import {isCell, shouldResize} from './table.functions';
import TableSelection from './table-selection';
import {matrix} from './table.functions';
import {nextSelector} from './table.functions';

export default class TableComponent extends ExcelComponentAbstract {
  static className = 'excel__table';

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'Table',
      listeners: ['mousedown', 'keydown', 'input'],
      ...options,
    });
  }

  toHTML() {
    return createTable(20);
  }

  prepare() {
    this.selection = new TableSelection();
  }

  init() {
    super.init();

    const $cell = this.rootElement.find('[data-id="0:0"]');
    this.selectCell($cell);

    this.$on('formula:input', (text) => {
      this.selection.current.text(text);
    });

    this.$on('formula:done', () => {
      this.selection.current.focus();
    });
  }

  selectCell(cell) {
    this.selection.select(cell);
    this.$emit('table:select', cell);
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.rootElement, event);
    } else if (isCell(event)) {
      const $target = $(event.target);

      if (event.shiftKey) {
        const targetCell = $target.id(true);
        const currentCell = this.selection.current.id(true);

        const selectedCells = matrix(targetCell, currentCell)
            .map((id) => this.rootElement.find(`[data-id="${id}"]`));
        this.selection.selectGroup(selectedCells);
      } else {
        this.selection.select($target);
      }
    }
  }

  onKeydown(event) {
    const keys = [
      'Enter',
      'Tab',
      'ArrowLeft',
      'ArrowRight',
      'ArrowDown',
      'ArrowUp',
    ];

    const {key} = event;

    if (keys.includes(key) && !event.shiftKey) {
      event.preventDefault();

      const id = this.selection.current.id(true);
      const $next = this.rootElement.find(nextSelector(key, id));
      this.selectCell($next);
    }
  }

  onInput(event) {
    this.$emit('table:input', $(event.target));
  }

  // onMousemove() {
  //   console.log('mousemove');
  // }
  //
  // onMouseup() {
  //   console.log('mouseup');
  // }
}
