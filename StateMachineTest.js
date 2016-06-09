var test = require('unit.js');
var StateMachine = require('./StateMachine');

var sm = new StateMachine.StateMachine();

sm.addTransition(1, 'a', 1);
sm.addTransition(1, 'b', 2);
sm.addTransition(1, 'd', 3);
sm.addTransition(2, 'c', 3);


sm.printTransitionTable();
test.assert.equal(true, sm.accepts('aaa'));
test.assert.equal(false, sm.accepts('aaad'))