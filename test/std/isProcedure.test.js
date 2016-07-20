import 'should';
import isProcedure from '../../src/std/isProcedure';
import { List, Set } from 'immutable';

describe('std/isProcedure', () => {
  it('should return true on booleans', () => {
    isProcedure(() => null).should.be.ok();
  });

  it('should return false on every other type', () => {
    isProcedure('str').should.not.be.ok();
    isProcedure(123.1).should.not.be.ok();
    isProcedure(4).should.not.be.ok();
    isProcedure(true).should.not.be.ok();
    isProcedure(List.of(1, 2, 3)).should.not.be.ok();
    isProcedure(Set.of(1, 2, 3)).should.not.be.ok();
  });
});
