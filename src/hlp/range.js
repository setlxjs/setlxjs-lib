import { Range } from 'immutable';

class Wrapper {
  constructor(r) {
    this.range = r;
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
