"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.embeddedDocs = void 0;

var _bignumber = require("./construction/bignumber");

var _typeOf = require("./function/utils/typeOf");

var _isZero = require("./function/utils/isZero");

var _isPrime = require("./function/utils/isPrime");

var _isPositive = require("./function/utils/isPositive");

var _isNumeric = require("./function/utils/isNumeric");

var _hasNumericValue = require("./function/utils/hasNumericValue");

var _isNegative = require("./function/utils/isNegative");

var _isInteger = require("./function/utils/isInteger");

var _isNaN = require("./function/utils/isNaN");

var _format = require("./function/utils/format");

var _clone = require("./function/utils/clone");

var _to = require("./function/units/to");

var _tanh = require("./function/trigonometry/tanh");

var _tan = require("./function/trigonometry/tan");

var _sinh = require("./function/trigonometry/sinh");

var _sech = require("./function/trigonometry/sech");

var _sec = require("./function/trigonometry/sec");

var _csch = require("./function/trigonometry/csch");

var _csc = require("./function/trigonometry/csc");

var _coth = require("./function/trigonometry/coth");

var _cot = require("./function/trigonometry/cot");

var _cosh = require("./function/trigonometry/cosh");

var _cos = require("./function/trigonometry/cos");

var _atan = require("./function/trigonometry/atan2");

var _atanh = require("./function/trigonometry/atanh");

var _atan2 = require("./function/trigonometry/atan");

var _asinh = require("./function/trigonometry/asinh");

var _asin = require("./function/trigonometry/asin");

var _asech = require("./function/trigonometry/asech");

var _asec = require("./function/trigonometry/asec");

var _acsch = require("./function/trigonometry/acsch");

var _acsc = require("./function/trigonometry/acsc");

var _acoth = require("./function/trigonometry/acoth");

var _acot = require("./function/trigonometry/acot");

var _acosh = require("./function/trigonometry/acosh");

var _acos = require("./function/trigonometry/acos");

var _sum = require("./function/statistics/sum");

var _std = require("./function/statistics/std");

var _quantileSeq = require("./function/statistics/quantileSeq");

var _prod = require("./function/statistics/prod");

var _mode = require("./function/statistics/mode");

var _min = require("./function/statistics/min");

var _median = require("./function/statistics/median");

var _mean = require("./function/statistics/mean");

var _max = require("./function/statistics/max");

var _mad = require("./function/statistics/mad");

var _erf = require("./function/special/erf");

var _setUnion = require("./function/set/setUnion");

var _setSymDifference = require("./function/set/setSymDifference");

var _setSize = require("./function/set/setSize");

var _setPowerset = require("./function/set/setPowerset");

var _setMultiplicity = require("./function/set/setMultiplicity");

var _setIsSubset = require("./function/set/setIsSubset");

var _setIntersect = require("./function/set/setIntersect");

var _setDistinct = require("./function/set/setDistinct");

var _setDifference = require("./function/set/setDifference");

var _setCartesian = require("./function/set/setCartesian");

var _unequal = require("./function/relational/unequal");

var _smallerEq = require("./function/relational/smallerEq");

var _smaller = require("./function/relational/smaller");

var _largerEq = require("./function/relational/largerEq");

var _larger = require("./function/relational/larger");

var _equalText = require("./function/relational/equalText");

var _equal = require("./function/relational/equal");

var _deepEqual = require("./function/relational/deepEqual");

var _compareText = require("./function/relational/compareText");

var _compareNatural = require("./function/relational/compareNatural");

var _compare = require("./function/relational/compare");

var _randomInt = require("./function/probability/randomInt");

var _random = require("./function/probability/random");

var _pickRandom = require("./function/probability/pickRandom");

var _permutations = require("./function/probability/permutations");

var _multinomial = require("./function/probability/multinomial");

var _kldivergence = require("./function/probability/kldivergence");

var _gamma = require("./function/probability/gamma");

var _factorial = require("./function/probability/factorial");

var _combinations = require("./function/probability/combinations");

var _combinationsWithRep = require("./function/probability/combinationsWithRep");

var _zeros = require("./function/matrix/zeros");

var _transpose = require("./function/matrix/transpose");

var _trace = require("./function/matrix/trace");

var _subset = require("./function/matrix/subset");

var _squeeze = require("./function/matrix/squeeze");

var _sort = require("./function/matrix/sort");

var _size = require("./function/matrix/size");

var _reshape = require("./function/matrix/reshape");

var _resize = require("./function/matrix/resize");

var _range = require("./function/matrix/range");

var _partitionSelect = require("./function/matrix/partitionSelect");

var _ones = require("./function/matrix/ones");

var _map = require("./function/matrix/map");

var _kron = require("./function/matrix/kron");

var _inv = require("./function/matrix/inv");

var _forEach = require("./function/matrix/forEach");

var _flatten = require("./function/matrix/flatten");

var _filter = require("./function/matrix/filter");

var _identity = require("./function/matrix/identity");

var _getMatrixDataType = require("./function/matrix/getMatrixDataType");

var _dot = require("./function/matrix/dot");

var _diag = require("./function/matrix/diag");

var _det = require("./function/matrix/det");

var _ctranspose = require("./function/matrix/ctranspose");

var _cross = require("./function/matrix/cross");

var _concat = require("./function/matrix/concat");

var _xor = require("./function/logical/xor");

var _or = require("./function/logical/or");

var _not = require("./function/logical/not");

var _and = require("./function/logical/and");

var _intersect = require("./function/geometry/intersect");

var _distance = require("./function/geometry/distance");

var _help = require("./function/expression/help");

var _evaluate = require("./function/expression/evaluate");

var _im = require("./function/complex/im");

var _re = require("./function/complex/re");

var _conj = require("./function/complex/conj");

var _arg = require("./function/complex/arg");

var _typed = require("./core/typed");

var _import = require("./core/import");

var _config = require("./core/config");

var _stirlingS = require("./function/combinatorics/stirlingS2");

var _composition = require("./function/combinatorics/composition");

var _catalan = require("./function/combinatorics/catalan");

var _bellNumbers = require("./function/combinatorics/bellNumbers");

var _rightLogShift = require("./function/bitwise/rightLogShift");

var _rightArithShift = require("./function/bitwise/rightArithShift");

var _leftShift = require("./function/bitwise/leftShift");

var _bitXor = require("./function/bitwise/bitXor");

var _bitOr = require("./function/bitwise/bitOr");

var _bitNot = require("./function/bitwise/bitNot");

var _bitAnd = require("./function/bitwise/bitAnd");

var _xgcd = require("./function/arithmetic/xgcd");

var _unaryPlus = require("./function/arithmetic/unaryPlus");

var _unaryMinus = require("./function/arithmetic/unaryMinus");

var _square = require("./function/arithmetic/square");

var _sqrtm = require("./function/arithmetic/sqrtm");

var _sqrt = require("./function/arithmetic/sqrt");

var _sign = require("./function/arithmetic/sign");

var _round = require("./function/arithmetic/round");

var _pow = require("./function/arithmetic/pow");

var _nthRoots = require("./function/arithmetic/nthRoots");

var _nthRoot = require("./function/arithmetic/nthRoot");

var _norm = require("./function/arithmetic/norm");

var _multiply = require("./function/arithmetic/multiply");

var _mod = require("./function/arithmetic/mod");

var _log = require("./function/arithmetic/log10");

var _log1p = require("./function/arithmetic/log1p");

var _log2 = require("./function/arithmetic/log2");

var _log3 = require("./function/arithmetic/log");

var _lcm = require("./function/arithmetic/lcm");

var _hypot = require("./function/arithmetic/hypot");

var _gcd = require("./function/arithmetic/gcd");

var _floor = require("./function/arithmetic/floor");

var _fix = require("./function/arithmetic/fix");

var _expm = require("./function/arithmetic/expm1");

var _expm2 = require("./function/arithmetic/expm");

var _eigs = require("./function/matrix/eigs");

var _exp = require("./function/arithmetic/exp");

var _dotMultiply = require("./function/arithmetic/dotMultiply");

var _dotDivide = require("./function/arithmetic/dotDivide");

var _divide = require("./function/arithmetic/divide");

var _cube = require("./function/arithmetic/cube");

var _ceil = require("./function/arithmetic/ceil");

var _cbrt = require("./function/arithmetic/cbrt");

var _add = require("./function/arithmetic/add");

var _abs = require("./function/arithmetic/abs");

var _qr = require("./function/algebra/qr");

var _usolve = require("./function/algebra/usolve");

var _slu = require("./function/algebra/slu");

var _rationalize = require("./function/algebra/rationalize");

var _simplify = require("./function/algebra/simplify");

var _lup = require("./function/algebra/lup");

var _lsolve = require("./function/algebra/lsolve");

var _derivative = require("./function/algebra/derivative");

var _version = require("./constants/version");

var _true = require("./constants/true");

var _tau = require("./constants/tau");

var _SQRT = require("./constants/SQRT2");

var _SQRT1_ = require("./constants/SQRT1_2");

var _phi = require("./constants/phi");

var _pi = require("./constants/pi");

var _null = require("./constants/null");

var _NaN = require("./constants/NaN");

var _LOG10E = require("./constants/LOG10E");

var _LOG2E = require("./constants/LOG2E");

var _LN = require("./constants/LN10");

var _LN2 = require("./constants/LN2");

var _Infinity = require("./constants/Infinity");

var _i = require("./constants/i");

var _false = require("./constants/false");

var _e = require("./constants/e");

var _unit = require("./construction/unit");

var _string = require("./construction/string");

var _splitUnit = require("./construction/splitUnit");

var _sparse = require("./construction/sparse");

var _number = require("./construction/number");

var _matrix = require("./construction/matrix");

var _construction = require("./construction");

var _fraction = require("./construction/fraction");

var _createUnit = require("./construction/createUnit");

var _complex = require("./construction/complex");

var _boolean = require("./construction/boolean");

var _dotPow = require("./function/arithmetic/dotPow");

var _lusolve = require("./function/algebra/lusolve");

var _subtract = require("./function/arithmetic/subtract");

var _variance = require("./function/statistics/variance");

var _sin = require("./function/trigonometry/sin");

var _numeric = require("./function/utils/numeric");

var _column = require("./function/matrix/column");

var _row = require("./function/matrix/row");

var embeddedDocs = {
  // construction functions
  bignumber: _bignumber.bignumberDocs,
  "boolean": _boolean.booleanDocs,
  complex: _complex.complexDocs,
  createUnit: _createUnit.createUnitDocs,
  fraction: _fraction.fractionDocs,
  index: _construction.indexDocs,
  matrix: _matrix.matrixDocs,
  number: _number.numberDocs,
  sparse: _sparse.sparseDocs,
  splitUnit: _splitUnit.splitUnitDocs,
  string: _string.stringDocs,
  unit: _unit.unitDocs,
  // constants
  e: _e.eDocs,
  E: _e.eDocs,
  "false": _false.falseDocs,
  i: _i.iDocs,
  Infinity: _Infinity.InfinityDocs,
  LN2: _LN2.LN2Docs,
  LN10: _LN.LN10Docs,
  LOG2E: _LOG2E.LOG2EDocs,
  LOG10E: _LOG10E.LOG10EDocs,
  NaN: _NaN.NaNDocs,
  "null": _null.nullDocs,
  pi: _pi.piDocs,
  PI: _pi.piDocs,
  phi: _phi.phiDocs,
  SQRT1_2: _SQRT1_.SQRT12Docs,
  SQRT2: _SQRT.SQRT2Docs,
  tau: _tau.tauDocs,
  "true": _true.trueDocs,
  version: _version.versionDocs,
  // physical constants
  // TODO: more detailed docs for physical constants
  speedOfLight: {
    description: 'Speed of light in vacuum',
    examples: ['speedOfLight']
  },
  gravitationConstant: {
    description: 'Newtonian constant of gravitation',
    examples: ['gravitationConstant']
  },
  planckConstant: {
    description: 'Planck constant',
    examples: ['planckConstant']
  },
  reducedPlanckConstant: {
    description: 'Reduced Planck constant',
    examples: ['reducedPlanckConstant']
  },
  magneticConstant: {
    description: 'Magnetic constant (vacuum permeability)',
    examples: ['magneticConstant']
  },
  electricConstant: {
    description: 'Electric constant (vacuum permeability)',
    examples: ['electricConstant']
  },
  vacuumImpedance: {
    description: 'Characteristic impedance of vacuum',
    examples: ['vacuumImpedance']
  },
  coulomb: {
    description: 'Coulomb\'s constant',
    examples: ['coulomb']
  },
  elementaryCharge: {
    description: 'Elementary charge',
    examples: ['elementaryCharge']
  },
  bohrMagneton: {
    description: 'Borh magneton',
    examples: ['bohrMagneton']
  },
  conductanceQuantum: {
    description: 'Conductance quantum',
    examples: ['conductanceQuantum']
  },
  inverseConductanceQuantum: {
    description: 'Inverse conductance quantum',
    examples: ['inverseConductanceQuantum']
  },
  // josephson: {description: 'Josephson constant', examples: ['josephson']},
  magneticFluxQuantum: {
    description: 'Magnetic flux quantum',
    examples: ['magneticFluxQuantum']
  },
  nuclearMagneton: {
    description: 'Nuclear magneton',
    examples: ['nuclearMagneton']
  },
  klitzing: {
    description: 'Von Klitzing constant',
    examples: ['klitzing']
  },
  bohrRadius: {
    description: 'Borh radius',
    examples: ['bohrRadius']
  },
  classicalElectronRadius: {
    description: 'Classical electron radius',
    examples: ['classicalElectronRadius']
  },
  electronMass: {
    description: 'Electron mass',
    examples: ['electronMass']
  },
  fermiCoupling: {
    description: 'Fermi coupling constant',
    examples: ['fermiCoupling']
  },
  fineStructure: {
    description: 'Fine-structure constant',
    examples: ['fineStructure']
  },
  hartreeEnergy: {
    description: 'Hartree energy',
    examples: ['hartreeEnergy']
  },
  protonMass: {
    description: 'Proton mass',
    examples: ['protonMass']
  },
  deuteronMass: {
    description: 'Deuteron Mass',
    examples: ['deuteronMass']
  },
  neutronMass: {
    description: 'Neutron mass',
    examples: ['neutronMass']
  },
  quantumOfCirculation: {
    description: 'Quantum of circulation',
    examples: ['quantumOfCirculation']
  },
  rydberg: {
    description: 'Rydberg constant',
    examples: ['rydberg']
  },
  thomsonCrossSection: {
    description: 'Thomson cross section',
    examples: ['thomsonCrossSection']
  },
  weakMixingAngle: {
    description: 'Weak mixing angle',
    examples: ['weakMixingAngle']
  },
  efimovFactor: {
    description: 'Efimov factor',
    examples: ['efimovFactor']
  },
  atomicMass: {
    description: 'Atomic mass constant',
    examples: ['atomicMass']
  },
  avogadro: {
    description: 'Avogadro\'s number',
    examples: ['avogadro']
  },
  boltzmann: {
    description: 'Boltzmann constant',
    examples: ['boltzmann']
  },
  faraday: {
    description: 'Faraday constant',
    examples: ['faraday']
  },
  firstRadiation: {
    description: 'First radiation constant',
    examples: ['firstRadiation']
  },
  loschmidt: {
    description: 'Loschmidt constant at T=273.15 K and p=101.325 kPa',
    examples: ['loschmidt']
  },
  gasConstant: {
    description: 'Gas constant',
    examples: ['gasConstant']
  },
  molarPlanckConstant: {
    description: 'Molar Planck constant',
    examples: ['molarPlanckConstant']
  },
  molarVolume: {
    description: 'Molar volume of an ideal gas at T=273.15 K and p=101.325 kPa',
    examples: ['molarVolume']
  },
  sackurTetrode: {
    description: 'Sackur-Tetrode constant at T=1 K and p=101.325 kPa',
    examples: ['sackurTetrode']
  },
  secondRadiation: {
    description: 'Second radiation constant',
    examples: ['secondRadiation']
  },
  stefanBoltzmann: {
    description: 'Stefan-Boltzmann constant',
    examples: ['stefanBoltzmann']
  },
  wienDisplacement: {
    description: 'Wien displacement law constant',
    examples: ['wienDisplacement']
  },
  // spectralRadiance: {description: 'First radiation constant for spectral radiance', examples: ['spectralRadiance']},
  molarMass: {
    description: 'Molar mass constant',
    examples: ['molarMass']
  },
  molarMassC12: {
    description: 'Molar mass constant of carbon-12',
    examples: ['molarMassC12']
  },
  gravity: {
    description: 'Standard acceleration of gravity (standard acceleration of free-fall on Earth)',
    examples: ['gravity']
  },
  planckLength: {
    description: 'Planck length',
    examples: ['planckLength']
  },
  planckMass: {
    description: 'Planck mass',
    examples: ['planckMass']
  },
  planckTime: {
    description: 'Planck time',
    examples: ['planckTime']
  },
  planckCharge: {
    description: 'Planck charge',
    examples: ['planckCharge']
  },
  planckTemperature: {
    description: 'Planck temperature',
    examples: ['planckTemperature']
  },
  // functions - algebra
  derivative: _derivative.derivativeDocs,
  lsolve: _lsolve.lsolveDocs,
  lup: _lup.lupDocs,
  lusolve: _lusolve.lusolveDocs,
  simplify: _simplify.simplifyDocs,
  rationalize: _rationalize.rationalizeDocs,
  slu: _slu.sluDocs,
  usolve: _usolve.usolveDocs,
  qr: _qr.qrDocs,
  // functions - arithmetic
  abs: _abs.absDocs,
  add: _add.addDocs,
  cbrt: _cbrt.cbrtDocs,
  ceil: _ceil.ceilDocs,
  cube: _cube.cubeDocs,
  divide: _divide.divideDocs,
  dotDivide: _dotDivide.dotDivideDocs,
  dotMultiply: _dotMultiply.dotMultiplyDocs,
  dotPow: _dotPow.dotPowDocs,
  exp: _exp.expDocs,
  expm: _expm2.expmDocs,
  expm1: _expm.expm1Docs,
  fix: _fix.fixDocs,
  floor: _floor.floorDocs,
  gcd: _gcd.gcdDocs,
  hypot: _hypot.hypotDocs,
  lcm: _lcm.lcmDocs,
  log: _log3.logDocs,
  log2: _log2.log2Docs,
  log1p: _log1p.log1pDocs,
  log10: _log.log10Docs,
  mod: _mod.modDocs,
  multiply: _multiply.multiplyDocs,
  norm: _norm.normDocs,
  nthRoot: _nthRoot.nthRootDocs,
  nthRoots: _nthRoots.nthRootsDocs,
  pow: _pow.powDocs,
  round: _round.roundDocs,
  sign: _sign.signDocs,
  sqrt: _sqrt.sqrtDocs,
  sqrtm: _sqrtm.sqrtmDocs,
  square: _square.squareDocs,
  subtract: _subtract.subtractDocs,
  unaryMinus: _unaryMinus.unaryMinusDocs,
  unaryPlus: _unaryPlus.unaryPlusDocs,
  xgcd: _xgcd.xgcdDocs,
  // functions - bitwise
  bitAnd: _bitAnd.bitAndDocs,
  bitNot: _bitNot.bitNotDocs,
  bitOr: _bitOr.bitOrDocs,
  bitXor: _bitXor.bitXorDocs,
  leftShift: _leftShift.leftShiftDocs,
  rightArithShift: _rightArithShift.rightArithShiftDocs,
  rightLogShift: _rightLogShift.rightLogShiftDocs,
  // functions - combinatorics
  bellNumbers: _bellNumbers.bellNumbersDocs,
  catalan: _catalan.catalanDocs,
  composition: _composition.compositionDocs,
  stirlingS2: _stirlingS.stirlingS2Docs,
  // functions - core
  config: _config.configDocs,
  "import": _import.importDocs,
  typed: _typed.typedDocs,
  // functions - complex
  arg: _arg.argDocs,
  conj: _conj.conjDocs,
  re: _re.reDocs,
  im: _im.imDocs,
  // functions - expression
  evaluate: _evaluate.evaluateDocs,
  help: _help.helpDocs,
  // functions - geometry
  distance: _distance.distanceDocs,
  intersect: _intersect.intersectDocs,
  // functions - logical
  and: _and.andDocs,
  not: _not.notDocs,
  or: _or.orDocs,
  xor: _xor.xorDocs,
  // functions - matrix
  concat: _concat.concatDocs,
  cross: _cross.crossDocs,
  column: _column.columnDocs,
  ctranspose: _ctranspose.ctransposeDocs,
  det: _det.detDocs,
  diag: _diag.diagDocs,
  dot: _dot.dotDocs,
  getMatrixDataType: _getMatrixDataType.getMatrixDataTypeDocs,
  identity: _identity.identityDocs,
  filter: _filter.filterDocs,
  flatten: _flatten.flattenDocs,
  forEach: _forEach.forEachDocs,
  inv: _inv.invDocs,
  eigs: _eigs.eigsDocs,
  kron: _kron.kronDocs,
  map: _map.mapDocs,
  ones: _ones.onesDocs,
  partitionSelect: _partitionSelect.partitionSelectDocs,
  range: _range.rangeDocs,
  resize: _resize.resizeDocs,
  reshape: _reshape.reshapeDocs,
  row: _row.rowDocs,
  size: _size.sizeDocs,
  sort: _sort.sortDocs,
  squeeze: _squeeze.squeezeDocs,
  subset: _subset.subsetDocs,
  trace: _trace.traceDocs,
  transpose: _transpose.transposeDocs,
  zeros: _zeros.zerosDocs,
  // functions - probability
  combinations: _combinations.combinationsDocs,
  combinationsWithRep: _combinationsWithRep.combinationsWithRepDocs,
  // distribution: distributionDocs,
  factorial: _factorial.factorialDocs,
  gamma: _gamma.gammaDocs,
  kldivergence: _kldivergence.kldivergenceDocs,
  multinomial: _multinomial.multinomialDocs,
  permutations: _permutations.permutationsDocs,
  pickRandom: _pickRandom.pickRandomDocs,
  random: _random.randomDocs,
  randomInt: _randomInt.randomIntDocs,
  // functions - relational
  compare: _compare.compareDocs,
  compareNatural: _compareNatural.compareNaturalDocs,
  compareText: _compareText.compareTextDocs,
  deepEqual: _deepEqual.deepEqualDocs,
  equal: _equal.equalDocs,
  equalText: _equalText.equalTextDocs,
  larger: _larger.largerDocs,
  largerEq: _largerEq.largerEqDocs,
  smaller: _smaller.smallerDocs,
  smallerEq: _smallerEq.smallerEqDocs,
  unequal: _unequal.unequalDocs,
  // functions - set
  setCartesian: _setCartesian.setCartesianDocs,
  setDifference: _setDifference.setDifferenceDocs,
  setDistinct: _setDistinct.setDistinctDocs,
  setIntersect: _setIntersect.setIntersectDocs,
  setIsSubset: _setIsSubset.setIsSubsetDocs,
  setMultiplicity: _setMultiplicity.setMultiplicityDocs,
  setPowerset: _setPowerset.setPowersetDocs,
  setSize: _setSize.setSizeDocs,
  setSymDifference: _setSymDifference.setSymDifferenceDocs,
  setUnion: _setUnion.setUnionDocs,
  // functions - special
  erf: _erf.erfDocs,
  // functions - statistics
  mad: _mad.madDocs,
  max: _max.maxDocs,
  mean: _mean.meanDocs,
  median: _median.medianDocs,
  min: _min.minDocs,
  mode: _mode.modeDocs,
  prod: _prod.prodDocs,
  quantileSeq: _quantileSeq.quantileSeqDocs,
  std: _std.stdDocs,
  sum: _sum.sumDocs,
  variance: _variance.varianceDocs,
  // functions - trigonometry
  acos: _acos.acosDocs,
  acosh: _acosh.acoshDocs,
  acot: _acot.acotDocs,
  acoth: _acoth.acothDocs,
  acsc: _acsc.acscDocs,
  acsch: _acsch.acschDocs,
  asec: _asec.asecDocs,
  asech: _asech.asechDocs,
  asin: _asin.asinDocs,
  asinh: _asinh.asinhDocs,
  atan: _atan2.atanDocs,
  atanh: _atanh.atanhDocs,
  atan2: _atan.atan2Docs,
  cos: _cos.cosDocs,
  cosh: _cosh.coshDocs,
  cot: _cot.cotDocs,
  coth: _coth.cothDocs,
  csc: _csc.cscDocs,
  csch: _csch.cschDocs,
  sec: _sec.secDocs,
  sech: _sech.sechDocs,
  sin: _sin.sinDocs,
  sinh: _sinh.sinhDocs,
  tan: _tan.tanDocs,
  tanh: _tanh.tanhDocs,
  // functions - units
  to: _to.toDocs,
  // functions - utils
  clone: _clone.cloneDocs,
  format: _format.formatDocs,
  isNaN: _isNaN.isNaNDocs,
  isInteger: _isInteger.isIntegerDocs,
  isNegative: _isNegative.isNegativeDocs,
  isNumeric: _isNumeric.isNumericDocs,
  hasNumericValue: _hasNumericValue.hasNumericValueDocs,
  isPositive: _isPositive.isPositiveDocs,
  isPrime: _isPrime.isPrimeDocs,
  isZero: _isZero.isZeroDocs,
  // print: printDocs // TODO: add documentation for print as soon as the parser supports objects.
  typeOf: _typeOf.typeOfDocs,
  numeric: _numeric.numericDocs
};
exports.embeddedDocs = embeddedDocs;