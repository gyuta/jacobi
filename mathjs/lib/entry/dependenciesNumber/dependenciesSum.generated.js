"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sumDependencies = void 0;

var _dependenciesAdd = require("./dependenciesAdd.generated");

var _dependenciesNumeric = require("./dependenciesNumeric.generated");

var _dependenciesTyped = require("./dependenciesTyped.generated");

var _factoriesNumber = require("../../factoriesNumber.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var sumDependencies = {
  addDependencies: _dependenciesAdd.addDependencies,
  numericDependencies: _dependenciesNumeric.numericDependencies,
  typedDependencies: _dependenciesTyped.typedDependencies,
  createSum: _factoriesNumber.createSum
};
exports.sumDependencies = sumDependencies;