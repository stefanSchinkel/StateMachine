var assert = require('chai').assert;
var StateMachine = require('./StateMachine');

describe('StateMachine', function () {
  "use strict";
  var sm;
  // fixture
  beforeEach(function () {
    sm = new StateMachine.StateMachine();
    sm.addTransition(1);
    sm.addTransition(1, 'a', 1);
    sm.addTransition(1, 'a', 1);
    sm.addTransition(1, 'b', 2);
    sm.addTransition(1, 'd', 3);
    sm.addTransition(2, 'c', 3);
  });


  // test cases

  it('should find the initial state', function () {
    assert.equal(1, sm.currentState);
  });
  it('should reject aaa', function () {
    assert.equal(false, sm.accepts('aaa'));
  });
  it('should accept abc', function () {
    assert.equal(true, sm.accepts('abc'));
  });
  it('should accept aaabc', function () {
    assert.equal(true, sm.accepts('aaabc'));
  });
  it('should accept aad', function () {
    assert.equal(true, sm.accepts('aad'));
  });
  it('should reject ddac', function () {
    assert.throws(function () { sm.accepts('ddac')},"Not a legal transition");
  });

  it('should reject xyz', function () {
    assert.equal(false, sm.accepts('xyz'));
  });
});
;