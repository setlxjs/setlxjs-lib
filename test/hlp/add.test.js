const add = require('../../dist/hlp/add');

describe('hlp/add', () => {
  it('should add two numbers', () => {
    add(535, 2034).should.be.exactly(535 + 2034);
  });

  it('should concat two strings', () => {
    add('hello', 'world').should.be.exactly('helloworld');
  });

  it('should concat two lists', () => {
    add([5, 4], [3, 2, 1]).should.be.an.Array().and.eql([5, 4, 3, 2, 1]);
  });

  it('should unit two sets', () => {
    add(new Set([1, 3, 5]), new Set([2, 3, 4]))
      .should.eql(new Set([1, 2, 3, 4, 5]));
  });

  it('should concat strings with other types', () => {
    add('str', 5).should.be.exactly('str5');
    add('str', true).should.be.exactly('strtrue');
    add('str', [1, 'abc']).should.be.exactly('str[1, "abc"]');
    add('str', new Set([1, 3, 5])).should.be.exactly('str{1, 3, 5}');
  });

  it('should throw errors for mismatched types', () => {
    (() => add([1, 3, 5], new Set([5, 6]))).should.throw();
    (() => add([1, 3, 5], 6)).should.throw();
    (() => add(new Set(), 6)).should.throw();
    (() => add(true, false)).should.throw();
  });
});
