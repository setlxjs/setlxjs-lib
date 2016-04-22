import combinations from '../util/combinations';

export default class Generator {
  constructor(iterators) {
    this.iterators = iterators;
    this.filters = [];
  }

  list(mapper) {
    let perms = combinations(...this.iterators);
    perms = this.filters.reduce((p, filter) => p.filter(per => filter(...per)), perms);

    return perms.map(p => mapper(...p));
  }

  set(mapper) {
    return s(this.list(mapper));
  }

  filter(filter) {
    this.filters.push(filter);
    return this;
  }
}
