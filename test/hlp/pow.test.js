import 'should';
import pow from '../../src/hlp/pow';
import Immutable, { Set } from 'immutable';

describe('hlp/pow', () => {
  it('should compute the power of two numbers', () => {
    pow(4, 3).should.eql(64);
    pow(10, 3).should.eql(1000);
  });

  it('should compute the power set', () => {
    Immutable.is(
      pow(2, Set.of(1, 2, 3)),
      Set.of(
        Set(),
        Set.of(1),
        Set.of(2),
        Set.of(3),
        Set.of(1, 2),
        Set.of(2, 3),
        Set.of(1, 3),
        Set.of(1, 2, 3)
      )
    ).should.be.ok();
  });
});
