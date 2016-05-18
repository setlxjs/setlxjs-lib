import 'should';
import add from '../../src/hlp/add';
import s from '../../src/hlp/s';
import l from '../../src/hlp/l';
import equal from '../../src/hlp/equal';

describe('hlp/add', () => {
  it('should add two numbers', () => {
    add(535, 2034).should.be.exactly(535 + 2034);
  });

  it('should concat two strings', () => {
    add('hello', 'world').should.be.exactly('helloworld');
  });

  it('should concat two lists', () => {
    equal(add(l(5, 4), l(3, 2, 1)), l(5, 4, 3, 2, 1)).should.be.ok();
  });

  it('should unit two sets', () => {
    equal(add(s(1, 3, 5), s(2, 3, 4)), s(1, 2, 3, 4, 5)).should.be.ok();

    equal(add(s(1), s(1)), s(1)).should.be.ok();
  });

  it('should concat strings with other types', () => {
    add('str', 5).should.be.exactly('str5');
    add('str', true).should.be.exactly('strtrue');
    add('str', l(1, 'abc')).should.be.exactly('str[1, "abc"]');
    add('str', s(1, 3, 5)).should.be.exactly('str{1, 3, 5}');
  });

  it('should throw errors for mismatched types', () => {
    (() => add(l(1, 3, 5), s(5, 6))).should.throw();
    (() => add(l(1, 3, 5), 6)).should.throw();
    (() => add(s(), 6)).should.throw();
    (() => add(true, false)).should.throw('\'true + false\' is undefined.');
  });
});
