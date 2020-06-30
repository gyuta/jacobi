"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createBitOr = void 0;

var _bitwise = require("../../utils/bignumber/bitwise");

var _factory = require("../../utils/factory");

var _algorithm = require("../../type/matrix/utils/algorithm14");

var _algorithm2 = require("../../type/matrix/utils/algorithm13");

var _algorithm3 = require("../../type/matrix/utils/algorithm10");

var _algorithm4 = require("../../type/matrix/utils/algorithm04");

var _algorithm5 = require("../../type/matrix/utils/algorithm01");

var _number = require("../../plain/number");

var name = 'bitOr';
var dependencies = ['typed', 'matrix', 'equalScalar', 'DenseMatrix'];
var createBitOr = /* #__PURE__ */(0, _factory.factory)(name, dependencies, function (_ref) {
  var typed = _ref.typed,
      matrix = _ref.matrix,
      equalScalar = _ref.equalScalar,
      DenseMatrix = _ref.DenseMatrix;
  var algorithm01 = (0, _algorithm5.createAlgorithm01)({
    typed: typed
  });
  var algorithm04 = (0, _algorithm4.createAlgorithm04)({
    typed: typed,
    equalScalar: equalScalar
  });
  var algorithm10 = (0, _algorithm3.createAlgorithm10)({
    typed: typed,
    DenseMatrix: DenseMatrix
  });
  var algorithm13 = (0, _algorithm2.createAlgorithm13)({
    typed: typed
  });
  var algorithm14 = (0, _algorithm.createAlgorithm14)({
    typed: typed
  });
  /**
   * Bitwise OR two values, `x | y`.
   * For matrices, the function is evaluated element wise.
   * For units, the function is evaluated on the lowest print base.
   *
   * Syntax:
   *
   *    math.bitOr(x, y)
   *
   * Examples:
   *
   *    math.bitOr(1, 2)               // returns number 3
   *
   *    math.bitOr([1, 2, 3], 4)       // returns Array [5, 6, 7]
   *
   * See also:
   *
   *    bitAnd, bitNot, bitXor, leftShift, rightArithShift, rightLogShift
   *
   * @param  {number | BigNumber | Array | Matrix} x First value to or
   * @param  {number | BigNumber | Array | Matrix} y Second value to or
   * @return {number | BigNumber | Array | Matrix} OR of `x` and `y`
   */

  var bitOr = typed(name, {
    'number, number': _number.bitOrNumber,
    'BigNumber, BigNumber': _bitwise.bitOrBigNumber,
    'SparseMatrix, SparseMatrix': function SparseMatrixSparseMatrix(x, y) {
      return algorithm04(x, y, bitOr);
    },
    'SparseMatrix, DenseMatrix': function SparseMatrixDenseMatrix(x, y) {
      return algorithm01(y, x, bitOr, true);
    },
    'DenseMatrix, SparseMatrix': function DenseMatrixSparseMatrix(x, y) {
      return algorithm01(x, y, bitOr, false);
    },
    'DenseMatrix, DenseMatrix': function DenseMatrixDenseMatrix(x, y) {
      return algorithm13(x, y, bitOr);
    },
    'Array, Array': function ArrayArray(x, y) {
      // use matrix implementation
      return bitOr(matrix(x), matrix(y)).valueOf();
    },
    'Array, Matrix': function ArrayMatrix(x, y) {
      // use matrix implementation
      return bitOr(matrix(x), y);
    },
    'Matrix, Array': function MatrixArray(x, y) {
      // use matrix implementation
      return bitOr(x, matrix(y));
    },
    'SparseMatrix, any': function SparseMatrixAny(x, y) {
      return algorithm10(x, y, bitOr, false);
    },
    'DenseMatrix, any': function DenseMatrixAny(x, y) {
      return algorithm14(x, y, bitOr, false);
    },
    'any, SparseMatrix': function anySparseMatrix(x, y) {
      return algorithm10(y, x, bitOr, true);
    },
    'any, DenseMatrix': function anyDenseMatrix(x, y) {
      return algorithm14(y, x, bitOr, true);
    },
    'Array, any': function ArrayAny(x, y) {
      // use matrix implementation
      return algorithm14(matrix(x), y, bitOr, false).valueOf();
    },
    'any, Array': function anyArray(x, y) {
      // use matrix implementation
      return algorithm14(matrix(y), x, bitOr, true).valueOf();
    }
  });
  return bitOr;
});
exports.createBitOr = createBitOr;