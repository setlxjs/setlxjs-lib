import typify, { LIST } from '../util/typify';

/**
 * Checks if the parameter is a list
 */
export default function isList(param) {
  return typify(param) === LIST;
}
