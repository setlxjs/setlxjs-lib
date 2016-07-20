import 'should';
import isInteger from '../../src/std/isInteger';
import { List, Set } from 'immutable';

describe('std/isInteger', () => {
  it('should return true on booleans', () => {
    isInteger(2).should.be.ok();
  });

  it('should return false on every other type', () => {
    isInteger('str').should.not.be.ok();
    isInteger(123.1).should.not.be.ok();
    isInteger(true).should.not.be.ok();
    isInteger(List.of(1, 2, 3)).should.not.be.ok();
    isInteger(Set.of(1, 2, 3)).should.not.be.ok();
    isInteger(() => null).should.not.be.ok();
  });
});
