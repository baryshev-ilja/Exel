import ExcelComponentAbstract from '../../core/excel-component-abstract';

export default class HeaderComponent extends ExcelComponentAbstract {
  static className = 'excel__header';

  constructor($rootElement, options) {
    super($rootElement, {
      name: 'Header',
      ...options,
    });
  }

  toHTML() {
    return `
    <input type="text" class="input" value="Новая таблица" />

      <div>

        <div class="button">
          <i class="material-icons">delete</i>
        </div>

        <div class="button">
          <i class="material-icons">exit_to_app</i>
        </div>
    `;
  }
}
