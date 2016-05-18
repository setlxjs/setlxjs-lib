import sub from '../../src/hlp/sub';
import s from '../../src/hlp/s';
import l from '../../src/hlp/l';

describe('hlp/sub', () => {
  it('should substract two numbers', () => {
    sub(120, 45).should.be.exactly(120 - 45);
    sub(-123, 90).should.be.exactly(-123 - 90);
    sub(123, -90).should.be.exactly(123 + 90);
  });

  it('should substract two sets', () => {
    sub(s(1, 3, 4), s(3, 4, 9, 12)).should.eql(s(1));
    sub(s(1, 3, 4), s(3, 4, 9, 12)).should.eql(s(1));
  });

  it('should throw on incompatible types', () => {
    (() => sub('str', 'str')).should.throw('\'"str" - "str"\' is undefined.');
    (() => sub(true, true)).should.throw('\'true - true\' is undefined.');
    (() => sub(l(1, 2), l(2, 3))).should.throw();
  });
});
