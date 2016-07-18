import typify, { SET, NUMBER } from '../util/typify';
import stringify from '../util/stringify';
import { Set } from 'immutable';

/**
 * tail recursive helper without sanity checks
 */
function makePow(left, prev) {
  if (left.isEmpty()) {
    return prev;
  }
  const elem = left.first();
  return makePow(
    left.remove(elem),
    prev.union(prev.map(e => e.add(elem)))
  );
}

/**
 * Calculates the power of two numbers or the power set
 */
export default function pow(lhs, rhs) {
  if (typify(lhs) === SET && rhs === 2) {
    return makePow(lhs, Set.of(Set()));
  }
  if (typify(lhs) !== NUMBER) {
    throw new Error(`Left-hand-side of '${stringify(lhs)} ** ${stringify(rhs)}'` +
      'is not a number.');
  }
  if (typify(rhs) !== NUMBER) {
    throw new Error(`Right-hand-side of '${stringify(lhs)} ** ${stringify(rhs)}'` +
      'is not a number.');
  }
  return Math.pow(lhs, rhs);
}
