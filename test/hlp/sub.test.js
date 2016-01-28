const sub = require('../../dist/hlp/sub');

describe('hlp/sub', () => {
  it('should substract two numbers', () => {
    sub(120, 45).should.be.exactly(120 - 45);
    sub(-123, 90).should.be.exactly(-123 - 90);
    sub(123, -90).should.be.exactly(123 + 90);
  });

  it('should substract two sets', () => {
    sub(new Set([1, 3, 4]), new Set([3, 4, 9, 12])).should.eql(new Set([1]));
  });

  it('should throw on incompatible types', () => {
    (() => sub('str', 'str')).should.throw('\'"str" - "str"\' is undefined.');
    (() => sub(true, true)).should.throw('\'true - true\' is undefined.');
    (() => sub([1, 2], [2, 3])).should.throw();
  });
});
