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

  it('every should return true if every call returns true', () => {
    const fn = sinon.stub().returns(true);
    const gen = new Generator([l(1, 2), l(3, 4)]);

    gen.every(fn).should.be.ok();
  });

  it('every should return false if any call returns false', () => {
    const fn = sinon.stub().returns(true);
    const gen = new Generator([l(1, 2, 3, 4)]);
    fn.onThirdCall().returns(false);

    gen.every(fn).should.not.be.ok();
  });

  it('some should return false if every call returns false', () => {
    const fn = sinon.stub().returns(false);
    const gen = new Generator([l(1, 2), l(3, 4)]);

    gen.some(fn).should.not.be.ok();
  });

  it('some should return true if any call returns true', () => {
    const fn = sinon.stub().returns(false);
    const gen = new Generator([l(1, 2, 3, 4)]);
    fn.onThirdCall().returns(true);

    gen.some(fn).should.be.ok();
  });
});
