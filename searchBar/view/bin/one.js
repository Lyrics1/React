/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductCategoryRow = function (_React$Component) {
  _inherits(ProductCategoryRow, _React$Component);

  function ProductCategoryRow() {
    _classCallCheck(this, ProductCategoryRow);

    return _possibleConstructorReturn(this, (ProductCategoryRow.__proto__ || Object.getPrototypeOf(ProductCategoryRow)).apply(this, arguments));
  }

  _createClass(ProductCategoryRow, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "th",
          { colSpan: "2" },
          this.props.category
        )
      );
    }
  }]);

  return ProductCategoryRow;
}(React.Component);

var ProductRow = function (_React$Component2) {
  _inherits(ProductRow, _React$Component2);

  function ProductRow() {
    _classCallCheck(this, ProductRow);

    return _possibleConstructorReturn(this, (ProductRow.__proto__ || Object.getPrototypeOf(ProductRow)).apply(this, arguments));
  }

  _createClass(ProductRow, [{
    key: "render",
    value: function render() {
      var name = this.props.product.stocked ? this.props.product.name : React.createElement(
        "span",
        { style: { color: 'red' } },
        this.props.product.name
      );
      return React.createElement(
        "tr",
        null,
        React.createElement(
          "td",
          null,
          name
        ),
        React.createElement(
          "td",
          null,
          this.props.product.price
        )
      );
    }
  }]);

  return ProductRow;
}(React.Component);

var ProductTable = function (_React$Component3) {
  _inherits(ProductTable, _React$Component3);

  function ProductTable() {
    _classCallCheck(this, ProductTable);

    return _possibleConstructorReturn(this, (ProductTable.__proto__ || Object.getPrototypeOf(ProductTable)).apply(this, arguments));
  }

  _createClass(ProductTable, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var rows = [];
      var lastCategory = null;
      console.log(this.props.inStockOnly);
      this.props.products.forEach(function (product) {
        if (product.name.indexOf(_this4.props.filterText) === -1 || !product.stocked && _this4.props.inStockOnly) {
          return;
        }
        if (product.category !== lastCategory) {
          rows.push(React.createElement(ProductCategoryRow, { category: product.category, key: product.category }));
        }
        rows.push(React.createElement(ProductRow, { product: product, key: product.name }));
        lastCategory = product.category;
      });
      return React.createElement(
        "table",
        null,
        React.createElement(
          "thead",
          null,
          React.createElement(
            "tr",
            null,
            React.createElement(
              "th",
              null,
              "Name"
            ),
            React.createElement(
              "th",
              null,
              "Price"
            )
          )
        ),
        React.createElement(
          "tbody",
          null,
          rows
        )
      );
    }
  }]);

  return ProductTable;
}(React.Component);

var SearchBar = function (_React$Component4) {
  _inherits(SearchBar, _React$Component4);

  function SearchBar(props) {
    _classCallCheck(this, SearchBar);

    var _this5 = _possibleConstructorReturn(this, (SearchBar.__proto__ || Object.getPrototypeOf(SearchBar)).call(this, props));

    _this5.handleFilterTextInputChange = _this5.handleFilterTextInputChange.bind(_this5);
    _this5.handleInStockInputChange = _this5.handleInStockInputChange.bind(_this5);
    return _this5;
  }

  _createClass(SearchBar, [{
    key: "handleFilterTextInputChange",
    value: function handleFilterTextInputChange(e) {
      this.props.onFilterTextInput(e.target.value);
    }
  }, {
    key: "handleInStockInputChange",
    value: function handleInStockInputChange(e) {
      this.props.onInStockInput(e.target.checked);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "form",
        null,
        React.createElement("input", {
          type: "text",
          placeholder: "Search...",
          value: this.props.filterText,
          onChange: this.handleFilterTextInputChange
        }),
        React.createElement(
          "p",
          null,
          React.createElement("input", {
            type: "checkbox",
            checked: this.props.inStockOnly,
            onChange: this.handleInStockInputChange
          }),
          ' ',
          "Only show products in stock"
        )
      );
    }
  }]);

  return SearchBar;
}(React.Component);

var FilterableProductTable = function (_React$Component5) {
  _inherits(FilterableProductTable, _React$Component5);

  function FilterableProductTable(props) {
    _classCallCheck(this, FilterableProductTable);

    var _this6 = _possibleConstructorReturn(this, (FilterableProductTable.__proto__ || Object.getPrototypeOf(FilterableProductTable)).call(this, props));

    _this6.state = {
      filterText: '',
      inStockOnly: false
    };

    _this6.handleFilterTextInput = _this6.handleFilterTextInput.bind(_this6);
    _this6.handleInStockInput = _this6.handleInStockInput.bind(_this6);
    return _this6;
  }

  _createClass(FilterableProductTable, [{
    key: "handleFilterTextInput",
    value: function handleFilterTextInput(filterText) {
      this.setState({
        filterText: filterText
      });
    }
  }, {
    key: "handleInStockInput",
    value: function handleInStockInput(inStockOnly) {
      this.setState({
        inStockOnly: inStockOnly
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(SearchBar, {
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly,
          onFilterTextInput: this.handleFilterTextInput,
          onInStockInput: this.handleInStockInput
        }),
        React.createElement(ProductTable, {
          products: this.props.products,
          filterText: this.state.filterText,
          inStockOnly: this.state.inStockOnly
        })
      );
    }
  }]);

  return FilterableProductTable;
}(React.Component);

var PRODUCTS = [{ category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football' }, { category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball' }, { category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball' }, { category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch' }, { category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5' }, { category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7' }];

ReactDOM.render(React.createElement(FilterableProductTable, { products: PRODUCTS }), document.getElementById('container'));

/***/ })
/******/ ]);