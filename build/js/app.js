(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

$(document).ready(function () {
  $('#ping-pong-form').submit(function (event) {
    event.preventDefault();
    var goal = $('#goal').val();
    var simpleCalculator = new Calculator("hot pink");
    var output = simpleCalculator.pingPong(goal);
    output.forEach(function (element) {
      $('#solution').append("<li>" + element + "</li>");
    });
  });
});

var Calculator = exports.Calculator = function () {
  function Calculator(skinName) {
    _classCallCheck(this, Calculator);

    this.skin = skinName;
  }

  _createClass(Calculator, [{
    key: 'pingPong',
    value: function pingPong(goal) {
      var output = [];
      for (var i = 1; i <= goal; i++) {
        if (i % 15 === 0) {
          output.push("ping-pong");
        } else if (i % 3 === 0) {
          output.push("ping");
        } else if (i % 5 === 0) {
          output.push("pong");
        } else {
          output.push(i);
        }
      }
      return output;
    }
  }]);

  return Calculator;
}();

},{}]},{},[1]);
