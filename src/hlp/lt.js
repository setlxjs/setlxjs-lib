import typify, { SET, NUMBER } from '../util/typify';
import stringify from '../util/stringify';

export default function lt(a, b) {
  const typeA = typify(a);
  const typeB = typify(b);

  if (typeA !== typeB) {
    throw new Error(`Types must match: '${stringify(a)} < ${stringify(b)}'`);
  }
  if (typeA === SET) {
    return !a.equals(b) && a.isSubset(b);
  }
  if (typeA === NUMBER) {
    return a < b;
  }
  throw new Error(`'${stringify(a)} < ${stringify(b)}' is undefined.`);
}
