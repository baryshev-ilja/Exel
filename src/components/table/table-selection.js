export default class TableSelection {
  static className = 'selected';
  #group = null;

  constructor() {
    this.#group = [];
    this.current = null;
  }

  select(element) {
    this.clear();
    element.focus().addClass(TableSelection.className);
    this.current = element;
    this.#group.push(element);
  }

  clear() {
    this.#group.forEach((element) => element.removeClass(TableSelection.className));
    this.#group = [];
  }

  selectGroup(group = []) {
    this.clear();
    this.#group = group;
    this.#group.forEach((element) => element.addClass(TableSelection.className));
  }
}
