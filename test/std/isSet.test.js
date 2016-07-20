import 'should';
import isSet from '../../src/std/isSet';
import { List, Set } from 'immutable';

describe('std/isSet', () => {
  it('should return true on lists', () => {
    isSet(Set()).should.be.ok();
    isSet(Set.of(1)).should.be.ok();
    isSet(Set.of(1, 2, 3)).should.be.ok();
  });

  it('should return false on every other type', () => {
    isSet('str').should.not.be.ok();
    isSet(123.1).should.not.be.ok();
    isSet(4).should.not.be.ok();
    isSet(true).should.not.be.ok();
    isSet(List.of(1, 2, 3)).should.not.be.ok();
    isSet(() => null).should.not.be.ok();
  });
});
