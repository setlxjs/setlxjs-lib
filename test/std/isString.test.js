import 'should';
import isString from '../../src/std/isString';
import { List, Set } from 'immutable';

describe('std/isString', () => {
  it('should return true on booleans', () => {
    isString('str').should.be.ok();
  });

  it('should return false on every other type', () => {
    isString(123.1).should.not.be.ok();
    isString(4).should.not.be.ok();
    isString(true).should.not.be.ok();
    isString(List.of(1, 2, 3)).should.not.be.ok();
    isString(Set.of(1, 2, 3)).should.not.be.ok();
    isString(() => null).should.not.be.ok();
  });
});
