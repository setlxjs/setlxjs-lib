import combinations from '../hlp/combinations';
import s from '../hlp/s';
import l from '../hlp/l';

export default class Generator {
  constructor(iterators) {
    this.items = combinations(...iterators.map(it => it.toArray()));
  }

  map(fn) {
    this.items = this.items.map(args => fn(...args));
    return this;
  }

  filter(fn) {
    this.items = this.items.filter(args => fn(...args));
    return this;
  }

  every(fn) {
    return this.items.every(args => fn(...args));
  }

  some(fn) {
    return this.items.some(args => fn(...args));
  }

  get list() {
    return l(...this.items);
  }

  get set() {
    return s(...this.items);
  }
}
