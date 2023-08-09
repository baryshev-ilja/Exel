import { $ } from '../../core/dom-framework';

export default class ExcelBoard {
  #element = null;
  #components = null;

  constructor(selector, options) {
    this.#element = $(selector);
    this.#components = options.components || [];
  }

  getRoot() {
    const $rootElement = $.create('div', 'excel');

    this.#components = this.#components.map((Component) => {
      const $element = $.create('div', Component.className);
      const component = new Component($element);

      // if (component.name) {
      //   window['c' + component.name] = component;
      // }

      $element.html(component.toHTML());
      $rootElement.append($element);
      return component;
    });
    return $rootElement;
  }

  render() {
    this.#element.append(this.getRoot());

    this.#components.forEach((component) => component.init());
  }
}
