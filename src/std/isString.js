import typify, { STRING } from '../util/typify';

/**
 * Checks if the parameter is a string
 */
export default function isString(param) {
  return typify(param) === STRING;
}
