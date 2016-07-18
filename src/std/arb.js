import typify, { SET, LIST } from '../util/typify';

export default function arb(val) {
  if ([SET, LIST].indexOf(typify(val)) < 0) {
    throw new Error(`arb(${val}): operand is no collection value.`);
  }
  if (val.isEmpty()) {
    return null;
  }
  return val.first();
}
