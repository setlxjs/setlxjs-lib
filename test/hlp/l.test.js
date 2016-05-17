import 'should';
import Immutable, { List } from 'immutable';
import l from '../../src/hlp/l';

describe('hlp/l', () => {
  it('should create sets', () => {
    Immutable.is(l(), List()).should.be.ok();
    Immutable.is(l(1, 2, 3), List.of(1, 2, 3)).should.be.ok();
    Immutable.is(l(1), List.of(1)).should.be.ok();
  });
});
