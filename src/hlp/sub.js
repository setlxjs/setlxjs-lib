import stringify from '../util/stringify';
import typify, { NUMBER, SET } from '../util/typify';

export default function sub( lefthand, righthand ) {
  const typeL = typify( lefthand );
  const typeR = typify( righthand );

  if ( typeL === NUMBER && typeR === NUMBER ) {
    return lefthand - righthand;
  }

  if ( typeL === SET && typeR === SET ) {
    let ret = new Set( lefthand );

    righthand.forEach(elem => ret.delete( elem ));

    return ret;
  }

  throw new Error( '\'' + stringify( lefthand ) + ' - ' + stringify( righthand ) +
    '\' is undefined.');
}
