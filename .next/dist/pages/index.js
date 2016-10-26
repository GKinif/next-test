'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('G:/Programmation/learning/React/next-test/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _css = require('G:/Programmation/learning/React/next-test/node_modules/next/dist/lib/css.js');

var _css2 = _interopRequireDefault(_css);

var _PageHeader = require('../components/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

var _Menu = require('../components/Menu');

var _Menu2 = _interopRequireDefault(_Menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_PageHeader2.default, { title: 'Next - Index' }),
        _react2.default.createElement(_Menu2.default, null),
        _react2.default.createElement(
            'div',
            { className: style },
            'Hello world'
        )
    );
};

var style = (0, _css2.default)({
    background: 'red',
    ':hover': {
        background: 'gray'
    },
    '@media (max-width: 600px)': {
        background: 'blue'
    }
});

(0, _css.insertRule)('html, body { padding: 0; background: #ccc; }');
    if (module.hot) {
      module.hot.accept()
      if (module.hot.status() !== 'idle') {
        var Component = module.exports.default || module.exports
        next.router.update('/', Component)
      }
    }
  