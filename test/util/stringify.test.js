import 'should';
import Immutable, { Set, List } from 'immutable';
import stringify from '../../src/util/stringify';

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
    stringify(List.of(true, 1, 'abc')).should.be.exactly('[true, 1, "abc"]');
    stringify(Immutable.fromJS([[1, 3], 3, 6])).should.be.exactly('[[1, 3], 3, 6]');
    stringify(List()).should.be.exactly('[]');
  });

  it('should convert sets', () => {
    const set1 = Set.of(true, 1, 'abc');
    stringify(set1).should.be.exactly('{true, 1, "abc"}');
    const set2 = Set.of(Set.of(1, 3), 3, 6);
    stringify(set2).should.be.exactly('{{1, 3}, 3, 6}');
    stringify(Set()).should.be.exactly('{}');
  });
});
