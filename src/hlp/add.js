import stringify from '../util/stringify';
import typify, { STRING, LIST, SET, BOOLEAN } from '../util/typify';

export default function add( lefthand, righthand ) {
  const typeL = typify( lefthand );
  const typeR = typify( righthand );

  if ( typeL === STRING || typeR === STRING ) {
    return stringify( lefthand, false ) + stringify( righthand, false );
  }

  if ( typeL === typeR ) {
    switch( typeL ) {
    case BOOLEAN:
      throw new Error( '\'' + stringify( lefthand ) + ' + ' + stringify( righthand ) +
        '\' is undefined.');
    case LIST:
      return lefthand.concat(righthand);
    case SET:
      return new Set(Array.from(lefthand).concat(Array.from(righthand)));
    default:
      return lefthand + righthand;
    }
  }

  throw new Error('Righthandside of ' + stringify( lefthand ) + ' + ' +
    stringify( righthand ) + ` is not a ${ typeL } or string.`);
}
