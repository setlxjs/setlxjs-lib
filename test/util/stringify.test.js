const stringify = require('../../dist/util/stringify');

describe('util/stringify', () => {
  it('should convert strings', () => {
    stringify('abc').should.be.exactly('"abc"');
  });

  it('should convert strings without quotation marks', () => {
    stringify('abc', false).should.be.exactly('abc');
  });

  it('should convert numbers', () => {
    stringify(234).should.be.exactly('234');
    stringify(1.23).should.be.exactly('1.23');
  });

  it('should convert booleans', () => {
    stringify(true).should.be.exactly('true');
    stringify(false).should.be.exactly('false');
  });

  it('should convert lists', () => {
    stringify([true, 1, 'abc']).should.be.exactly('[true, 1, "abc"]');
    stringify([[1, 3], 3, 6]).should.be.exactly('[[1, 3], 3, 6]');
    stringify([]).should.be.exactly('[]');
  });

  it('should convert sets', () => {
    const set1 = new Set([true, 1, 'abc']);
    stringify(set1).should.be.exactly('{true, 1, "abc"}');
    const set2 = new Set([new Set([1, 3]), 3, 6]);
    stringify(set2).should.be.exactly('{{1, 3}, 3, 6}');
    stringify(new Set()).should.be.exactly('{}');
  });
});
