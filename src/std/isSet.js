import typify, { SET } from '../util/typify';

/**
 * Checks if the parameter is a set
 */
export default function isSet(param) {
  return typify(param) === SET;
}
