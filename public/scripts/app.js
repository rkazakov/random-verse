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
          { className: 'row text' },
          'Здесь мы собираем самые вдохновляющие тексты. На сайте, наполненном мыслями мудрецов и философов, афоризмами писателей и выдающихся людей, нет ни каталога фраз, ни списка авторов. Мы не верим в случайный выбор. Вы сами руководите своей судьбой. Просто прислушайтесь к себе. Задумайтесь, и одно из самых вдохновляющих высказываний человечества послужит знаком именно для Вас.'
        ),
        _react2.default.createElement(
          'div',
          { className: 'row button-read' },
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
    _this.getNext = _this.getNext.bind(_this);
    _this.getPrev = _this.getPrev.bind(_this);
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
            { className: 'one-half column text' },
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
          _react2.default.createElement('input', { onClick: this.getPrev, type: 'button', value: 'Back' }),
          _react2.default.createElement('input', { onClick: this.getNext, className: 'button-primary', type: 'button', value: 'Next' })
        )
      );
    }
  }, {
    key: 'getPrev',
    value: function getPrev() {
      // TODO: use React Router history to implement back action
    }
  }, {
    key: 'getNext',
    value: function getNext() {
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
      this.getNext();
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

var _Home = require('./components/Home');

var _Home2 = _interopRequireDefault(_Home);

var _Verse = require('./components/Verse');

var _Verse2 = _interopRequireDefault(_Verse);

var _Share = require('./components/Share');

var _Share2 = _interopRequireDefault(_Share);

var _NotFound = require('./components/NotFound');

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

},{"./components/Home":1,"./components/NotFound":2,"./components/Share":3,"./components/Verse":4,"react":"b6Dds6","react-dom":"Ld8xHf","react-router":"F6am2D"}]},{},[5])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlUmVsb2FkZWRcXHJhbmRvbS12ZXJzZVxcbm9kZV9tb2R1bGVzXFxndWxwLWJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3NlcmlmeVxcbm9kZV9tb2R1bGVzXFxicm93c2VyLXBhY2tcXF9wcmVsdWRlLmpzIiwiSG9tZS5qcyIsIk5vdEZvdW5kLmpzIiwiU2hhcmUuanMiLCJWZXJzZS5qcyIsImZha2VfZTIyZjdmODIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDR3FCLElBQUk7WUFBSixJQUFJOztBQUN2QixXQURtQixJQUFJLENBQ1gsS0FBSyxFQUFFOzBCQURBLElBQUk7O2tFQUFKLElBQUksYUFFZixLQUFLO0dBQ1o7O2VBSGtCLElBQUk7OzZCQUlkO0FBQ1AsYUFDRTs7VUFBSyxTQUFTLEVBQUMsV0FBVztRQUN4Qjs7WUFBSyxTQUFTLEVBQUMsVUFBVTs7U0FHbkI7UUFDTjs7WUFBSyxTQUFTLEVBQUMsaUJBQWlCO1VBQzlCO3lCQWRELElBQUk7Y0FjRyxFQUFFLEVBQUUsT0FBTyxBQUFDLEVBQUMsU0FBUyxFQUFDLHVCQUF1Qjs7V0FBYztTQUM5RDtPQUNGLENBQ047S0FDSDs7O1NBaEJrQixJQUFJO0dBQVMsZ0JBQU0sU0FBUzs7a0JBQTVCLElBQUk7QUFpQnhCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDbEJtQixRQUFRO1lBQVIsUUFBUTs7QUFDM0IsV0FEbUIsUUFBUSxDQUNmLEtBQUssRUFBRTswQkFEQSxRQUFROztrRUFBUixRQUFRLGFBRW5CLEtBQUs7R0FDWjs7ZUFIa0IsUUFBUTs7NkJBSWxCO0FBQ1AsYUFBTzs7OztPQUFrQixDQUFDO0tBQzNCOzs7U0FOa0IsUUFBUTtHQUFTLGdCQUFNLFNBQVM7O2tCQUFoQyxRQUFRO0FBTzVCLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lDUG1CLEtBQUs7WUFBTCxL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Qk8sTUFBTTtJQXdCTCxPQUFPLGVBeEJvQyxjQUFjLEFBd0JqQztFQUM5QjtpQkF6QmEsS0FBSztNQXlCWCxJQUFJLEVBQUMsR0FBRyxFQUFDLFNBQVMsRUFBRSxHQUFHLEFBQUM7SUFDN0IsMkNBMUJrQixVQUFVLElBMEJoQixTQUFTLGdCQUFPLEdBQUc7SUFDL0IsMkNBM0JXLEtBQUssSUEyQlQsSUFBSSxFQUFDLE9BQU8sRUFBQyxTQUFTLGlCQUFRLEdBQUc7SUFDeEMsMkNBNUJXLEtBQUssSUE0QlQsSUFBSSxFQUFDLFdBQVcsRUFBQyxTQUFTLGlCQUFRLEdBQUc7SUFDNUMsMkNBN0JXLEtBQUssSUE2QlQsSUFBSSxFQUFDLEdBQUcsRUFBQyxTQUFTLG9CQUFXLEdBQUc7R0FDakM7Q0FDRCxFQUNSLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IHRleHRcIj5cclxuICAgICAgICAgINCX0LTQtdGB0Ywg0LzRiyDRgdC+0LHQuNGA0LDQtdC8INGB0LDQvNGL0LUg0LLQtNC+0YXQvdC+0LLQu9GP0Y7RidC40LUg0YLQtdC60YHRgtGLLlxyXG4gICAgICAgICAg0J3QsCDRgdCw0LnRgtC1LCDQvdCw0L/QvtC70L3QtdC90L3QvtC8INC80YvRgdC70Y/QvNC4INC80YPQtNGA0LXRhtC+0LIg0Lgg0YTQuNC70L7RgdC+0YTQvtCyLCDQsNGE0L7RgNC40LfQvNCw0LzQuCDQv9C40YHQsNGC0LXQu9C10Lkg0Lgg0LLRi9C00LDRjtGJ0LjRhdGB0Y8g0LvRjtC00LXQuSwg0L3QtdGCINC90Lgg0LrQsNGC0LDQu9C+0LPQsCDRhNGA0LDQtywg0L3QuCDRgdC/0LjRgdC60LAg0LDQstGC0L7RgNC+0LIuINCc0Ysg0L3QtSDQstC10YDQuNC8INCyINGB0LvRg9GH0LDQudC90YvQuSDQstGL0LHQvtGALiDQktGLINGB0LDQvNC4INGA0YPQutC+0LLQvtC00LjRgtC1INGB0LLQvtC10Lkg0YHRg9C00YzQsdC+0LkuINCf0YDQvtGB0YLQviDQv9GA0LjRgdC70YPRiNCw0LnRgtC10YHRjCDQuiDRgdC10LHQtS4g0JfQsNC00YPQvNCw0LnRgtC10YHRjCwg0Lgg0L7QtNC90L4g0LjQtyDRgdCw0LzRi9GFINCy0LTQvtGF0L3QvtCy0LvRj9GO0YnQuNGFINCy0YvRgdC60LDQt9GL0LLQsNC90LjQuSDRh9C10LvQvtCy0LXRh9C10YHRgtCy0LAg0L/QvtGB0LvRg9C20LjRgiDQt9C90LDQutC+0Lwg0LjQvNC10L3QvdC+INC00LvRjyDQktCw0YEuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3cgYnV0dG9uLXJlYWRcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPXsndmVyc2UnfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIj7Qp9C40YLQsNGC0Yw8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGgyPk5vdCBmb3VuZDwvaDI+O1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIj5GQjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZlcnNlOiAnJywgcmVmZXJlbmNlOiAnJyB9O1xyXG4gICAgdGhpcy5nZXROZXh0ID0gdGhpcy5nZXROZXh0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFByZXYgPSB0aGlzLmdldFByZXYuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtaGFsZiBjb2x1bW4gdGV4dFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2ZXJzZVwiPnt0aGlzLnN0YXRlLnZlcnNlfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVmZXJlbmNlXCI+e3RoaXMuc3RhdGUucmVmZXJlbmNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5nZXRQcmV2fSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCYWNrXCIvPlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuZ2V0TmV4dH0gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJOZXh0XCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG4gIGdldFByZXYoKSB7XHJcbiAgICAvLyBUT0RPOiB1c2UgUmVhY3QgUm91dGVyIGhpc3RvcnkgdG8gaW1wbGVtZW50IGJhY2sgYWN0aW9uXHJcbiAgfVxyXG4gIGdldE5leHQoKSB7XHJcbiAgICBsZXQgaWQgPSB0aGlzLnByb3BzLnBhcmFtcy5pZDtcclxuICAgIGxldCB1cmwgPSBpZCA/ICcvYXBpL3YxLjAvdmVyc2UvJyArIGlkIDogJy9hcGkvdjEuMC92ZXJzZSc7XHJcbiAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB2ZXJzZTogZGF0YS50ZXh0LFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiBkYXRhLnJlZmVyZW5jZVxyXG4gICAgICAgIH0pO1xyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9XHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICB0aGlzLmdldE5leHQoKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBSb3V0ZXIsIFJvdXRlLCBJbmRleFJvdXRlLCBMaW5rLCBJbmRleExpbmssIGJyb3dzZXJIaXN0b3J5IH0gZnJvbSAncmVhY3Qtcm91dGVyJ1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBWZXJzZSBmcm9tICcuL2NvbXBvbmVudHMvVmVyc2UnO1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9jb21wb25lbnRzL1NoYXJlJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIHt0aGlzLnByb3BzLmNoaWxkcmVufVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyKChcclxuICA8Um91dGVyIGhpc3Rvcnk9e2Jyb3dzZXJIaXN0b3J5fT5cclxuICAgIDxSb3V0ZSBwYXRoPScvJyBjb21wb25lbnQ9e0FwcH0+XHJcbiAgICAgIDxJbmRleFJvdXRlIGNvbXBvbmVudD17SG9tZX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9J3ZlcnNlJyBjb21wb25lbnQ9e1ZlcnNlfSAvPlxyXG4gICAgICA8Um91dGUgcGF0aD0ndmVyc2UvOmlkJyBjb21wb25lbnQ9e1ZlcnNlfSAvPlxyXG4gICAgICA8Um91dGUgcGF0aD0nKicgY29tcG9uZW50PXtOb3RGb3VuZH0gLz5cclxuICAgIDwvUm91dGU+XHJcbiAgPC9Sb3V0ZXI+XHJcbiksIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7XHJcbiJdfQ==
