import { capitalize } from './utils';

function getMethodName(eventName) {
  return `on${capitalize(eventName)}`;
}

export default class DomListenerAbstract {
  #rootElement = null;
  #listeners = null;

  constructor($rootElement, listeners = []) {
    if (!$rootElement) {
      throw new Error(`No $root provided for DomListener!`);
    }
    this.#rootElement = $rootElement;
    this.#listeners = listeners;
  }

  get rootElement() {
    return this.#rootElement;
  }

  initDOMListeners() {
    this.#listeners.forEach((listener) => {
      const method = getMethodName(listener);
      if (!this[method]) {
        throw new Error(`Method ${method} is not implemented in ${this.name || ''} Component!`);
      }
      this[method] = this[method].bind(this);
      this.#rootElement.on(listener, this[method]);
    });
  }

  removeDOMListeners() {
    this.#listeners.forEach((listener) => {
      const method = getMethodName(listener);
      this.#rootElement.off(listener, this[method]);
    });
  }
}
