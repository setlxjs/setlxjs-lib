import 'should';
import sinon from 'sinon';

import Generator from '../../src/class/Generator';
import l from '../../src/hlp/l';
import equal from '../../src/hlp/equal';

describe('class/Generator', () => {
  it('should be possible to create a Generator', () => {
    new Generator([l(1, 2, 3)]).should.be.an.Object();
  });

  it('should map simple generations to lists', () => {
    const gen = new Generator([l(1, 2, 3)]);

    equal(gen.map(x => x).list, l(1, 2, 3)).should.be.ok();
  });

  it('should filter and then map simple generations to lists', () => {
    const gen = new Generator([l(1, 2, 3)]);

    equal(gen.filter(x => x % 2 === 1).map(x => x).list, l(1, 3)).should.be.ok();
  });

  it('should map combinations of the iterables', () => {
    const spy = sinon.spy();
    const gen = new Generator([l(1, 2), l(3, 4)]);

    gen.map(spy);

    sinon.assert.callCount(spy, 4);
    sinon.assert.calledWith(spy, 1, 3);
    sinon.assert.calledWith(spy, 1, 4);
    sinon.assert.calledWith(spy, 2, 3);
    sinon.assert.calledWith(spy, 2, 4);
  });
});
