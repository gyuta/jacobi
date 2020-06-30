"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.modeDependencies = void 0;

var _dependenciesIsNaN = require("./dependenciesIsNaN.generated");

var _dependenciesIsNumeric = require("./dependenciesIsNumeric.generated");

var _dependenciesTyped = require("./dependenciesTyped.generated");

var _factoriesNumber = require("../../factoriesNumber.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var modeDependencies = {
  isNaNDependencies: _dependenciesIsNaN.isNaNDependencies,
  isNumericDependencies: _dependenciesIsNumeric.isNumericDependencies,
  typedDependencies: _dependenciesTyped.typedDependencies,
  createMode: _factoriesNumber.createMode
};
exports.modeDependencies = modeDependencies;