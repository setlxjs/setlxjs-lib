import 'should';
import { List, Set } from 'immutable';
import equal from '../../src/hlp/equal';

describe('hlp/equal', () => {
  it('should check for number equality', () => {
    equal(535, 2034).should.not.be.ok();
    equal(5, 5).should.be.ok();
  });

  it('should check for string equality', () => {
    equal('a', 'b').should.not.be.ok();
    equal('c', 'c').should.be.ok();
  });

  it('should check for boolean equality', () => {
    equal(true, false).should.not.be.ok();
    equal(false, true).should.not.be.ok();
    equal(true, true).should.be.ok();
    equal(false, false).should.be.ok();
  });

  it('should check for list equality', () => {
    equal(List(), List.of(1)).should.not.be.ok();
    equal(List.of(1, 2, 4), List.of(1, 2, 3)).should.not.be.ok();
    equal(List(), List()).should.be.ok();
    equal(List.of(1), List.of(1)).should.be.ok();
    equal(List.of(List.of(1), 2), List.of(List.of(1), 2)).should.be.ok();
  });

  it('should check for set equality', () => {
    equal(Set(), Set.of(1)).should.not.be.ok();
    equal(Set.of(1, 2, 4), Set.of(1, 2, 3)).should.not.be.ok();
    equal(Set(), Set()).should.be.ok();
    equal(Set.of(1), Set.of(1)).should.be.ok();
    equal(Set.of(Set.of(1), 2), Set.of(Set.of(1), 2)).should.be.ok();
  });
});
