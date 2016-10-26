'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _inherits2 = require('G:/Programmation/learning/React/next-test/node_modules/babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _getPrototypeOf = require('G:/Programmation/learning/React/next-test/node_modules/babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('G:/Programmation/learning/React/next-test/node_modules/babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('G:/Programmation/learning/React/next-test/node_modules/babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('G:/Programmation/learning/React/next-test/node_modules/babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _react = require('G:/Programmation/learning/React/next-test/node_modules/react/react.js');

var _react2 = _interopRequireDefault(_react);

var _link = require('G:/Programmation/learning/React/next-test/node_modules/next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _class = function (_React$Component) {
    (0, _inherits3.default)(_class, _React$Component);

    function _class(props) {
        (0, _classCallCheck3.default)(this, _class);
        return (0, _possibleConstructorReturn3.default)(this, (_class.__proto__ || (0, _getPrototypeOf2.default)(_class)).call(this, props));
    }

    (0, _createClass3.default)(_class, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'ul',
                null,
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/index' },
                        _react2.default.createElement(
                            'a',
                            null,
                            'Index'
                        )
                    )
                ),
                _react2.default.createElement(
                    'li',
                    null,
                    _react2.default.createElement(
                        _link2.default,
                        { href: '/users' },
                        _react2.default.createElement(
                            'a',
                            null,
                            'Users'
                        )
                    )
                )
            );
        }
    }]);
    return _class;
}(_react2.default.Component);

exports.default = _class;