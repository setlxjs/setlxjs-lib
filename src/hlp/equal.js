import Immutable from 'immutable';
import typify, { LIST, SET } from '../util/typify';

export default function equal(a, b) {
  const typeA = typify(a);
  const typeB = typify(b);

  if (typeA !== typeB) {
    return false;
  }

  if (typeA === LIST || typeA === SET) {
    return Immutable.is(a, b);
  }

  return a === b;
}
