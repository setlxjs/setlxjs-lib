import 'should';
import lt from '../../src/hlp/lt';
import { Set } from 'immutable';

describe('hlp/lt', () => {
  it('should compare numbers', () => {
    lt(1, 2).should.be.ok();
    lt(2, 1).should.not.be.ok();
    lt(1, 1).should.not.be.ok();
  });

  it('should compare sets', () => {
    lt(Set.of(1), Set.of(1, 2)).should.be.ok();
    lt(Set(), Set.of(1, 2)).should.be.ok();
    lt(Set.of(1, 2), Set.of(1, 2)).should.not.be.ok();
    lt(Set.of(1, 3), Set.of(1, 2)).should.not.be.ok();
    lt(Set.of(1, 2, 3), Set.of(2, 3)).should.not.be.ok();
  });
});
