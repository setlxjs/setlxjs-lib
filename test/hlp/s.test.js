import 'should';
import Immutable, { Set } from 'immutable';
import s from '../../src/hlp/s';

describe('hlp/s', () => {
  it('should create sets', () => {
    Immutable.is(s(), Set()).should.be.ok();
    Immutable.is(s(1, 2, 3), Set.of(1, 2, 3)).should.be.ok();
    Immutable.is(s(1), Set.of(1)).should.be.ok();
  });
});
