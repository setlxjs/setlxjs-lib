import 'should';
import typify, { STRING, NUMBER, BOOLEAN, LIST, SET } from '../../src/util/typify';

import { Set, List } from 'immutable';

describe('util/typify', () => {
  it('should identify strings', () => {
    typify('some string').should.be.exactly(STRING);
  });

  it('should identify numbers', () => {
    typify(28475).should.be.exactly(NUMBER);
  });

  it('should identify booleans', () => {
    typify(false).should.be.exactly(BOOLEAN);
  });

  it('should identify lists', () => {
    typify(List.of(1, 'hi', true)).should.be.exactly(LIST);
  });

  it('should identify sets', () => {
    typify(Set.of(1, 3, 'hi')).should.be.exactly(SET);
  });
});
