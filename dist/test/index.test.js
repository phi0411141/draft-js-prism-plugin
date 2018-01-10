'use strict';

var _ = require('../');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

it('should return an object', function () {
  var plugin = (0, _2.default)({
    prism: {}
  });
  expect(plugin).toBeInstanceOf(Object);
});


it('should throw an error if no instance of Prism is supplied', function () {
  // $FlowIgnore the next line is supposed to be incorrect
  expect(function () {
    return (0, _2.default)();
  }).toThrow();
});