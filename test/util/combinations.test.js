import 'should';

import combinations from '../../src/util/combinations';

describe('util/combinations', () => {
  it('should make combinations of a single array', () => {
    combinations([1, 2, 3]).should.eql([[1], [2], [3]]);
  });

  it('should make combinations multiple arrays', () => {
    combinations([1, 2], [3, 4]).should.eql([[1, 3], [1, 4], [2, 3], [2, 4]]);
    combinations([1, 2, 3], [4, 5, 6]).should.eql([
      [1, 4], [1, 5], [1, 6],
      [2, 4], [2, 5], [2, 6],
      [3, 4], [3, 5], [3, 6],
    ]);
    combinations([1, 2], [3, 4], [5, 6]).should.eql([
      [1, 3, 5], [1, 3, 6], [1, 4, 5], [1, 4, 6],
      [2, 3, 5], [2, 3, 6], [2, 4, 5], [2, 4, 6],
    ]);
  });
});
