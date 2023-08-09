import ExcelComponentAbstract from '../../core/excel-component-abstract';
import { createTable } from './table.template';
import { resizeHandler } from './table.resize';
import { shouldResize } from './table.functions';

export default class TableComponent extends ExcelComponentAbstract {
  static className = 'excel__table';

  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['click', 'mousedown', 'mousemove', 'mouseup'],
    });
  }

  toHTML() {
    return createTable(20);
  }

  onClick() {
    console.log(this.rootElement);
    console.log('click');
  }

  onMousedown(event) {
    if (shouldResize(event)) {
      resizeHandler(this.rootElement, event);
    }
  }

  onMousemove() {
    console.log('mousemove');
  }

  onMouseup() {
    console.log('mouseup');
  }
}
