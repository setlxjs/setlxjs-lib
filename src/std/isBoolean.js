import typify, { BOOLEAN } from '../util/typify';

/**
 * Checks if the parameter is a boolean value
 */
export default function isBoolean(param) {
  return typify(param) === BOOLEAN;
}
