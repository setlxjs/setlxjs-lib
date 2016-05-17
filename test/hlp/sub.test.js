import 'should';
import sub from '../../src/hlp/sub';
import s from '../../src/hlp/s';
import l from '../../src/hlp/l';
import equal from '../../src/hlp/equal';

describe('hlp/sub', () => {
  it('should substract two numbers', () => {
    sub(120, 45).should.be.exactly(120 - 45);
    sub(-123, 90).should.be.exactly(-123 - 90);
    sub(123, -90).should.be.exactly(123 + 90);
  });

  it('should substract two sets', () => {
    equal(sub(s(1, 3, 4), s(3, 4, 9, 12)), s(1)).should.be.ok();
  });

  it('should throw on incompatible types', () => {
    (() => sub('str', 'str')).should.throw('\'"str" - "str"\' is undefined.');
    (() => sub(true, true)).should.throw('\'true - true\' is undefined.');
    (() => sub(l(1, 2), l(2, 3))).should.throw();
  });
});
