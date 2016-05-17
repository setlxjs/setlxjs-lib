import { Range } from 'immutable';

class Wrapper {
  constructor(range) {
    this.range = range;
  }

  get set() {
    return this.range.toSet();
  }

  get list() {
    return this.range.toList();
  }
}

export default function range(start, end, step) {
  return new Wrapper(Range(start, end + 1, step));
}
