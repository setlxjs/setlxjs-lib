import typify, { NUMBER } from '../util/typify';

/**
 * Checks if the parameter is a double
 */
export default function isDouble(param) {
  return typify(param) === NUMBER && param % 1 !== 0;
}
