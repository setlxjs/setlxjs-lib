import equal from '../../src/hlp/equal';
import s from '../../src/hlp/s';
import l from '../../src/hlp/l';
import range from '../../src/hlp/range';

describe('hlp/range', () => {
  it('should create a list from start to end', () => {
    equal(range(1, 5).list, l(1, 2, 3, 4, 5)).should.be.ok();
    range(1, 100).list.should.have.property('size', 100);
  });

  it('should create a set from start to end', () => {
    equal(range(1, 5).set, s(1, 2, 3, 4, 5)).should.be.ok();
    range(1, 100).set.should.have.property('size', 100);
  });
});
