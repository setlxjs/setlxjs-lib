require('should');

const Generator = require('../../dist/class/Generator');

describe('class/Generator', () => {
  it('should be possible to create a Generator', () => {
    new Generator([[1, 2, 3]]).should.be.an.Object();
  });

  it('should map simple generations to lists', () => {
    const gen = new Generator([[1, 2, 3]]);

    gen.list(x => x).should.eql([1, 2, 3]);
  });

  it('should filter and then map simple generations to lists', () => {
    const gen = new Generator([[1, 2, 3]]);

    gen.filter(x => x % 2 === 1).list(x => x).should.eql([1, 3]);
  });
});
