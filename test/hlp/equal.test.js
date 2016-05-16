require('should');
const equal = require('../../dist/hlp/equal');

describe('hlp/equal', () => {
  it('should check for number equality', () => {
    equal(535, 2034).should.not.be.ok();
    equal(5, 5).should.be.ok();
  });

  it('should check for string equality', () => {
    equal('a', 'b').should.not.be.ok();
    equal('c', 'c').should.be.ok();
  });

  it('should check for boolean equality', () => {
    equal(true, false).should.not.be.ok();
    equal(false, true).should.not.be.ok();
    equal(true, true).should.be.ok();
    equal(false, false).should.be.ok();
  });

  it('should check for list equality', () => {
    equal([], [1]).should.not.be.ok();
    equal([1, 2, 4], [1, 2, 3]).should.not.be.ok();
    equal([], []).should.be.ok();
    equal([1], [1]).should.be.ok();
  });
});
