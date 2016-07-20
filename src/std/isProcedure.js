import typify, { PROCEDURE } from '../util/typify';

/**
 * Checks if the parameter is a procedure
 */
export default function isProcedure(param) {
  return typify(param) === PROCEDURE;
}
