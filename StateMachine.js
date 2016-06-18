#!/usr/bin/node
/*jshint -W081 */
"use strict";

function StateMachine() {
  this.states = {};
  this.finalStates = [3];

}

StateMachine.prototype.addTransition = function (start, val, next) {

  if (next === undefined){
      if (val === undefined) {
          this.currentState = start;
      } else {
      }
  }

  if (this.states.hasOwnProperty(start)) {
    this.states[start][val] = next;
  } else {
    this.states[start] = {};
    this.states[start][val] = next;
  }
};

StateMachine.prototype.printTransitionTable = function () {
  var key;
  for (key in this.states) {
    console.log("Transistions for " + key);
    console.log(this.states[key]);
  }
};

StateMachine.prototype.process = function (input) {
  // console.log("Current state: " +  this.currentState + " Input " + input);
  var innerDict = this.states[this.currentState];

  if (innerDict === undefined){
      throw "Not a legal transition";
  }
  var newState;
  if (innerDict[input] !== undefined) {
    this.currentState = innerDict[input];
    newState = innerDict[input];
    return true;
  } else {
    return false;
  }
};

StateMachine.prototype.accepts = function (str) {
  var i;
  for (i = 0; i < str.length; i = i + 1) {
    this.process(str[i]);
  }
  if (this.finalStates.indexOf(this.currentState) > -1) {
    return true;
  } else {
    return false;
  }
};


module.exports = {
  StateMachine: StateMachine
};
