import lte from './lte';

export default function gte(a, b) {
  return lte(b, a);
}
