import ExcelComponentAbstract from '../../core/excel-component-abstract';

export default class ToolbarComponent extends ExcelComponentAbstract {
  static className = 'excel__toolbar';

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'Toolbar',
      listeners: ['click'],
      ...options,
    });
  }

  toHTML() {
    return `
    <div class="button">
        <i class="material-icons">format_align_left</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_center</i>
      </div>

      <div class="button">
        <i class="material-icons">format_align_right</i>
      </div>

      <div class="button">
        <i class="material-icons">format_bold</i>
      </div>

      <div class="button">
        <i class="material-icons">format_italic</i>
      </div>

      <div class="button">
        <i class="material-icons">format_underlined</i>
      </div>`;
  }

  onClick(event) {
    console.log(event.target);
  }
}
