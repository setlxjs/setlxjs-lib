import lt from './lt';
import equal from './equal';

export default function lte(a, b) {
  return equal(a, b) || lt(a, b);
}
