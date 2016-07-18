import should from 'should';
import arb from '../../src/std/arb';
import { Set, List } from 'immutable';

describe('std/arb', () => {
  it('should remove some value from a set', () => {
    const someSet = Set.of(1, 2, 3);
    someSet.has(arb(someSet)).should.be.ok();

    const someList = List.of(2, 4, 5);
    someList.has(arb(someList)).should.be.ok();
  });

  it('should remove the only value from a set', () => {
    arb(Set.of(1)).should.eql(1);
    arb(List.of('str')).should.eql('str');
  });

  it('should return om when being called with empty set', () => {
    should(arb(Set())).be.null();
    should(arb(List())).be.null();
  });
});
