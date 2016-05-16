import typify, { LIST } from '../util/typify';

export default function equal(a, b) {
  const typeA = typify(a);
  const typeB = typify(b);

  if (typeA !== typeB) {
    return false;
  }

  if (typeA === LIST) {
    if (a.length !== b.length) {
      return false;
    }

    for (let i = 0; i < a.length; ++i) {
      if (!equal(a[i], b[i])) {
        return false;
      }
    }
    return true;
  }

  return a === b;
}
