import { Set, List } from 'immutable';

export const STRING = 'string';
export const NUMBER = 'number';
export const LIST = 'list';
export const SET = 'set';
export const BOOLEAN = 'boolean';
export const OM = 'om';

/**
 * To represent SetlX types in Javascript the transpiler created different
 * Javascript types. To make it easier for other functions to recognise
 * their input parameters types this function answeres with the type.
 */
const typeMap = { string: STRING, number: NUMBER, boolean: BOOLEAN, undefined: OM, null: OM };

export default function typify(value) {
  if (List.isList(value)) {
    return LIST;
  } else if (Set.isSet(value)) {
    return SET;
  }
  return typeMap[typeof value];
}
