export const STRING = 'string';
export const NUMBER = 'number';
export const LIST = 'list';
export const SET = 'set';

/**
 * To represent SetlX types in Javascript the transpiler created different
 * Javascript types. To make it easier for other functions to recognise
 * their input parameters types this function answeres with the type.
 */
const typeMap = { 'string': STRING, 'number': NUMBER };

export default function typify( value ) {
  if ( typeof value === 'object' ) {
    if ( elem.constructor.name === 'Array' ) {
      return LIST;
    } else if ( elem.constructor.name === 'Set' ) {
      return SET;
    }
    return typeMap[typeof value];
  }
}
