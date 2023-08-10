import {$} from '../../core/dom-framework';
import Observer from '../../core/observer';

export default class ExcelBoard {
  #element = null;
  #components = null;
  #observer = null;

  constructor(selector, options) {
    this.#element = $(selector);
    this.#components = options.components || [];
    this.#observer = new Observer();
  }

  getRoot() {
    const $rootElement = $.create('div', 'excel');

    const componentOptions = {
      observer: this.#observer,
    };

    this.#components = this.#components.map((Component) => {
      const $element = $.create('div', Component.className);
      const component = new Component($element, componentOptions);

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

  destroy() {
    this.#components.forEach((component) => component.destroy());
  }
}
