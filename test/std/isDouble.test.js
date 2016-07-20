import 'should';
import isDouble from '../../src/std/isDouble';
import { List, Set } from 'immutable';

describe('std/isDouble', () => {
  it('should return true on lists', () => {
    isDouble(1.2).should.be.ok();
  });

  it('should return false on every other type', () => {
    isDouble('str').should.not.be.ok();
    isDouble(4).should.not.be.ok();
    isDouble(true).should.not.be.ok();
    isDouble(Set.of(1, 2, 3)).should.not.be.ok();
    isDouble(List.of(1, 2, 3)).should.not.be.ok();
    isDouble(() => null).should.not.be.ok();
  });
});
