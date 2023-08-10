class Dom {
  #element = null;

  constructor(selector) {
    this.#element = typeof selector === 'string' ? document.querySelector(selector) : selector;
  }

  get element() {
    return this.#element;
  }

  html(html) {
    if (typeof html === 'string') {
      this.#element.innerHTML = html;
      return this;
    }
    return this.#element.outerHTML.trim();
  }

  text(content) {
    if (typeof content === 'string') {
      this.#element.textContent = content;
      return this;
    }
    if (this.#element.tagName.toLowerCase() === 'input') {
      return this.#element.value.trim();
    }
    return this.#element.textContent.trim();
  }

  clear() {
    this.html('');
    return this;
  }

  on(eventType, callback) {
    this.#element.addEventListener(eventType, callback);
  }

  off(eventType, callback) {
    this.#element.removeEventListener(eventType, callback);
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.element;
    }

    if (Element.prototype.append) {
      this.#element.append(node);
    } else {
      this.#element.appendChild(node);
    }

    return this;
  }

  get data() {
    return this.#element.dataset;
  }

  closest(selector) {
    return $(this.#element.closest(selector));
  }

  getCoords() {
    return this.#element.getBoundingClientRect();
  }

  findAll(selector) {
    return this.#element.querySelectorAll(selector);
  }

  find(selector) {
    return $(this.#element.querySelector(selector));
  }

  css(styles = {}) {
    Object.keys(styles).forEach((key) => {
      this.#element.style[key] = styles[key];
    });
  }

  id(parse) {
    if (parse) {
      const parsed = this.id().split(':');
      return {
        row: +parsed[0],
        col: +parsed[1],
      };
    }
    return this.data.id;
  }

  focus() {
    this.#element.focus();
    return this;
  }

  addClass(className) {
    this.#element.classList.add(className);
    return this;
  }

  removeClass(className) {
    this.#element.classList.remove(className);
    return this;
  }
}

function $(selector) {
  return new Dom(selector);
}

$.create = (tagName, classes = '') => {
  const element = document.createElement(tagName);
  if (classes) {
    element.classList.add(classes);
  }
  return $(element);
};

export { $ };
