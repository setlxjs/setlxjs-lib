import typify, { NUMBER } from '../util/typify';
import stringify from '../util/stringify';

export default function mul(lefthand, righthand) {
  const typeL = typify(lefthand);
  const typeR = typify(righthand);

  if (typeL === NUMBER && typeR === NUMBER) {
    return lefthand * righthand;
  }

  throw new Error('\'' + stringify(lefthand) + ' - ' + stringify(righthand) +
    '\' is undefined.');
}
