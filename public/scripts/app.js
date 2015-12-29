(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = (function (_React$Component) {
  _inherits(Home, _React$Component);

  function Home(props) {
    _classCallCheck(this, Home);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Home).call(this, props));
  }

  _createClass(Home, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          'Здесь мы собираем самые вдохновляющие высказывания человечества. На сайте, наполненном мыслями мудрецов и философов, афоризмами писателей и выдающихся людей, нет ни каталога фраз, ни списка авторов. Мы не верим в случайный выбор. Вы сами руководите своей судьбой. Просто прислушайтесь к себе. Задумайтесь, и одно из самых вдохновляющих высказываний человечества послужит знаком именно для Вас.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: 'verse', className: 'button button-primary' },
            'Читать'
          )
        )
      );
    }
  }]);

  return Home;
})(_react2.default.Component);

exports.default = Home;
;

},{"react":"b6Dds6","react-router":"F6am2D"}],2:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NotFound = (function (_React$Component) {
  _inherits(NotFound, _React$Component);

  function NotFound(props) {
    _classCallCheck(this, NotFound);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).call(this, props));
  }

  _createClass(NotFound, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'h2',
        null,
        'Not found'
      );
    }
  }]);

  return NotFound;
})(_react2.default.Component);

exports.default = NotFound;
;

},{"react":"b6Dds6"}],3:[function(require,module,exports){
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

},{"react":"b6Dds6"}],4:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Verse = (function (_React$Component) {
  _inherits(Verse, _React$Component);

  function Verse(props) {
    _classCallCheck(this, Verse);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(Verse).call(this, props));

    _this.state = { verse: '', reference: '' };
    _this.getRandomVerse = _this.getRandomVerse.bind(_this);
    return _this;
  }

  _createClass(Verse, [{
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'one-half column test' },
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
          _react2.default.createElement('input', { type: 'button', value: 'Back' }),
          _react2.default.createElement('input', { onClick: this.getRandomVerse, className: 'button-primary', type: 'button', value: 'Next' })
        )
      );
    }
  }, {
    key: 'getRandomVerse',
    value: function getRandomVerse() {
      var id = this.props.params.id;
      var url = id ? '/api/v1.0/verse/' + id : '/api/v1.0/verse';
      $.getJSON(url, (function (data) {
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

  return Verse;
})(_react2.default.Component);

exports.default = Verse;
;

},{"react":"b6Dds6"}],5:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _Home = require('./Home');

var _Home2 = _interopRequireDefault(_Home);

var _Verse = require('./Verse');

var _Verse2 = _interopRequireDefault(_Verse);

var _Share = require('./Share');

var _Share2 = _interopRequireDefault(_Share);

var _NotFound = require('./NotFound');

var _NotFound2 = _interopRequireDefault(_NotFound);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Components

var App = (function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(App).call(this, props));
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
          this.props.children
        )
      );
    }
  }]);

  return App;
})(_react2.default.Component);

;

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _reactRouter.browserHistory },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'verse', component: _Verse2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'verse/:id', component: _Verse2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
  )
), document.getElementById('app'));

},{"./Home":1,"./NotFound":2,"./Share":3,"./Verse":4,"react":"b6Dds6","react-dom":"Ld8xHf","react-router":"F6am2D"}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlUmVsb2FkZWRcXHJhbmRvbS12ZXJzZVxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiSG9tZS5qcyIsIk5vdEZvdW5kLmpzIiwiU2hhcmUuanMiLCJWZXJzZS5qcyIsImZha2VfOGFkMGU4M2MuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR3FCLElBQUk7WUFBSixJQUFJOztBQUN2QixXQURtQixJQUFJLENBQ1gsS0FBSyxFQUFFOzBCQURBLElBQUk7O2tFQUFKLElBQUksYUFFZixLQUFLO0dBQ1o7O2VBSGtCLElBQUk7OzZCQUlkO0FBQ1AsYUFDRTs7VUFBSyxTQUFTLEVBQUMsV0FBVztRQUN4Qjs7WUFBSyxTQUFTLEVBQUMsS0FBSzs7U0FHZDtRQUNOOztZQUFLLFNBQVMsRUFBQyxLQUFLO1VBQ2xCO3lCQWRELElBQUk7Y0FjRyxFQUFFLEVBQUUsT0FBTyxBQUFDLEVBQUMsU0FBUyxFQUFDLHVCQUF1Qjs7V0FBYztTQUM5RDtPQUNGLENBQ047S0FDSDs7O1NBaEJrQixJQUFJO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQTVCLElBQUk7QUFpQnhCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEJtQixRQUFRO1lBQVIsUUFBUTs7QUFDM0IsV0FEbUIsUUFBUSxDQUNmLEtBQUssRUFBRTswQkFEQSxRQUFROztrRUFBUixRQUFRLGFBRW5CLEtBQUs7R0FDWjs7ZUFIa0IsUUFBUTs7NkJBSWxCO0FBQ1AsYUFBTzs7OztPQUFrQixDQUFDO0tBQzNCOzs7U0FOa0IsUUFBUTtHQUFTLGdCQUFNLFNBQVM7O2tCQUFoQyxRQUFRO0FBTzVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUG1CLEtBQUs7WUFBTCxLQUFL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SUFDN0IsMkNBMUJrQixVQUFVLElBMEJoQixTQUFTLGdCQUFPLEdBQUc7SUFDL0IsMkNBM0JXLEtBQUssSUEyQlQsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLGlCQUFRLEdBQUc7SUFDeEMsMkNBNUJXLEtBQUssSUE0QlQsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLGlCQUFRLEdBQUc7SUFDNUMsMkNBN0JXLEtBQUssSUE2QlQsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLG9CQUFXLEdBQUc7R0FDakM7Q0FDRCxFQUNSLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICDQl9C00LXRgdGMINC80Ysg0YHQvtCx0LjRgNCw0LXQvCDRgdCw0LzRi9C1INCy0LTQvtGF0L3QvtCy0LvRj9GO0YnQuNC1INCy0YvRgdC60LDQt9GL0LLQsNC90LjRjyDRh9C10LvQvtCy0LXRh9C10YHRgtCy0LAuXHJcbiAgICAgICAgICDQndCwINGB0LDQudGC0LUsINC90LDQv9C+0LvQvdC10L3QvdC+0Lwg0LzRi9GB0LvRj9C80Lgg0LzRg9C00YDQtdGG0L7QsiDQuCDRhNC40LvQvtGB0L7RhNC+0LIsINCw0YTQvtGA0LjQt9C80LDQvNC4INC/0LjRgdCw0YLQtdC70LXQuSDQuCDQstGL0LTQsNGO0YnQuNGF0YHRjyDQu9GO0LTQtdC5LCDQvdC10YIg0L3QuCDQutCw0YLQsNC70L7Qs9CwINGE0YDQsNC3LCDQvdC4INGB0L/QuNGB0LrQsCDQsNCy0YLQvtGA0L7Qsi4g0JzRiyDQvdC1INCy0LXRgNC40Lwg0LIg0YHQu9GD0YfQsNC50L3Ri9C5INCy0YvQsdC+0YAuINCS0Ysg0YHQsNC80Lgg0YDRg9C60L7QstC+0LTQuNGC0LUg0YHQstC+0LXQuSDRgdGD0LTRjNCx0L7QuS4g0J/RgNC+0YHRgtC+INC/0YDQuNGB0LvRg9GI0LDQudGC0LXRgdGMINC6INGB0LXQsdC1LiDQl9Cw0LTRg9C80LDQudGC0LXRgdGMLCDQuCDQvtC00L3QviDQuNC3INGB0LDQvNGL0YUg0LLQtNC+0YXQvdC+0LLQu9GP0Y7RidC40YUg0LLRi9GB0LrQsNC30YvQstCw0L3QuNC5INGH0LXQu9C+0LLQtdGH0LXRgdGC0LLQsCDQv9C+0YHQu9GD0LbQuNGCINC30L3QsNC60L7QvCDQuNC80LXQvdC90L4g0LTQu9GPINCS0LDRgS5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPExpbmsgdG89eyd2ZXJzZSd9IGNsYXNzTmFtZT1cImJ1dHRvbiBidXR0b24tcHJpbWFyeVwiPtCn0LjRgtCw0YLRjDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTm90Rm91bmQgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiA8aDI+Tm90IGZvdW5kPC9oMj47XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaGFyZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9XCJidXR0b24tcHJpbWFyeVwiPkZCPC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZlcnNlIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHsgdmVyc2U6ICcnLCByZWZlcmVuY2U6ICcnIH07XHJcbiAgICB0aGlzLmdldFJhbmRvbVZlcnNlID0gdGhpcy5nZXRSYW5kb21WZXJzZS5iaW5kKHRoaXMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS1oYWxmIGNvbHVtbiB0ZXN0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZlcnNlXCI+e3RoaXMuc3RhdGUudmVyc2V9PC9wPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJyZWZlcmVuY2VcIj57dGhpcy5zdGF0ZS5yZWZlcmVuY2V9PC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCYWNrXCIvPlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuZ2V0UmFuZG9tVmVyc2V9IGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTmV4dFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRSYW5kb21WZXJzZSgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xyXG4gICAgbGV0IHVybCA9IGlkID8gJy9hcGkvdjEuMC92ZXJzZS8nICsgaWQgOiAnL2FwaS92MS4wL3ZlcnNlJztcclxuICAgICQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgICB0aGlzLnNldFN0YXRlKHtcclxuICAgICAgICAgIHZlcnNlOiBkYXRhLnRleHQsXHJcbiAgICAgICAgICByZWZlcmVuY2U6IGRhdGEucmVmZXJlbmNlXHJcbiAgICAgICAgfSk7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0UmFuZG9tVmVyc2UoKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rLCBJbmRleExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL0hvbWUnO1xyXG5pbXBvcnQgVmVyc2UgZnJvbSAnLi9WZXJzZSc7XHJcbmltcG9ydCBTaGFyZSBmcm9tICcuL1NoYXJlJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vTm90Rm91bmQnO1xyXG5cclxuY2xhc3MgQXBwIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICB7dGhpcy5wcm9wcy5jaGlsZHJlbn1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxufTtcclxuXHJcbnJlbmRlcigoXHJcbiAgPFJvdXRlciBoaXN0b3J5PXticm93c2VySGlzdG9yeX0+XHJcbiAgICA8Um91dGUgcGF0aD0nLycgY29tcG9uZW50PXtBcHB9PlxyXG4gICAgICA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPSd2ZXJzZScgY29tcG9uZW50PXtWZXJzZX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9J3ZlcnNlLzppZCcgY29tcG9uZW50PXtWZXJzZX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4gIDwvUm91dGVyPlxyXG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4iXX0=
