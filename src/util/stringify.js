import typify, { OM, LIST, SET, STRING, NUMBER } from './typify';

/**
 * This function converts values to Strings. In some cases the Javascript
 * implementation of toString() does not equal the Setlx implementation.
 *
 * Other functions can call this function whenever they need to convert a
 * value to a string and be sure they have the correct Setlx toString
 * representation.
 */
export default function stringify(value, quotationMarks = true) {
  const type = typify(value);
  if (type === LIST) {
    return '[' + value.map(stringify).join(', ') + ']';
  }
  if (type === SET) {
    if (value.every(val => typify(val) === NUMBER)) {
      return '{' + value.sort().map(stringify).join(', ') + '}';
    }
    return '{' + value.map(stringify).join(', ') + '}';
  }
  if (type === STRING && quotationMarks !== false) {
    return '"' + value + '"';
  }
  if (type === OM) {
    return 'om';
  }

  return value.toString();
}
