const types = require('../../dist/util/typify');

const typify = types['default'];

require('should');

describe('util/typify', () => {
  it('should identify strings', () => {
    typify('some string').should.be.exactly(types.STRING);
  });

  it('should identify numbers', () => {
    typify(28475).should.be.exactly(types.NUMBER);
  });

  it('should identify booleans', () => {
    typify(false).should.be.exactly(types.BOOLEAN);
  });

  it('should identify lists', () => {
    typify([1, 'hi', []]).should.be.exactly(types.LIST);
  });

  it('should identify sets', () => {
    const someSet = new Set();

    someSet.add(1);
    someSet.add(3);
    typify(someSet).should.be.exactly(types.SET);
  });
});
