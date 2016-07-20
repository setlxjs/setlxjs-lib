import typify, { NUMBER } from '../util/typify';

/**
 * Checks if the parameter is an integer
 */
export default function isInteger(param) {
  return typify(param) === NUMBER && param % 1 === 0;
}
