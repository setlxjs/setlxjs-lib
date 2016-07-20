import typify, { NUMBER, STRING, SET } from '../util/typify';
import stringify from '../util/stringify';

export default function mul(lefthand, righthand) {
  const typeL = typify(lefthand);
  const typeR = typify(righthand);

  if (typeL === NUMBER && typeR === NUMBER) {
    return lefthand * righthand;
  }

  if (typeL === NUMBER && typeR === STRING) {
    return righthand.repeat(lefthand);
  }
  if (typeL === STRING && typeR === NUMBER) {
    return lefthand.repeat(righthand);
  }

  if (typeL === SET && typeR === SET) {
    return lefthand.intersect(righthand);
  }

  throw new Error('\'' + stringify(lefthand) + ' * ' + stringify(righthand) +
    '\' is undefined.');
}
