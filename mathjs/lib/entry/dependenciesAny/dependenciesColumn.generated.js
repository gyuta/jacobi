"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.columnDependencies = void 0;

var _dependenciesIndexClass = require("./dependenciesIndexClass.generated");

var _dependenciesMatrix = require("./dependenciesMatrix.generated");

var _dependenciesRange = require("./dependenciesRange.generated");

var _dependenciesTyped = require("./dependenciesTyped.generated");

var _factoriesAny = require("../../factoriesAny.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var columnDependencies = {
  IndexDependencies: _dependenciesIndexClass.IndexDependencies,
  matrixDependencies: _dependenciesMatrix.matrixDependencies,
  rangeDependencies: _dependenciesRange.rangeDependencies,
  typedDependencies: _dependenciesTyped.typedDependencies,
  createColumn: _factoriesAny.createColumn
};
exports.columnDependencies = columnDependencies;