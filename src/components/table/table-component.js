import ExcelComponent from '../../core/excel-component';
import { createTable } from './table.template';

export default class TableComponent extends ExcelComponent {
  static className = 'excel__table';

  toHTML() {
    return createTable(20);
  }
}
