"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compileDependencies = void 0;

var _dependenciesParse = require("./dependenciesParse.generated");

var _dependenciesTyped = require("./dependenciesTyped.generated");

var _factoriesAny = require("../../factoriesAny.js");

/**
 * THIS FILE IS AUTO-GENERATED
 * DON'T MAKE CHANGES HERE
 */
var compileDependencies = {
  parseDependencies: _dependenciesParse.parseDependencies,
  typedDependencies: _dependenciesTyped.typedDependencies,
  createCompile: _factoriesAny.createCompile
};
exports.compileDependencies = compileDependencies;