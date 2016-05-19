import 'should';
import mul from '../../src/hlp/mul';
import s from '../../src/hlp/s';
import l from '../../src/hlp/l';

describe('hlp/mul', () => {
  it('should multiply two numbers', () => {
    mul(535, 2034).should.be.exactly(535 * 2034);
  });

  it('should throw errors for mismatched types', () => {
    (() => mul(l(1, 3, 5), s(5, 6))).should.throw();
    (() => mul(l(1, 3, 5), 6)).should.throw();
    (() => mul(s(), 6)).should.throw();
    (() => mul(true, false)).should.throw();
  });
});
