import DomListenerAbstract from './dom-listener-abstract';

export default class ExcelComponentAbstract extends DomListenerAbstract {
  constructor($rootElement, options = {}) {
    super($rootElement, options.listeners);
    this.name = options.name || '';

    this.observer = options.observer;
    this.unsubscribers = [];

    this.prepare();
  }

  prepare() {}

  toHTML() {
    return '';
  }

  $emit(event, ...args) {
    this.observer.emit(event, ...args);
  }

  $on(event, fn) {
    const unsub = this.observer.subscribe(event, fn);
    this.unsubscribers.push(unsub);
  }

  init() {
    this.initDOMListeners();
  }

  destroy() {
    this.removeDOMListeners();
    this.unsubscribers.forEach((unsub) => unsub());
  }
}
