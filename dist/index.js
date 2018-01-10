'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _draftJsPrism = require('draft-js-prism');

var _draftJsPrism2 = _interopRequireDefault(_draftJsPrism);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var prismPlugin = function prismPlugin(options) {
  if (!options || !options.prism) throw new Error('You must provide an instance of the prism.js library to draft-js-prism-plugin. See the documentation at https://github.com/withspectrum/draft-js-prism-plugin for more information!');
  var prism = options.prism;

  return {
    decorators: [new _draftJsPrism2.default({
      prism: prism,
      getSyntax: function getSyntax(block) {
        var language = block.getData().get('language');
        //return ve javascript cmnl
        return 'javascript';
        //           if (typeof prism.languages[language] === 'object') {
        //             return language;
        //           }
        //           return null;
      },
      render: function render(_ref) {
        var type = _ref.type,
            children = _ref.children;

        return _react2.default.createElement(
          'span',
          { className: 'prism-token token ' + type },
          children
        );
      }
    })]
  };
};

exports.default = prismPlugin;