/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 34);
/******/ })
/************************************************************************/
/******/ ({

/***/ 15:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(26);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Conversion = __webpack_require__(61);

var _Conversion2 = _interopRequireDefault(_Conversion);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var MainComponent = function (_React$Component) {
    _inherits(MainComponent, _React$Component);

    function MainComponent() {
        _classCallCheck(this, MainComponent);

        return _possibleConstructorReturn(this, (MainComponent.__proto__ || Object.getPrototypeOf(MainComponent)).apply(this, arguments));
    }

    _createClass(MainComponent, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(_Conversion2.default, null)
            );
        }
    }]);

    return MainComponent;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(MainComponent, null), document.getElementById('container'));

/***/ }),

/***/ 26:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/smazad/Workspace/code/projects/money-conversion-app/node_modules/react-dom/index.js'");

/***/ }),

/***/ 34:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(15);


/***/ }),

/***/ 43:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/smazad/Workspace/code/projects/money-conversion-app/node_modules/axios/index.js'");

/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(7);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(67);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _axios = __webpack_require__(43);

var _axios2 = _interopRequireDefault(_axios);

var _lodash = __webpack_require__(63);

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FeesTable = function (_React$Component) {
  _inherits(FeesTable, _React$Component);

  function FeesTable() {
    _classCallCheck(this, FeesTable);

    return _possibleConstructorReturn(this, (FeesTable.__proto__ || Object.getPrototypeOf(FeesTable)).apply(this, arguments));
  }

  _createClass(FeesTable, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          conversionRate = _props.conversionRate,
          fee = _props.fee,
          total = _props.total,
          originCurrency = _props.originCurrency,
          destinationCurrency = _props.destinationCurrency;


      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'table',
          null,
          _react2.default.createElement(
            'tbody',
            null,
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'Conversion Rate'
              ),
              _react2.default.createElement(
                'td',
                null,
                '1 ',
                originCurrency,
                ' -> ',
                conversionRate.toFixed(2),
                ' ',
                destinationCurrency
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                null,
                'Fee'
              ),
              _react2.default.createElement(
                'td',
                null,
                fee.toFixed(2),
                ' ',
                originCurrency
              )
            ),
            _react2.default.createElement(
              'tr',
              null,
              _react2.default.createElement(
                'td',
                { className: 'total-label' },
                'Total Cost'
              ),
              _react2.default.createElement(
                'td',
                null,
                total.toFixed(2),
                ' ',
                originCurrency
              )
            )
          )
        )
      );
    }
  }]);

  return FeesTable;
}(_react2.default.Component);

FeesTable.propTypes = {
  conversionRate: _propTypes2.default.number.isRequired,
  originCurrency: _propTypes2.default.string.isRequired,
  total: _propTypes2.default.number.isRequired,
  destinationCurrency: _propTypes2.default.string.isRequired
};

var Conversion = function (_React$Component2) {
  _inherits(Conversion, _React$Component2);

  function Conversion(props) {
    _classCallCheck(this, Conversion);

    var _this2 = _possibleConstructorReturn(this, (Conversion.__proto__ || Object.getPrototypeOf(Conversion)).call(this, props));

    _this2.state = {
      originAmount: '0.00',
      originCurrency: 'USD',
      destinationAmount: '0.00',
      destinationCurrency: 'EUR',
      feeAmount: 0.00,
      conversionRate: 1.5,
      totalCost: 0.00,
      errorMsg: ''

      // bind event listeners so 'this' will be available in the handlers
    };_this2.handleOriginAmountChange = _this2.handleOriginAmountChange.bind(_this2);
    _this2.handleDestAmountChange = _this2.handleDestAmountChange.bind(_this2);
    _this2.handleOriginCurrencyChange = _this2.handleCurrencyChange.bind(_this2, 'origin');
    _this2.handleDestCurrencyChange = _this2.handleCurrencyChange.bind(_this2, 'destination');
    _this2.handleAjaxFailure = _this2.handleAjaxFailure.bind(_this2);
    return _this2;
  }

  _createClass(Conversion, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      // Add a debounced version of _getDestinationAmount() so we avoid server & UI Thrashing.
      // See http://stackoverflow.com/questions/23123138/perform-debounce-in-react-js/28046731#28046731
      this.makeConversionAjaxCall = (0, _lodash2.default)(this._makeConversionAjaxCall, 350);
      this.makeFeeAjaxCall = (0, _lodash2.default)(this._makeFeeAjaxCall, 350);

      this.originAmountInput.focus();
    }

    // we'll handle all failures the same

  }, {
    key: 'handleAjaxFailure',
    value: function handleAjaxFailure(resp) {
      var msg = 'Error. Please try again later.';

      if (resp && resp.request && resp.request.status === 0) {
        msg = 'Oh no! App appears to be offline.';
      }

      this.setState({
        errorMsg: msg
      });
    }

    // on success ensure no error message

  }, {
    key: 'clearErrorMessage',
    value: function clearErrorMessage() {
      if (this.state.errorMsg) {
        this.setState({
          errorMsg: ''
        });
      }
    }
  }, {
    key: 'handleCurrencyChange',
    value: function handleCurrencyChange(currentlyEditing, event) {
      var _this3 = this;

      var obj = {};
      if (currentlyEditing === 'origin') {
        obj.originCurrency = event.target.value;
      } else {
        obj.destinationCurrency = event.target.value;
      }

      // just change both...
      // we have to use the callback so `this.state` will reflect the proper values
      // when they are called in _makeConversionAjaxCall()
      this.setState(obj, function () {
        // get new dest amount & conversion rates
        _this3.makeConversionAjaxCall({}, function (resp) {
          _this3.clearErrorMessage();

          _this3.setState({
            originAmount: resp.originAmount,
            // destinationAmount: resp.destAmount,
            destinationAmount: _this3.state.destinationAmount,
            conversionRate: resp.xRate
          });

          // get the new fee & total amount
          _this3.makeFeeAjaxCall({
            originAmount: resp.originAmount,
            originCurrency: _this3.state.originCurrency,
            destCurrency: _this3.state.destinationCurrency

          }, function (response) {
            _this3.setState({
              feeAmount: response.feeAmount
            });

            _this3.calcNewTotal();
          }, _this3.handleAjaxFailure);
        });
      });
    }
  }, {
    key: 'handleOriginAmountChange',
    value: function handleOriginAmountChange(event) {
      var _this4 = this;

      var newAmount = event.target.value;

      // remove unallowed chars
      newAmount = newAmount.replace(',', '');

      // optimistic field updates
      this.setState({ originAmount: newAmount });

      // get the new dest amount
      this.makeConversionAjaxCall({
        currentlyEditing: 'origin',
        newValue: newAmount

      }, function (resp) {
        _this4.clearErrorMessage();

        _this4.setState({
          conversionRate: resp.xRate,
          destinationAmount: resp.destAmount
        });
      }, this.handleAjaxFailure);

      // get the new fee & total amount
      this.makeFeeAjaxCall({
        originAmount: newAmount,
        originCurrency: this.state.originCurrency,
        destCurrency: this.state.destinationCurrency

      }, function (resp) {
        _this4.setState({
          feeAmount: resp.feeAmount
        });

        _this4.calcNewTotal();
      });
    }
  }, {
    key: 'handleDestAmountChange',
    value: function handleDestAmountChange(event) {
      var _this5 = this;

      var newAmount = event.target.value;

      // remove unallowed chars
      newAmount = newAmount.replace(',', '');
      // optimistic update
      this.setState({ destinationAmount: newAmount });

      this.makeConversionAjaxCall({
        currentlyEditing: 'dest',
        newValue: newAmount

      }, function (resp) {
        // make ajax call to get the fee amount..
        var newState = {
          conversionRate: resp.xRate,
          originAmount: resp.originAmount
        };

        _this5.setState(newState);

        // get the new fee & total amount
        _this5.makeFeeAjaxCall({
          originAmount: resp.originAmount,
          originCurrency: _this5.state.originCurrency,
          destCurrency: _this5.state.destinationCurrency

        }, function (resp) {
          _this5.setState({
            feeAmount: resp.feeAmount
          });

          _this5.calcNewTotal();
        }, _this5.handleAjaxFailure);
      });
    }

    // this is debounced in `componentDidMount()` as this.makeConversionAjaxCall()

  }, {
    key: '_makeConversionAjaxCall',
    value: function _makeConversionAjaxCall(data, successCallback, failureCallback) {
      var originCurrency = this.state.originCurrency;
      var destCurrency = this.state.destinationCurrency;

      var payload = {
        originAmount: data.newValue || this.state.originAmount,
        destAmount: data.newValue || this.state.destAmount,
        originCurrency: originCurrency,
        destCurrency: destCurrency,
        calcOriginAmount: false

        // determine whether we need to calc origin or dest amount
      };if (data.currentlyEditing === 'dest') {
        payload.calcOriginAmount = true;
      }

      // ajax call for destination amount
      // originCurrency, destCurrency, originAmount
      _axios2.default.get('/api/conversion', {
        params: payload
      }).then(function (resp) {
        successCallback(resp.data);
      }).catch(failureCallback);
    }

    // this is debounced in `componentDidMount()`

  }, {
    key: '_makeFeeAjaxCall',
    value: function _makeFeeAjaxCall(payload, successCallback, failureCallback) {
      _axios2.default.get('/api/fees', {
        params: payload
      }).then(function (resp) {
        successCallback(resp.data);
      }).catch(failureCallback);
    }
  }, {
    key: 'calcNewTotal',
    value: function calcNewTotal() {
      var newTotal = parseFloat(this.state.originAmount, 10) + parseFloat(this.state.feeAmount, 10);
      this.setState({ totalCost: parseFloat(newTotal) });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this6 = this;

      if (this.state.errorMsg) {
        var errorMsg = _react2.default.createElement(
          'div',
          { className: 'errorMsg' },
          this.state.errorMsg
        );
      }

      return _react2.default.createElement(
        'div',
        null,
        errorMsg,
        _react2.default.createElement(
          'label',
          null,
          'Convert'
        ),
        '\xA0',
        _react2.default.createElement('input', { className: 'amount-field', ref: function ref(input) {
            return _this6.originAmountInput = input;
          }, onChange: this.handleOriginAmountChange, value: this.state.originAmount }),
        _react2.default.createElement(
          'select',
          { value: this.state.originCurrency, onChange: this.handleOriginCurrencyChange },
          _react2.default.createElement(
            'option',
            { value: 'USD' },
            'USD'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EUR' },
            'EUR'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JPY' },
            'JPY'
          )
        ),
        'to ',
        _react2.default.createElement('input', { className: 'amount-field', onChange: this.handleDestAmountChange, value: this.state.destinationAmount }),
        '\xA0',
        _react2.default.createElement(
          'select',
          { value: this.state.destinationCurrency, onChange: this.handleDestCurrencyChange },
          _react2.default.createElement(
            'option',
            { value: 'USD' },
            'USD'
          ),
          _react2.default.createElement(
            'option',
            { value: 'EUR' },
            'EUR'
          ),
          _react2.default.createElement(
            'option',
            { value: 'JPY' },
            'JPY'
          )
        ),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement('br', null),
        _react2.default.createElement(FeesTable, {
          originCurrency: this.state.originCurrency,
          destinationCurrency: this.state.destinationCurrency,
          conversionRate: this.state.conversionRate,
          fee: this.state.feeAmount,
          total: this.state.totalCost
        })
      );
    }
  }]);

  return Conversion;
}(_react2.default.Component);

exports.default = Conversion;

/***/ }),

/***/ 63:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/smazad/Workspace/code/projects/money-conversion-app/node_modules/lodash.debounce/index.js'");

/***/ }),

/***/ 67:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/smazad/Workspace/code/projects/money-conversion-app/node_modules/prop-types/index.js'");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

throw new Error("Module build failed: Error: ENOENT: no such file or directory, open '/home/smazad/Workspace/code/projects/money-conversion-app/node_modules/react/index.js'");

/***/ })

/******/ });