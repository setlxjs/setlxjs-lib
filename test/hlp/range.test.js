const range = require('../../dist/hlp/range');

describe('hlp/range', () => {
  it('should create a list from start to end', () => {
    range(0, 5).should.eql([0, 1, 2, 3, 4, 5]);
    range(1, 100).should.have.length(100);
  });
});
