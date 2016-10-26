'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('G:/Programmation/learning/React/next-test/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _head = require('G:/Programmation/learning/React/next-test/node_modules/next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (props) {
    return _react2.default.createElement(
        _head2.default,
        null,
        _react2.default.createElement(
            'title',
            null,
            props.title
        ),
        _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width' })
    );
};