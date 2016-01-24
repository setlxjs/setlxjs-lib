import typify, { LIST, SET, STRING } from './typify';

/**
 * This function converts values to Strings. In some cases the Javascript
 * implementation of toString() does not equal the Setlx implementation.
 *
 * Other functions can call this function whenever they need to convert a
 * value to a string and be sure they have the correct Setlx toString
 * representation.
 */
export default function stringify( value, quotationMarks = true ) {
  const type = typify( value );
  if ( type === LIST ) {
    return '[' + value.map(stringify).join(', ') + ']';
  } else if ( type === SET ) {
    return '{' + Array.from( value, stringify ).join(', ') + '}';
  } else if ( type === STRING && quotationMarks ) {
    return '"' + value + '"';
  }

  return value.toString();
}
