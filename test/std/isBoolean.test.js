import 'should';
import isBoolean from '../../src/std/isBoolean';
import { List, Set } from 'immutable';

describe('std/isBoolean', () => {
  it('should return true on booleans', () => {
    isBoolean(true).should.be.ok();
    isBoolean(false).should.be.ok();
  });

  it('should return false on every other type', () => {
    isBoolean('str').should.not.be.ok();
    isBoolean(123.1).should.not.be.ok();
    isBoolean(4).should.not.be.ok();
    isBoolean(List.of(1, 2, 3)).should.not.be.ok();
    isBoolean(Set.of(1, 2, 3)).should.not.be.ok();
    isBoolean(() => null).should.not.be.ok();
  });
});
