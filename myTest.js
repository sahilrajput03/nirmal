let Banana = require('./question1')
let assert = require("chai").assert;


const banana1 = new Banana(3, 5.5);
const banana2 = new Banana(1, 4);
const banana3 = new Banana(9, 55, 'brown');

describe('Bananas', function () {
  it('All bananas should be yellow', function () {
    [banana1, banana2, banana3].forEach(banana => {
      assert.equal(banana.color.toLowerCase(), 'yellow');
    });
  });

  it('All bananas should be yummy', function () {
    [banana1, banana2, banana3].forEach(banana => {
      assert.isTrue(banana.isYummy);
    });
  });

  it('All bananas should have its own length', function () {
    assert.equal(banana1.length, 3);
    assert.equal(banana2.length, 1);
    assert.equal(banana3.length, 9);
  });

  it('All bananas should have its own diameter', function () {
    assert.equal(banana1.diameter, 5.5);
    assert.equal(banana2.diameter, 4);
    assert.equal(banana3.diameter, 55);
  });

  it('All bananas should be able to rot', function () {
    [banana1, banana2, banana3].forEach(banana => {
      banana.rot();
      assert.isNotTrue(banana.isYummy);
    });
  });

});