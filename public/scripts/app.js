(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _share = require('./share');

var _share2 = _interopRequireDefault(_share);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));

    _this.state = { verse: '', reference: '' };
    _this.getRandomVerse = _this.getRandomVerse.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'one-half column test' },
            _react2.default.createElement(
              'h4',
              null,
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              { className: 'verse' },
              this.state.verse
            ),
            _react2.default.createElement(
              'p',
              { className: 'reference' },
              this.state.reference
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('input', { onClick: this.getRandomVerse, className: 'button-primary', type: 'button', value: 'Next verse' })
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_share2.default, null)
        )
      );
    }
  }, {
    key: 'getRandomVerse',
    value: function getRandomVerse() {
      $.getJSON('/api/v1.0/verse/random/', (function (data) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
      }).bind(this));
    }
  }, {
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.getRandomVerse();
    }
  }]);

  return App;
})(_react2.default.Component);

;

(0, _reactDom.render)(_react2.default.createElement(App, { title: 'Main' }), document.getElementById('app'));

},{"./share":2,"react":"b6Dds6","react-dom":"Ld8xHf","react-router":"F6am2D"}],2:[function(require,module,exports){
"use strict";

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Share = (function (_React$Component) {
  _inherits(Share, _React$Component);

  function Share(props) {
    _classCallCheck(this, Share);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Share).call(this, props));
  }

  _createClass(Share, [{
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { className: "container" },
        _react2.default.createElement(
          "div",
          { className: "row" },
          _react2.default.createElement(
            "button",
            { className: "button-primary" },
            "FB"
          )
        )
      );
    }
  }]);

  return Share;
})(_react2.default.Component);

exports.default = Share;
;

},{"react":"b6Dds6"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlXFxyYW5kb20tdmVyc2VcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImZha2VfZmE4Y2NiYjEuanMiLCJzaGFyZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ01NLEdBQUc7WUFBSCxHQUFHOztBQUNQLFdBREksR0FBRyxDQUNLLEtBQUssRUFBRTswQkFEZixHQUFHOzt1RUFBSCxHQUFHLGFBRUMsS0FBSzs7QUFDWCxVQUFLLEtBQUssR0FBRyxFQUFFLEtBQUssRUFBRSxFQUFFLEVBQUUsU0FBUyxFQUFFLEVBQUUsRUFBRSxDQUFDO0FBQzFDLFVBQUssY0FBYyxHQUFHLE1BQUssY0FBYyxDQUFDLElBQUksT0FBTSxDQUFDOztHQUN0RDs7ZUFMRyxHQUFHOzs2QkFNRTtBQUNQLGFBQ0U7O1VBQUssU0FBUyxFQUFDLFdBQVc7UUFDeEI7O1lBQUssU0FBUyxFQUFDLEtBQUs7VUFDbEI7O2NBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQzs7O2NBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQU07WUFDM0I7O2dCQUFHLFNBQVMsRUFBQyxPQUFPO2NBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLO2FBQUs7WUFDM0M7O2dCQUFHLFNBQVMsRUFBQyxXQUFXO2NBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO2FBQUs7V0FDL0M7U0FDRjtRQUNOOztZQUFLLFNBQVMsRUFBQyxLQUFLO1VBQ2xCLHlDQUFPLE9BQU8sRUFBRSxJQUFJLENBQUMsY0FBYyxBQUFDLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLFlBQVksR0FBRTtTQUM5RjtRQUNOOztZQUFLLFNBQVMsRUFBQyxLQUFLO1VBQ2xCLG9EQUFTO1NBQ0w7T0FDRixDQUNOO0tBQ0g7OztxQ0FDZ0I7QUFDZixPQUFDLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLENBQUEsVUFBUyxJQUFJLEVBQUU7QUFDaEQsWUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNoQixtQkFBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQztPQUNOLENBQUEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztLQUNmOzs7d0NBQ21CO0FBQ2xCLFVBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztLQUN2Qjs7O1NBbkNHLEdBQUc7R0FBUyxnQkFBTSxTQUFTOztBQW9DaEMsQ0FBQzs7QUFFRixjQTNDUyxNQUFNLEVBNENiLDhCQUFDLEdBQUcsSUFBQyxLQUFLLEVBQUMsTUFBTSxHQUFFLEVBQ2xCLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUM1Q2QsS0FBSztZQUFMLEtBQUs7O0FBQ3hCLFdBRG1CLEtBQUssQ0FDWixLQUFLLEVBQUU7MEJBREEsS0FBSzs7a0VBQUwsS0FBSyxhQUVoQixLQUFLO0dBQ1o7O2VBSGtCLEtBQUs7OzZCQUlmO0FBQ1AsYUFDRTs7VUFBSyxTQUFTLEVBQUMsV0FBVztRQUN4Qjs7WUFBSyxTQUFTLEVBQUMsS0FBSztVQUNsQjs7Y0FBUSxTQUFTLEVBQUMsZ0JBQWdCOztXQUFZO1NBQzFDO09BQ0YsQ0FDTjtLQUNIOzs7U0Faa0IsS0FBSztHQUFTLGdCQUFNLFNBQVM7O2tCQUE3QixLQUFLO0FBYXpCLENBQUMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dGhyb3cgbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKX12YXIgZj1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwoZi5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxmLGYuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyByZW5kZXIgfSBmcm9tICdyZWFjdC1kb20nXHJcbmltcG9ydCB7IGJyb3dzZXJIaXN0b3J5LCBSb3V0ZXIsIFJvdXRlLCBMaW5rIH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuaW1wb3J0IFNoYXJlIGZyb20gJy4vc2hhcmUnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmVyc2U6ICcnLCByZWZlcmVuY2U6ICcnIH07XHJcbiAgICB0aGlzLmdldFJhbmRvbVZlcnNlID0gdGhpcy5nZXRSYW5kb21WZXJzZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS1oYWxmIGNvbHVtbiB0ZXN0XCI+XHJcbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2ZXJzZVwiPnt0aGlzLnN0YXRlLnZlcnNlfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVmZXJlbmNlXCI+e3RoaXMuc3RhdGUucmVmZXJlbmNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5nZXRSYW5kb21WZXJzZX0gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJOZXh0IHZlcnNlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8U2hhcmUgLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRSYW5kb21WZXJzZSgpIHtcclxuICAgICQuZ2V0SlNPTignL2FwaS92MS4wL3ZlcnNlL3JhbmRvbS8nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB2ZXJzZTogZGF0YS50ZXh0LFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiBkYXRhLnJlZmVyZW5jZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldFJhbmRvbVZlcnNlKCk7XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyKChcclxuICA8QXBwIHRpdGxlPSdNYWluJy8+XHJcbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoYXJlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCI+RkI8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIl19
