import 'should';
import isList from '../../src/std/isList';
import { List, Set } from 'immutable';

describe('std/isList', () => {
  it('should return true on lists', () => {
    isList(List()).should.be.ok();
    isList(List.of(1)).should.be.ok();
    isList(List.of(1, 2, 3)).should.be.ok();
  });

  it('should return false on every other type', () => {
    isList('str').should.not.be.ok();
    isList(123.1).should.not.be.ok();
    isList(4).should.not.be.ok();
    isList(true).should.not.be.ok();
    isList(Set.of(1, 2, 3)).should.not.be.ok();
    isList(() => null).should.not.be.ok();
  });
});
