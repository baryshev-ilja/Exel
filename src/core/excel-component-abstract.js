import DomListenerAbstract from './dom-listener-abstract';

export default class ExcelComponentAbstract extends DomListenerAbstract {
  constructor($rootElement, options = {}) {
    super($rootElement, options.listeners);
    this.name = options.name || '';
  }

  toHTML() {
    return '';
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
  }
}
