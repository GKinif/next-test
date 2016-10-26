webpackHotUpdate(3,{

/***/ 172:
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(87);

	var _react2 = _interopRequireDefault(_react);

	var _css = __webpack_require__(150);

	var _css2 = _interopRequireDefault(_css);

	var _PageHeader = __webpack_require__(171);

	var _PageHeader2 = _interopRequireDefault(_PageHeader);

	var _Menu = __webpack_require__(173);

	var _Menu2 = _interopRequireDefault(_Menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function () {
	    return _react2.default.createElement(
	        'div',
	        null,
	        _react2.default.createElement(_PageHeader2.default, { title: 'Next - Users' }),
	        _react2.default.createElement(_Menu2.default, null),
	        _react2.default.createElement(
	            'div',
	            null,
	            'Users'
	        )
	    );
	};
	    if (true) {
	      module.hot.accept()
	      if (module.hot.status() !== 'idle') {
	        var Component = module.exports.default || module.exports
	        next.router.update('/users', Component)
	      }
	    }
	  

/***/ }

})