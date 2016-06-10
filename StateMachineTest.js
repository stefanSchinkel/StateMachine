var assert = require('chai').assert;
var StateMachine = require('./StateMachine');

describe('StateMachine', function () {
  "use strict";
  var sm;
  // fixture
  beforeEach(function () {
    sm = new StateMachine.StateMachine();
    sm.addTransition(1, 'a', 1);
    sm.addTransition(1, 'a', 1);
    sm.addTransition(1, 'b', 2);
    sm.addTransition(1, 'd', 3);
    sm.addTransition(2, 'c', 3);
  });

  // test cases
  it('should reject aaa', function () {
    assert.equal(false, sm.accepts('aaa'));
  });
  it('should accept aaa', function () {
    assert.equal(true, sm.accepts('aaabc'));
  });
  it('should reject aaa', function () {
    assert.equal(true, sm.accepts('abc'));
  });

});
;