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
          _react2.default.createElement(
            'div',
            { className: 'one-half column text' },
            _react2.default.createElement(
              'p',
              { className: 'verse' },
              'Здесь мы собираем самые вдохновляющие тексты. На сайте, наполненном мыслями мудрецов и философов, афоризмами писателей и выдающихся людей, нет ни каталога фраз, ни списка авторов. Мы не верим в случайный выбор. Вы сами руководите своей судьбой. Просто прислушайтесь к себе. Задумайтесь, и одно из самых вдохновляющих высказываний человечества послужит знаком именно для Вас.'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: 'v', className: 'button button-primary' },
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

var _history = require('./history');

var _history2 = _interopRequireDefault(_history);

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
        { className: 'container' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'one-half column text' },
            _react2.default.createElement(
              'span',
              { className: 'verse' },
              this.state.verse
            ),
            _react2.default.createElement(
              'span',
              { className: 'reference' },
              ' (',
              this.state.reference,
              ')'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('input', { onClick: this.getPrev, type: 'button', value: 'Back' }),
          _react2.default.createElement('input', { onClick: this.getNext, className: 'button button-primary', type: 'button', value: 'Next' })
        )
      );
    }
  }, {
    key: 'getPrev',
    value: function getPrev() {
      // TODO: use React Router history to implement back action
      _history2.default.goBack();
    }
  }, {
    key: 'getNext',
    value: function getNext() {
      var id = this.props.params.id;
      console.log(id);
      var url = id ? '/api/v1.0/verse/' + id : '/api/v1.0/verse/';
      $.getJSON(url, (function (data) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
        //location.hash = data.cid;
      }).bind(this));

      /*$.getJSON('/api/v1.0/verse', function(data) {
        //history.replaceState(null, '/verse/' + data.cid);
        //location.hash = "#value";
      }.bind(this));*/
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

},{"./history":5,"react":"b6Dds6"}],5:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _createBrowserHistory2.default)();

},{"history/lib/createBrowserHistory":13}],6:[function(require,module,exports){
'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

var _history = require('./components/history');

var _history2 = _interopRequireDefault(_history);

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
        null,
        ' ',
        this.props.children || _react2.default.createElement(_Home2.default, null),
        ' '
      );
    }
  }]);

  return App;
})(_react2.default.Component);

;

(0, _reactDom.render)(_react2.default.createElement(
  _reactRouter.Router,
  { history: _history2.default },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: App },
    '// ',
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Verse2.default }),
    _react2.default.createElement(
      _reactRouter.Route,
      { path: 'v', component: _Home2.default },
      _react2.default.createElement(_reactRouter.Route, { path: '/v/:id', component: _Verse2.default })
    ),
    _react2.default.createElement(_reactRouter.Route, { path: '*', component: _NotFound2.default })
  )
), document.getElementById('app'));

},{"./components/Home":1,"./components/NotFound":2,"./components/Share":3,"./components/Verse":4,"./components/history":5,"react":"b6Dds6","react-dom":"Ld8xHf","react-router":"F6am2D"}],7:[function(require,module,exports){
'use strict';

// shim for using process in browser

var process = module.exports = {};

process.nextTick = (function () {
    var canSetImmediate = typeof window !== 'undefined' && window.setImmediate;
    var canPost = typeof window !== 'undefined' && window.postMessage && window.addEventListener;

    if (canSetImmediate) {
        return function (f) {
            return window.setImmediate(f);
        };
    }

    if (canPost) {
        var queue = [];
        window.addEventListener('message', function (ev) {
            var source = ev.source;
            if ((source === window || source === null) && ev.data === 'process-tick') {
                ev.stopPropagation();
                if (queue.length > 0) {
                    var fn = queue.shift();
                    fn();
                }
            }
        }, true);

        return function nextTick(fn) {
            queue.push(fn);
            window.postMessage('process-tick', '*');
        };
    }

    return function nextTick(fn) {
        setTimeout(fn, 0);
    };
})();

process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

// TODO(shtylman)
process.cwd = function () {
    return '/';
};
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};

},{}],8:[function(require,module,exports){
/**
 * Indicates that navigation was caused by a call to history.push.
 */
'use strict';

exports.__esModule = true;
var PUSH = 'PUSH';

exports.PUSH = PUSH;
/**
 * Indicates that navigation was caused by a call to history.replace.
 */
var REPLACE = 'REPLACE';

exports.REPLACE = REPLACE;
/**
 * Indicates that navigation was caused by some other action such
 * as using a browser's back/forward buttons and/or manually manipulating
 * the URL in a browser's location bar. This is the default.
 *
 * See https://developer.mozilla.org/en-US/docs/Web/API/WindowEventHandlers/onpopstate
 * for more information.
 */
var POP = 'POP';

exports.POP = POP;
exports['default'] = {
  PUSH: PUSH,
  REPLACE: REPLACE,
  POP: POP
};

},{}],9:[function(require,module,exports){
"use strict";

exports.__esModule = true;
exports.loopAsync = loopAsync;

function loopAsync(turns, work, callback) {
  var currentTurn = 0;
  var isDone = false;

  function done() {
    isDone = true;
    callback.apply(this, arguments);
  }

  function next() {
    if (isDone) return;

    if (currentTurn < turns) {
      work.call(this, currentTurn++, next, done);
    } else {
      done.apply(this, arguments);
    }
  }

  next();
}

},{}],10:[function(require,module,exports){
(function (process){
/*eslint-disable no-empty */
'use strict';

exports.__esModule = true;
exports.saveState = saveState;
exports.readState = readState;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var KeyPrefix = '@@History/';
var QuotaExceededError = 'QuotaExceededError';
var SecurityError = 'SecurityError';

function createKey(key) {
  return KeyPrefix + key;
}

function saveState(key, state) {
  try {
    window.sessionStorage.setItem(createKey(key), JSON.stringify(state));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available due to security settings') : undefined;

      return;
    }

    if (error.name === QuotaExceededError && window.sessionStorage.length === 0) {
      // Safari "private mode" throws QuotaExceededError.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to save state; sessionStorage is not available in Safari private mode') : undefined;

      return;
    }

    throw error;
  }
}

function readState(key) {
  var json = undefined;
  try {
    json = window.sessionStorage.getItem(createKey(key));
  } catch (error) {
    if (error.name === SecurityError) {
      // Blocking cookies in Chrome/Firefox/Safari throws SecurityError on any
      // attempt to access window.sessionStorage.
      process.env.NODE_ENV !== 'production' ? _warning2['default'](false, '[history] Unable to read state; sessionStorage is not available due to security settings') : undefined;

      return null;
    }
  }

  if (json) {
    try {
      return JSON.parse(json);
    } catch (error) {
      // Ignore invalid JSON.
    }
  }

  return null;
}

}).call(this,require("ngpmcQ"))
},{"ngpmcQ":7,"warning":25}],11:[function(require,module,exports){
'use strict';

exports.__esModule = true;
exports.addEventListener = addEventListener;
exports.removeEventListener = removeEventListener;
exports.getHashPath = getHashPath;
exports.replaceHashPath = replaceHashPath;
exports.getWindowPath = getWindowPath;
exports.go = go;
exports.getUserConfirmation = getUserConfirmation;
exports.supportsHistory = supportsHistory;
exports.supportsGoWithoutReloadUsingHash = supportsGoWithoutReloadUsingHash;

function addEventListener(node, event, listener) {
  if (node.addEventListener) {
    node.addEventListener(event, listener, false);
  } else {
    node.attachEvent('on' + event, listener);
  }
}

function removeEventListener(node, event, listener) {
  if (node.removeEventListener) {
    node.removeEventListener(event, listener, false);
  } else {
    node.detachEvent('on' + event, listener);
  }
}

function getHashPath() {
  // We can't use window.location.hash here because it's not
  // consistent across browsers - Firefox will pre-decode it!
  return window.location.href.split('#')[1] || '';
}

function replaceHashPath(path) {
  window.location.replace(window.location.pathname + window.location.search + '#' + path);
}

function getWindowPath() {
  return window.location.pathname + window.location.search + window.location.hash;
}

function go(n) {
  if (n) window.history.go(n);
}

function getUserConfirmation(message, callback) {
  callback(window.confirm(message));
}

/**
 * Returns true if the HTML5 history API is supported. Taken from Modernizr.
 *
 * https://github.com/Modernizr/Modernizr/blob/master/LICENSE
 * https://github.com/Modernizr/Modernizr/blob/master/feature-detects/history.js
 * changed to avoid false negatives for Windows Phones: https://github.com/rackt/react-router/issues/586
 */

function supportsHistory() {
  var ua = navigator.userAgent;
  if ((ua.indexOf('Android 2.') !== -1 || ua.indexOf('Android 4.0') !== -1) && ua.indexOf('Mobile Safari') !== -1 && ua.indexOf('Chrome') === -1 && ua.indexOf('Windows Phone') === -1) {
    return false;
  }
  // FIXME: Work around our browser history not working correctly on Chrome
  // iOS: https://github.com/rackt/react-router/issues/2565
  if (ua.indexOf('CriOS') !== -1) {
    return false;
  }
  return window.history && 'pushState' in window.history;
}

/**
 * Returns false if using go(n) with hash history causes a full page reload.
 */

function supportsGoWithoutReloadUsingHash() {
  var ua = navigator.userAgent;
  return ua.indexOf('Firefox') === -1;
}

},{}],12:[function(require,module,exports){
'use strict';

exports.__esModule = true;
var canUseDOM = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
exports.canUseDOM = canUseDOM;

},{}],13:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _Actions = require('./Actions');

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _DOMStateStorage = require('./DOMStateStorage');

var _createDOMHistory = require('./createDOMHistory');

var _createDOMHistory2 = _interopRequireDefault(_createDOMHistory);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

/**
 * Creates and returns a history object that uses HTML5's history API
 * (pushState, replaceState, and the popstate event) to manage history.
 * This is the recommended method of managing history in browsers because
 * it provides the cleanest URLs.
 *
 * Note: In browsers that do not support the HTML5 history API full
 * page reloads will be used to preserve URLs.
 */
function createBrowserHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];

  !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'Browser history needs a DOM') : _invariant2['default'](false) : undefined;

  var forceRefresh = options.forceRefresh;

  var isSupported = _DOMUtils.supportsHistory();
  var useRefresh = !isSupported || forceRefresh;

  function getCurrentLocation(historyState) {
    historyState = historyState || window.history.state || {};

    var path = _DOMUtils.getWindowPath();
    var _historyState = historyState;
    var key = _historyState.key;

    var state = undefined;
    if (key) {
      state = _DOMStateStorage.readState(key);
    } else {
      state = null;
      key = history.createKey();

      if (isSupported) window.history.replaceState(_extends({}, historyState, { key: key }), null, path);
    }

    var location = _parsePath2['default'](path);

    return history.createLocation(_extends({}, location, { state: state }), undefined, key);
  }

  function startPopStateListener(_ref) {
    var transitionTo = _ref.transitionTo;

    function popStateListener(event) {
      if (event.state === undefined) return; // Ignore extraneous popstate events in WebKit.

      transitionTo(getCurrentLocation(event.state));
    }

    _DOMUtils.addEventListener(window, 'popstate', popStateListener);

    return function () {
      _DOMUtils.removeEventListener(window, 'popstate', popStateListener);
    };
  }

  function finishTransition(location) {
    var basename = location.basename;
    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;
    var state = location.state;
    var action = location.action;
    var key = location.key;

    if (action === _Actions.POP) return; // Nothing to do.

    _DOMStateStorage.saveState(key, state);

    var path = (basename || '') + pathname + search + hash;
    var historyState = {
      key: key
    };

    if (action === _Actions.PUSH) {
      if (useRefresh) {
        window.location.href = path;
        return false; // Prevent location update.
      } else {
          window.history.pushState(historyState, null, path);
        }
    } else {
      // REPLACE
      if (useRefresh) {
        window.location.replace(path);
        return false; // Prevent location update.
      } else {
          window.history.replaceState(historyState, null, path);
        }
    }
  }

  var history = _createDOMHistory2['default'](_extends({}, options, {
    getCurrentLocation: getCurrentLocation,
    finishTransition: finishTransition,
    saveState: _DOMStateStorage.saveState
  }));

  var listenerCount = 0,
      stopPopStateListener = undefined;

  function listenBefore(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listenBefore(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  function listen(listener) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    var unlisten = history.listen(listener);

    return function () {
      unlisten();

      if (--listenerCount === 0) stopPopStateListener();
    };
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (++listenerCount === 1) stopPopStateListener = startPopStateListener(history);

    history.registerTransitionHook(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    history.unregisterTransitionHook(hook);

    if (--listenerCount === 0) stopPopStateListener();
  }

  return _extends({}, history, {
    listenBefore: listenBefore,
    listen: listen,
    registerTransitionHook: registerTransitionHook,
    unregisterTransitionHook: unregisterTransitionHook
  });
}

exports['default'] = createBrowserHistory;
module.exports = exports['default'];

}).call(this,require("ngpmcQ"))
},{"./Actions":8,"./DOMStateStorage":10,"./DOMUtils":11,"./ExecutionEnvironment":12,"./createDOMHistory":14,"./parsePath":19,"invariant":24,"ngpmcQ":7}],14:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _invariant = require('invariant');

var _invariant2 = _interopRequireDefault(_invariant);

var _ExecutionEnvironment = require('./ExecutionEnvironment');

var _DOMUtils = require('./DOMUtils');

var _createHistory = require('./createHistory');

var _createHistory2 = _interopRequireDefault(_createHistory);

function createDOMHistory(options) {
  var history = _createHistory2['default'](_extends({
    getUserConfirmation: _DOMUtils.getUserConfirmation
  }, options, {
    go: _DOMUtils.go
  }));

  function listen(listener) {
    !_ExecutionEnvironment.canUseDOM ? process.env.NODE_ENV !== 'production' ? _invariant2['default'](false, 'DOM history needs a DOM') : _invariant2['default'](false) : undefined;

    return history.listen(listener);
  }

  return _extends({}, history, {
    listen: listen
  });
}

exports['default'] = createDOMHistory;
module.exports = exports['default'];

}).call(this,require("ngpmcQ"))
},{"./DOMUtils":11,"./ExecutionEnvironment":12,"./createHistory":15,"invariant":24,"ngpmcQ":7}],15:[function(require,module,exports){
//import warning from 'warning'
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _deepEqual = require('deep-equal');

var _deepEqual2 = _interopRequireDefault(_deepEqual);

var _AsyncUtils = require('./AsyncUtils');

var _Actions = require('./Actions');

var _createLocation2 = require('./createLocation');

var _createLocation3 = _interopRequireDefault(_createLocation2);

var _runTransitionHook = require('./runTransitionHook');

var _runTransitionHook2 = _interopRequireDefault(_runTransitionHook);

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

var _deprecate = require('./deprecate');

var _deprecate2 = _interopRequireDefault(_deprecate);

function createRandomKey(length) {
  return Math.random().toString(36).substr(2, length);
}

function locationsAreEqual(a, b) {
  return a.pathname === b.pathname && a.search === b.search &&
  //a.action === b.action && // Different action !== location change.
  a.key === b.key && _deepEqual2['default'](a.state, b.state);
}

var DefaultKeyLength = 6;

function createHistory() {
  var options = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
  var getCurrentLocation = options.getCurrentLocation;
  var finishTransition = options.finishTransition;
  var saveState = options.saveState;
  var go = options.go;
  var keyLength = options.keyLength;
  var getUserConfirmation = options.getUserConfirmation;

  if (typeof keyLength !== 'number') keyLength = DefaultKeyLength;

  var transitionHooks = [];

  function listenBefore(hook) {
    transitionHooks.push(hook);

    return function () {
      transitionHooks = transitionHooks.filter(function (item) {
        return item !== hook;
      });
    };
  }

  var allKeys = [];
  var changeListeners = [];
  var location = undefined;

  function getCurrent() {
    if (pendingLocation && pendingLocation.action === _Actions.POP) {
      return allKeys.indexOf(pendingLocation.key);
    } else if (location) {
      return allKeys.indexOf(location.key);
    } else {
      return -1;
    }
  }

  function updateLocation(newLocation) {
    var current = getCurrent();

    location = newLocation;

    if (location.action === _Actions.PUSH) {
      allKeys = [].concat(allKeys.slice(0, current + 1), [location.key]);
    } else if (location.action === _Actions.REPLACE) {
      allKeys[current] = location.key;
    }

    changeListeners.forEach(function (listener) {
      listener(location);
    });
  }

  function listen(listener) {
    changeListeners.push(listener);

    if (location) {
      listener(location);
    } else {
      var _location = getCurrentLocation();
      allKeys = [_location.key];
      updateLocation(_location);
    }

    return function () {
      changeListeners = changeListeners.filter(function (item) {
        return item !== listener;
      });
    };
  }

  function confirmTransitionTo(location, callback) {
    _AsyncUtils.loopAsync(transitionHooks.length, function (index, next, done) {
      _runTransitionHook2['default'](transitionHooks[index], location, function (result) {
        if (result != null) {
          done(result);
        } else {
          next();
        }
      });
    }, function (message) {
      if (getUserConfirmation && typeof message === 'string') {
        getUserConfirmation(message, function (ok) {
          callback(ok !== false);
        });
      } else {
        callback(message !== false);
      }
    });
  }

  var pendingLocation = undefined;

  function transitionTo(nextLocation) {
    if (location && locationsAreEqual(location, nextLocation)) return; // Nothing to do.

    pendingLocation = nextLocation;

    confirmTransitionTo(nextLocation, function (ok) {
      if (pendingLocation !== nextLocation) return; // Transition was interrupted.

      if (ok) {
        // treat PUSH to current path like REPLACE to be consistent with browsers
        if (nextLocation.action === _Actions.PUSH) {
          var prevPath = createPath(location);
          var nextPath = createPath(nextLocation);

          if (nextPath === prevPath) nextLocation.action = _Actions.REPLACE;
        }

        if (finishTransition(nextLocation) !== false) updateLocation(nextLocation);
      } else if (location && nextLocation.action === _Actions.POP) {
        var prevIndex = allKeys.indexOf(location.key);
        var nextIndex = allKeys.indexOf(nextLocation.key);

        if (prevIndex !== -1 && nextIndex !== -1) go(prevIndex - nextIndex); // Restore the URL.
      }
    });
  }

  function push(location) {
    transitionTo(createLocation(location, _Actions.PUSH, createKey()));
  }

  function replace(location) {
    transitionTo(createLocation(location, _Actions.REPLACE, createKey()));
  }

  function goBack() {
    go(-1);
  }

  function goForward() {
    go(1);
  }

  function createKey() {
    return createRandomKey(keyLength);
  }

  function createPath(location) {
    if (location == null || typeof location === 'string') return location;

    var pathname = location.pathname;
    var search = location.search;
    var hash = location.hash;

    var result = pathname;

    if (search) result += search;

    if (hash) result += hash;

    return result;
  }

  function createHref(location) {
    return createPath(location);
  }

  function createLocation(location, action) {
    var key = arguments.length <= 2 || arguments[2] === undefined ? createKey() : arguments[2];

    if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
      //warning(
      //  false,
      //  'The state (2nd) argument to history.createLocation is deprecated; use a ' +
      //  'location descriptor instead'
      //)

      if (typeof location === 'string') location = _parsePath2['default'](location);

      location = _extends({}, location, { state: action });

      action = key;
      key = arguments[3] || createKey();
    }

    return _createLocation3['default'](location, action, key);
  }

  // deprecated
  function setState(state) {
    if (location) {
      updateLocationState(location, state);
      updateLocation(location);
    } else {
      updateLocationState(getCurrentLocation(), state);
    }
  }

  function updateLocationState(location, state) {
    location.state = _extends({}, location.state, state);
    saveState(location.key, location.state);
  }

  // deprecated
  function registerTransitionHook(hook) {
    if (transitionHooks.indexOf(hook) === -1) transitionHooks.push(hook);
  }

  // deprecated
  function unregisterTransitionHook(hook) {
    transitionHooks = transitionHooks.filter(function (item) {
      return item !== hook;
    });
  }

  // deprecated
  function pushState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    push(_extends({ state: state }, path));
  }

  // deprecated
  function replaceState(state, path) {
    if (typeof path === 'string') path = _parsePath2['default'](path);

    replace(_extends({ state: state }, path));
  }

  return {
    listenBefore: listenBefore,
    listen: listen,
    transitionTo: transitionTo,
    push: push,
    replace: replace,
    go: go,
    goBack: goBack,
    goForward: goForward,
    createKey: createKey,
    createPath: createPath,
    createHref: createHref,
    createLocation: createLocation,

    setState: _deprecate2['default'](setState, 'setState is deprecated; use location.key to save state instead'),
    registerTransitionHook: _deprecate2['default'](registerTransitionHook, 'registerTransitionHook is deprecated; use listenBefore instead'),
    unregisterTransitionHook: _deprecate2['default'](unregisterTransitionHook, 'unregisterTransitionHook is deprecated; use the callback returned from listenBefore instead'),
    pushState: _deprecate2['default'](pushState, 'pushState is deprecated; use push instead'),
    replaceState: _deprecate2['default'](replaceState, 'replaceState is deprecated; use replace instead')
  };
}

exports['default'] = createHistory;
module.exports = exports['default'];

},{"./Actions":8,"./AsyncUtils":9,"./createLocation":16,"./deprecate":17,"./parsePath":19,"./runTransitionHook":20,"deep-equal":21}],16:[function(require,module,exports){
//import warning from 'warning'
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _Actions = require('./Actions');

var _parsePath = require('./parsePath');

var _parsePath2 = _interopRequireDefault(_parsePath);

function createLocation() {
  var location = arguments.length <= 0 || arguments[0] === undefined ? '/' : arguments[0];
  var action = arguments.length <= 1 || arguments[1] === undefined ? _Actions.POP : arguments[1];
  var key = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];

  var _fourthArg = arguments.length <= 3 || arguments[3] === undefined ? null : arguments[3];

  if (typeof location === 'string') location = _parsePath2['default'](location);

  if ((typeof action === 'undefined' ? 'undefined' : _typeof(action)) === 'object') {
    //warning(
    //  false,
    //  'The state (2nd) argument to createLocation is deprecated; use a ' +
    //  'location descriptor instead'
    //)

    location = _extends({}, location, { state: action });

    action = key || _Actions.POP;
    key = _fourthArg;
  }

  var pathname = location.pathname || '/';
  var search = location.search || '';
  var hash = location.hash || '';
  var state = location.state || null;

  return {
    pathname: pathname,
    search: search,
    hash: hash,
    state: state,
    action: action,
    key: key
  };
}

exports['default'] = createLocation;
module.exports = exports['default'];

},{"./Actions":8,"./parsePath":19}],17:[function(require,module,exports){
//import warning from 'warning'

"use strict";

exports.__esModule = true;
function deprecate(fn) {
  return fn;
  //return function () {
  //  warning(false, '[history] ' + message)
  //  return fn.apply(this, arguments)
  //}
}

exports["default"] = deprecate;
module.exports = exports["default"];

},{}],18:[function(require,module,exports){
"use strict";

exports.__esModule = true;
function extractPath(string) {
  var match = string.match(/^https?:\/\/[^\/]*/);

  if (match == null) return string;

  return string.substring(match[0].length);
}

exports["default"] = extractPath;
module.exports = exports["default"];

},{}],19:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

var _extractPath = require('./extractPath');

var _extractPath2 = _interopRequireDefault(_extractPath);

function parsePath(path) {
  var pathname = _extractPath2['default'](path);
  var search = '';
  var hash = '';

  process.env.NODE_ENV !== 'production' ? _warning2['default'](path === pathname, 'A path must be pathname + search + hash only, not a fully qualified URL like "%s"', path) : undefined;

  var hashIndex = pathname.indexOf('#');
  if (hashIndex !== -1) {
    hash = pathname.substring(hashIndex);
    pathname = pathname.substring(0, hashIndex);
  }

  var searchIndex = pathname.indexOf('?');
  if (searchIndex !== -1) {
    search = pathname.substring(searchIndex);
    pathname = pathname.substring(0, searchIndex);
  }

  if (pathname === '') pathname = '/';

  return {
    pathname: pathname,
    search: search,
    hash: hash
  };
}

exports['default'] = parsePath;
module.exports = exports['default'];

}).call(this,require("ngpmcQ"))
},{"./extractPath":18,"ngpmcQ":7,"warning":25}],20:[function(require,module,exports){
(function (process){
'use strict';

exports.__esModule = true;

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var _warning = require('warning');

var _warning2 = _interopRequireDefault(_warning);

function runTransitionHook(hook, location, callback) {
  var result = hook(location, callback);

  if (hook.length < 2) {
    // Assume the hook runs synchronously and automatically
    // call the callback with the return value.
    callback(result);
  } else {
    process.env.NODE_ENV !== 'production' ? _warning2['default'](result === undefined, 'You should not "return" in a transition hook with a callback argument; call the callback instead') : undefined;
  }
}

exports['default'] = runTransitionHook;
module.exports = exports['default'];

}).call(this,require("ngpmcQ"))
},{"ngpmcQ":7,"warning":25}],21:[function(require,module,exports){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var pSlice = Array.prototype.slice;
var objectKeys = require('./lib/keys.js');
var isArguments = require('./lib/is_arguments.js');

var deepEqual = module.exports = function (actual, expected, opts) {
  if (!opts) opts = {};
  // 7.1. All identical values are equivalent, as determined by ===.
  if (actual === expected) {
    return true;
  } else if (actual instanceof Date && expected instanceof Date) {
    return actual.getTime() === expected.getTime();

    // 7.3. Other pairs that do not both pass typeof value == 'object',
    // equivalence is determined by ==.
  } else if (!actual || !expected || (typeof actual === 'undefined' ? 'undefined' : _typeof(actual)) != 'object' && (typeof expected === 'undefined' ? 'undefined' : _typeof(expected)) != 'object') {
      return opts.strict ? actual === expected : actual == expected;

      // 7.4. For all other Object pairs, including Array objects, equivalence is
      // determined by having the same number of owned properties (as verified
      // with Object.prototype.hasOwnProperty.call), the same set of keys
      // (although not necessarily the same order), equivalent values for every
      // corresponding key, and an identical 'prototype' property. Note: this
      // accounts for both named and indexed properties on Arrays.
    } else {
        return objEquiv(actual, expected, opts);
      }
};

function isUndefinedOrNull(value) {
  return value === null || value === undefined;
}

function isBuffer(x) {
  if (!x || (typeof x === 'undefined' ? 'undefined' : _typeof(x)) !== 'object' || typeof x.length !== 'number') return false;
  if (typeof x.copy !== 'function' || typeof x.slice !== 'function') {
    return false;
  }
  if (x.length > 0 && typeof x[0] !== 'number') return false;
  return true;
}

function objEquiv(a, b, opts) {
  var i, key;
  if (isUndefinedOrNull(a) || isUndefinedOrNull(b)) return false;
  // an identical 'prototype' property.
  if (a.prototype !== b.prototype) return false;
  //~~~I've managed to break Object.keys through screwy arguments passing.
  //   Converting to array solves the problem.
  if (isArguments(a)) {
    if (!isArguments(b)) {
      return false;
    }
    a = pSlice.call(a);
    b = pSlice.call(b);
    return deepEqual(a, b, opts);
  }
  if (isBuffer(a)) {
    if (!isBuffer(b)) {
      return false;
    }
    if (a.length !== b.length) return false;
    for (i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false;
    }
    return true;
  }
  try {
    var ka = objectKeys(a),
        kb = objectKeys(b);
  } catch (e) {
    //happens when one is a string literal and the other isn't
    return false;
  }
  // having the same number of owned properties (keys incorporates
  // hasOwnProperty)
  if (ka.length != kb.length) return false;
  //the same set of keys (although not necessarily the same order),
  ka.sort();
  kb.sort();
  //~~~cheap key test
  for (i = ka.length - 1; i >= 0; i--) {
    if (ka[i] != kb[i]) return false;
  }
  //equivalent values for every corresponding key, and
  //~~~possibly expensive deep test
  for (i = ka.length - 1; i >= 0; i--) {
    key = ka[i];
    if (!deepEqual(a[key], b[key], opts)) return false;
  }
  return (typeof a === 'undefined' ? 'undefined' : _typeof(a)) === (typeof b === 'undefined' ? 'undefined' : _typeof(b));
}

},{"./lib/is_arguments.js":22,"./lib/keys.js":23}],22:[function(require,module,exports){
'use strict';

function _typeof(obj) { return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj; }

var supportsArgumentsClass = (function () {
  return Object.prototype.toString.call(arguments);
})() == '[object Arguments]';

exports = module.exports = supportsArgumentsClass ? supported : unsupported;

exports.supported = supported;
function supported(object) {
  return Object.prototype.toString.call(object) == '[object Arguments]';
};

exports.unsupported = unsupported;
function unsupported(object) {
  return object && (typeof object === 'undefined' ? 'undefined' : _typeof(object)) == 'object' && typeof object.length == 'number' && Object.prototype.hasOwnProperty.call(object, 'callee') && !Object.prototype.propertyIsEnumerable.call(object, 'callee') || false;
};

},{}],23:[function(require,module,exports){
'use strict';

exports = module.exports = typeof Object.keys === 'function' ? Object.keys : shim;

exports.shim = shim;
function shim(obj) {
  var keys = [];
  for (var key in obj) {
    keys.push(key);
  }return keys;
}

},{}],24:[function(require,module,exports){
(function (process){
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

}).call(this,require("ngpmcQ"))
},{"ngpmcQ":7}],25:[function(require,module,exports){
(function (process){
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

'use strict';

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (process.env.NODE_ENV !== 'production') {
  warning = function (condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

}).call(this,require("ngpmcQ"))
},{"ngpmcQ":7}]},{},[6])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlXFxyYW5kb20tdmVyc2VcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkhvbWUuanMiLCJOb3RGb3VuZC5qcyIsIlNoYXJlLmpzIiwiVmVyc2UuanMiLCJoaXN0b3J5LmpzIiwiZmFrZV8xMDVjMTEzNy5qcyIsImJyb3dzZXIuanMiLCJBY3Rpb25zLmpzIiwiQXN5bmNVdGlscy5qcyIsIkRPTVN0YXRlU3RvcmFnZS5qcyIsIkRPTVV0aWxzLmpzIiwiRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJjcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsImNyZWF0ZURPTUhpc3RvcnkuanMiLCJjcmVhdGVIaXN0b3J5LmpzIiwiY3JlYXRlTG9jYXRpb24uanMiLCJkZXByZWNhdGUuanMiLCJleHRyYWN0UGF0aC5qcyIsInBhcnNlUGF0aC5qcyIsInJ1blRyYW5zaXRpb25Ib29rLmpzIiwiaW5kZXguanMiLCJpc19hcmd1bWVudHMuanMiLCJrZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dxQixJQUFJO1lBQUosSUFBSTs7QUFDdkIsV0FEbUIsSUFBSSxDQUNYLEtBQUssRUFBRTswQkFEQSxJQUFJOztrRUFBSixJQUFJLGFBRWYsS0FBSztHQUNaOztlQUhrQixJQUFJOzs2QkFJZDtBQUNQLGFBQ0U7O1VBQUssU0FBUyxFQUFDLFdBQVc7UUFDeEI7O1lBQUssU0FBUyxFQUFDLEtBQUs7VUFDbEI7O2NBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQzs7Z0JBQUcsU0FBUyxFQUFDLE9BQU87O2FBR2hCO1dBQ0E7U0FDRjtRQUNOOztZQUFLLFNBQVMsRUFBQyxLQUFLO1VBQ2xCO3lCQWxCRCxJQUFJO2NBa0JHLEVBQUUsRUFBRSxH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QUFDLENBQUMsQ0FBQztBQUN4QyxTQUFLLElBQUksR0FBRyxHQUFHLENBQUMsRUFBRSxHQUFHLEdBQUcsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFO0FBQ2xDLFVBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEdBQUcsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0tBQ2hDO0FBQ0QsUUFBSSxNQUFNLEtBQUssU0FBUyxFQUFFO0FBQ3hCLFlBQU0sSUFBSSxLQUFLLENBQ2IsMkRBQTJELEdBQzNELGtCQUFrQixDQUNuQixDQUFDO0tBQ0g7O0FBRUQsUUFBSSxNQUFNLENBQUMsTUFBTSxHQUFHLEVBQUUsSUFBSSxBQUFDLFVBQVUsQ0FBRSxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUU7QUFDbkQsWUFBTSxJQUFJLEtBQUssQ0FDYiw4REFBOEQsR0FDOUQsdURBQXVELEdBQUcsTUFBTSxDQUNqRSxDQUFDO0tBQ0g7O0FBRUQsUUFBSSxDQUFDLFNBQVMsRUFBRTtBQUNkLFVBQUksUUFBUSxHQUFHLENBQUMsQ0FBQztBQUNqQixVQUFJLE9BQU8sR0FBRyxXQUFXLEdBQ3ZCLE1BQU0sQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFlBQVc7QUFDL0IsZUFBTyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQztPQUN6QixDQUFDLENBQUM7QUFDTCxVQUFJLE9BQU8sT0FBTyxLQUFLLFdBQVcsRUFBRTtBQUNsQyxlQUFPLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQ3hCO0FBQ0QsVUFBSTs7O0FBR0YsY0FBTSxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztPQUMxQixDQUFDLE9BQU0sQ0FBQyxFQUFFLEVBQUU7S0FDZDtHQUNGLENBQUM7Q0FDSDs7QUFFRCxNQUFNLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS1oYWxmIGNvbHVtbiB0ZXh0XCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInZlcnNlXCI+XHJcbiAgICAgICAgICAgICAg0JfQtNC10YHRjCDQvNGLINGB0L7QsdC40YDQsNC10Lwg0YHQsNC80YvQtSDQstC00L7RhdC90L7QstC70Y/RjtGJ0LjQtSDRgtC10LrRgdGC0YsuXHJcbiAgICAgICAgICAgICAg0J3QsCDRgdCw0LnRgtC1LCDQvdCw0L/QvtC70L3QtdC90L3QvtC8INC80YvRgdC70Y/QvNC4INC80YPQtNGA0LXRhtC+0LIg0Lgg0YTQuNC70L7RgdC+0YTQvtCyLCDQsNGE0L7RgNC40LfQvNCw0LzQuCDQv9C40YHQsNGC0LXQu9C10Lkg0Lgg0LLRi9C00LDRjtGJ0LjRhdGB0Y8g0LvRjtC00LXQuSwg0L3QtdGCINC90Lgg0LrQsNGC0LDQu9C+0LPQsCDRhNGA0LDQtywg0L3QuCDRgdC/0LjRgdC60LAg0LDQstGC0L7RgNC+0LIuINCc0Ysg0L3QtSDQstC10YDQuNC8INCyINGB0LvRg9GH0LDQudC90YvQuSDQstGL0LHQvtGALiDQktGLINGB0LDQvNC4INGA0YPQutC+0LLQvtC00LjRgtC1INGB0LLQvtC10Lkg0YHRg9C00YzQsdC+0LkuINCf0YDQvtGB0YLQviDQv9GA0LjRgdC70YPRiNCw0LnRgtC10YHRjCDQuiDRgdC10LHQtS4g0JfQsNC00YPQvNCw0LnRgtC10YHRjCwg0Lgg0L7QtNC90L4g0LjQtyDRgdCw0LzRi9GFINCy0LTQvtGF0L3QvtCy0LvRj9GO0YnQuNGFINCy0YvRgdC60LDQt9GL0LLQsNC90LjQuSDRh9C10LvQvtCy0LXRh9C10YHRgtCy0LAg0L/QvtGB0LvRg9C20LjRgiDQt9C90LDQutC+0Lwg0LjQvNC10L3QvdC+INC00LvRjyDQktCw0YEuXHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8TGluayB0bz17J3YnfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIj7Qp9C40YLQsNGC0Yw8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGgyPk5vdCBmb3VuZDwvaDI+O1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIj5GQjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZlcnNlOiAnJywgcmVmZXJlbmNlOiAnJyB9O1xyXG4gICAgdGhpcy5nZXROZXh0ID0gdGhpcy5nZXROZXh0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFByZXYgPSB0aGlzLmdldFByZXYuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtaGFsZiBjb2x1bW4gdGV4dFwiPlxyXG4gICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ2ZXJzZVwiPnt0aGlzLnN0YXRlLnZlcnNlfTwvc3Bhbj5cclxuICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwicmVmZXJlbmNlXCI+ICh7dGhpcy5zdGF0ZS5yZWZlcmVuY2V9KTwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5nZXRQcmV2fSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCYWNrXCIvPlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuZ2V0TmV4dH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTmV4dFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRQcmV2KCkge1xyXG4gICAgLy8gVE9ETzogdXNlIFJlYWN0IFJvdXRlciBoaXN0b3J5IHRvIGltcGxlbWVudCBiYWNrIGFjdGlvblxyXG4gICAgaGlzdG9yeS5nb0JhY2soKTtcclxuICB9XHJcbiAgZ2V0TmV4dCgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xyXG4gICAgY29uc29sZS5sb2coaWQpO1xyXG4gICAgbGV0IHVybCA9IGlkID8gJy9hcGkvdjEuMC92ZXJzZS8nICsgaWQgOiAnL2FwaS92MS4wL3ZlcnNlLyc7XHJcbiAgICAkLmdldEpTT04odXJsLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgIHZlcnNlOiBkYXRhLnRleHQsXHJcbiAgICAgICAgcmVmZXJlbmNlOiBkYXRhLnJlZmVyZW5jZVxyXG4gICAgICB9KTtcclxuICAgICAgLy9sb2NhdGlvbi5oYXNoID0gZGF0YS5jaWQ7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8qJC5nZXRKU09OKCcvYXBpL3YxLjAvdmVyc2UnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIC8vaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJy92ZXJzZS8nICsgZGF0YS5jaWQpO1xyXG4gICAgICAvL2xvY2F0aW9uLmhhc2ggPSBcIiN2YWx1ZVwiO1xyXG4gICAgfS5iaW5kKHRoaXMpKTsqL1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0TmV4dCgpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluaywgSW5kZXhMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9oaXN0b3J5J1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBWZXJzZSBmcm9tICcuL2NvbXBvbmVudHMvVmVyc2UnO1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9jb21wb25lbnRzL1NoYXJlJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+IHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxIb21lIC8+fSA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyKChcclxuICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17QXBwfT5cclxuICAgICAgLy8gPEluZGV4Um91dGUgY29tcG9uZW50PXtWZXJzZX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9J3YnIGNvbXBvbmVudD17SG9tZX0+XHJcbiAgICAgICAgPFJvdXRlIHBhdGg9Jy92LzppZCcgY29tcG9uZW50PXtWZXJzZX0gLz5cclxuICAgICAgPC9Sb3V0ZT5cclxuICAgICAgPFJvdXRlIHBhdGg9JyonIGNvbXBvbmVudD17Tm90Rm91bmR9IC8+XHJcbiAgICA8L1JvdXRlPlxyXG4gIDwvUm91dGVyPlxyXG4pLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnYXBwJykpO1xyXG4iLCIvKipcbiAqIENvcHlyaWdodCAyMDE0LTIwMTUsIEZhY2Vib29rLCBJbmMuXG4gKiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFRoaXMgc291cmNlIGNvZGUgaXMgbGljZW5zZWQgdW5kZXIgdGhlIEJTRC1zdHlsZSBsaWNlbnNlIGZvdW5kIGluIHRoZVxuICogTElDRU5TRSBmaWxlIGluIHRoZSByb290IGRpcmVjdG9yeSBvZiB0aGlzIHNvdXJjZSB0cmVlLiBBbiBhZGRpdGlvbmFsIGdyYW50XG4gKiBvZiBwYXRlbnQgcmlnaHRzIGNhbiBiZSBmb3VuZCBpbiB0aGUgUEFURU5UUyBmaWxlIGluIHRoZSBzYW1lIGRpcmVjdG9yeS5cbiAqL1xuXG4ndXNlIHN0cmljdCc7XG5cbi8qKlxuICogU2ltaWxhciB0byBpbnZhcmlhbnQgYnV0IG9ubHkgbG9ncyBhIHdhcm5pbmcgaWYgdGhlIGNvbmRpdGlvbiBpcyBub3QgbWV0LlxuICogVGhpcyBjYW4gYmUgdXNlZCB0byBsb2cgaXNzdWVzIGluIGRldmVsb3BtZW50IGVudmlyb25tZW50cyBpbiBjcml0aWNhbFxuICogcGF0aHMuIFJlbW92aW5nIHRoZSBsb2dnaW5nIGNvZGUgZm9yIHByb2R1Y3Rpb24gZW52aXJvbm1lbnRzIHdpbGwga2VlcCB0aGVcbiAqIHNhbWUgbG9naWMgYW5kIGZvbGxvdyB0aGUgc2FtZSBjb2RlIHBhdGhzLlxuICovXG5cbnZhciB3YXJuaW5nID0gZnVuY3Rpb24oKSB7fTtcblxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgd2FybmluZyA9IGZ1bmN0aW9uKGNvbmRpdGlvbiwgZm9ybWF0LCBhcmdzKSB7XG4gICAgdmFyIGxlbiA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gICAgYXJncyA9IG5ldyBBcnJheShsZW4gPiAyID8gbGVuIC0gMiA6IDApO1xuICAgIGZvciAodmFyIGtleSA9IDI7IGtleSA8IGxlbjsga2V5KyspIHtcbiAgICAgIGFyZ3Nba2V5IC0gMl0gPSBhcmd1bWVudHNba2V5XTtcbiAgICB9XG4gICAgaWYgKGZvcm1hdCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdgd2FybmluZyhjb25kaXRpb24sIGZvcm1hdCwgLi4uYXJncylgIHJlcXVpcmVzIGEgd2FybmluZyAnICtcbiAgICAgICAgJ21lc3NhZ2UgYXJndW1lbnQnXG4gICAgICApO1xuICAgIH1cblxuICAgIGlmIChmb3JtYXQubGVuZ3RoIDwgMTAgfHwgKC9eW3NcXFddKiQvKS50ZXN0KGZvcm1hdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ1RoZSB3YXJuaW5nIGZvcm1hdCBzaG91bGQgYmUgYWJsZSB0byB1bmlxdWVseSBpZGVudGlmeSB0aGlzICcgK1xuICAgICAgICAnd2FybmluZy4gUGxlYXNlLCB1c2UgYSBtb3JlIGRlc2NyaXB0aXZlIGZvcm1hdCB0aGFuOiAnICsgZm9ybWF0XG4gICAgICApO1xuICAgIH1cblxuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICB2YXIgYXJnSW5kZXggPSAwO1xuICAgICAgdmFyIG1lc3NhZ2UgPSAnV2FybmluZzogJyArXG4gICAgICAgIGZvcm1hdC5yZXBsYWNlKC8lcy9nLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICByZXR1cm4gYXJnc1thcmdJbmRleCsrXTtcbiAgICAgICAgfSk7XG4gICAgICBpZiAodHlwZW9mIGNvbnNvbGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gICAgICB9XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIGVycm9yIHdhcyB0aHJvd24gYXMgYSBjb252ZW5pZW5jZSBzbyB0aGF0IHlvdSBjYW4gdXNlIHRoaXMgc3RhY2tcbiAgICAgICAgLy8gdG8gZmluZCB0aGUgY2FsbHNpdGUgdGhhdCBjYXVzZWQgdGhpcyB3YXJuaW5nIHRvIGZpcmUuXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgICAgIH0gY2F0Y2goeCkge31cbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gd2FybmluZztcbiIsIi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnB1c2guXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbnZhciBQVVNIID0gJ1BVU0gnO1xuXG5leHBvcnRzLlBVU0ggPSBQVVNIO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgYSBjYWxsIHRvIGhpc3RvcnkucmVwbGFjZS5cbiAqL1xudmFyIFJFUExBQ0UgPSAnUkVQTEFDRSc7XG5cbmV4cG9ydHMuUkVQTEFDRSA9IFJFUExBQ0U7XG4vKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBzb21lIG90aGVyIGFjdGlvbiBzdWNoXG4gKiBhcyB1c2luZyBhIGJyb3dzZXIncyBiYWNrL2ZvcndhcmQgYnV0dG9ucyBhbmQvb3IgbWFudWFsbHkgbWFuaXB1bGF0aW5nXG4gKiB0aGUgVVJMIGluIGEgYnJvd3NlcidzIGxvY2F0aW9uIGJhci4gVGhpcyBpcyB0aGUgZGVmYXVsdC5cbiAqXG4gKiBTZWUgaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL1dpbmRvd0V2ZW50SGFuZGxlcnMvb25wb3BzdGF0ZVxuICogZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gKi9cbnZhciBQT1AgPSAnUE9QJztcblxuZXhwb3J0cy5QT1AgPSBQT1A7XG5leHBvcnRzWydkZWZhdWx0J10gPSB7XG4gIFBVU0g6IFBVU0gsXG4gIFJFUExBQ0U6IFJFUExBQ0UsXG4gIFBPUDogUE9QXG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5sb29wQXN5bmMgPSBsb29wQXN5bmM7XG5cbmZ1bmN0aW9uIGxvb3BBc3luYyh0dXJucywgd29yaywgY2FsbGJhY2spIHtcbiAgdmFyIGN1cnJlbnRUdXJuID0gMDtcbiAgdmFyIGlzRG9uZSA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIGRvbmUoKSB7XG4gICAgaXNEb25lID0gdHJ1ZTtcbiAgICBjYWxsYmFjay5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9XG5cbiAgZnVuY3Rpb24gbmV4dCgpIHtcbiAgICBpZiAoaXNEb25lKSByZXR1cm47XG5cbiAgICBpZiAoY3VycmVudFR1cm4gPCB0dXJucykge1xuICAgICAgd29yay5jYWxsKHRoaXMsIGN1cnJlbnRUdXJuKyssIG5leHQsIGRvbmUpO1xuICAgIH0gZWxzZSB7XG4gICAgICBkb25lLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICB9XG5cbiAgbmV4dCgpO1xufSIsIi8qZXNsaW50LWRpc2FibGUgbm8tZW1wdHkgKi9cbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMuc2F2ZVN0YXRlID0gc2F2ZVN0YXRlO1xuZXhwb3J0cy5yZWFkU3RhdGUgPSByZWFkU3RhdGU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbnZhciBLZXlQcmVmaXggPSAnQEBIaXN0b3J5Lyc7XG52YXIgUXVvdGFFeGNlZWRlZEVycm9yID0gJ1F1b3RhRXhjZWVkZWRFcnJvcic7XG52YXIgU2VjdXJpdHlFcnJvciA9ICdTZWN1cml0eUVycm9yJztcblxuZnVuY3Rpb24gY3JlYXRlS2V5KGtleSkge1xuICByZXR1cm4gS2V5UHJlZml4ICsga2V5O1xufVxuXG5mdW5jdGlvbiBzYXZlU3RhdGUoa2V5LCBzdGF0ZSkge1xuICB0cnkge1xuICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKGNyZWF0ZUtleShrZXkpLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChlcnJvci5uYW1lID09PSBRdW90YUV4Y2VlZGVkRXJyb3IgJiYgd2luZG93LnNlc3Npb25TdG9yYWdlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgLy8gU2FmYXJpIFwicHJpdmF0ZSBtb2RlXCIgdGhyb3dzIFF1b3RhRXhjZWVkZWRFcnJvci5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gc2F2ZSBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBpbiBTYWZhcmkgcHJpdmF0ZSBtb2RlJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aHJvdyBlcnJvcjtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWFkU3RhdGUoa2V5KSB7XG4gIHZhciBqc29uID0gdW5kZWZpbmVkO1xuICB0cnkge1xuICAgIGpzb24gPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShjcmVhdGVLZXkoa2V5KSk7XG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgaWYgKGVycm9yLm5hbWUgPT09IFNlY3VyaXR5RXJyb3IpIHtcbiAgICAgIC8vIEJsb2NraW5nIGNvb2tpZXMgaW4gQ2hyb21lL0ZpcmVmb3gvU2FmYXJpIHRocm93cyBTZWN1cml0eUVycm9yIG9uIGFueVxuICAgICAgLy8gYXR0ZW1wdCB0byBhY2Nlc3Mgd2luZG93LnNlc3Npb25TdG9yYWdlLlxuICAgICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKGZhbHNlLCAnW2hpc3RvcnldIFVuYWJsZSB0byByZWFkIHN0YXRlOyBzZXNzaW9uU3RvcmFnZSBpcyBub3QgYXZhaWxhYmxlIGR1ZSB0byBzZWN1cml0eSBzZXR0aW5ncycpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gIH1cblxuICBpZiAoanNvbikge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gSlNPTi5wYXJzZShqc29uKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgLy8gSWdub3JlIGludmFsaWQgSlNPTi5cbiAgICB9XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLmFkZEV2ZW50TGlzdGVuZXIgPSBhZGRFdmVudExpc3RlbmVyO1xuZXhwb3J0cy5yZW1vdmVFdmVudExpc3RlbmVyID0gcmVtb3ZlRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMuZ2V0SGFzaFBhdGggPSBnZXRIYXNoUGF0aDtcbmV4cG9ydHMucmVwbGFjZUhhc2hQYXRoID0gcmVwbGFjZUhhc2hQYXRoO1xuZXhwb3J0cy5nZXRXaW5kb3dQYXRoID0gZ2V0V2luZG93UGF0aDtcbmV4cG9ydHMuZ28gPSBnbztcbmV4cG9ydHMuZ2V0VXNlckNvbmZpcm1hdGlvbiA9IGdldFVzZXJDb25maXJtYXRpb247XG5leHBvcnRzLnN1cHBvcnRzSGlzdG9yeSA9IHN1cHBvcnRzSGlzdG9yeTtcbmV4cG9ydHMuc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2ggPSBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaDtcblxuZnVuY3Rpb24gYWRkRXZlbnRMaXN0ZW5lcihub2RlLCBldmVudCwgbGlzdGVuZXIpIHtcbiAgaWYgKG5vZGUuYWRkRXZlbnRMaXN0ZW5lcikge1xuICAgIG5vZGUuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIsIGZhbHNlKTtcbiAgfSBlbHNlIHtcbiAgICBub2RlLmF0dGFjaEV2ZW50KCdvbicgKyBldmVudCwgbGlzdGVuZXIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5kZXRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRIYXNoUGF0aCgpIHtcbiAgLy8gV2UgY2FuJ3QgdXNlIHdpbmRvdy5sb2NhdGlvbi5oYXNoIGhlcmUgYmVjYXVzZSBpdCdzIG5vdFxuICAvLyBjb25zaXN0ZW50IGFjcm9zcyBicm93c2VycyAtIEZpcmVmb3ggd2lsbCBwcmUtZGVjb2RlIGl0IVxuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLmhyZWYuc3BsaXQoJyMnKVsxXSB8fCAnJztcbn1cblxuZnVuY3Rpb24gcmVwbGFjZUhhc2hQYXRoKHBhdGgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2Uod2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArICcjJyArIHBhdGgpO1xufVxuXG5mdW5jdGlvbiBnZXRXaW5kb3dQYXRoKCkge1xuICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lICsgd2luZG93LmxvY2F0aW9uLnNlYXJjaCArIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xufVxuXG5mdW5jdGlvbiBnbyhuKSB7XG4gIGlmIChuKSB3aW5kb3cuaGlzdG9yeS5nbyhuKTtcbn1cblxuZnVuY3Rpb24gZ2V0VXNlckNvbmZpcm1hdGlvbihtZXNzYWdlLCBjYWxsYmFjaykge1xuICBjYWxsYmFjayh3aW5kb3cuY29uZmlybShtZXNzYWdlKSk7XG59XG5cbi8qKlxuICogUmV0dXJucyB0cnVlIGlmIHRoZSBIVE1MNSBoaXN0b3J5IEFQSSBpcyBzdXBwb3J0ZWQuIFRha2VuIGZyb20gTW9kZXJuaXpyLlxuICpcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL0xJQ0VOU0VcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9Nb2Rlcm5penIvTW9kZXJuaXpyL2Jsb2IvbWFzdGVyL2ZlYXR1cmUtZGV0ZWN0cy9oaXN0b3J5LmpzXG4gKiBjaGFuZ2VkIHRvIGF2b2lkIGZhbHNlIG5lZ2F0aXZlcyBmb3IgV2luZG93cyBQaG9uZXM6IGh0dHBzOi8vZ2l0aHViLmNvbS9yYWNrdC9yZWFjdC1yb3V0ZXIvaXNzdWVzLzU4NlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzSGlzdG9yeSgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgaWYgKCh1YS5pbmRleE9mKCdBbmRyb2lkIDIuJykgIT09IC0xIHx8IHVhLmluZGV4T2YoJ0FuZHJvaWQgNC4wJykgIT09IC0xKSAmJiB1YS5pbmRleE9mKCdNb2JpbGUgU2FmYXJpJykgIT09IC0xICYmIHVhLmluZGV4T2YoJ0Nocm9tZScpID09PSAtMSAmJiB1YS5pbmRleE9mKCdXaW5kb3dzIFBob25lJykgPT09IC0xKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vIEZJWE1FOiBXb3JrIGFyb3VuZCBvdXIgYnJvd3NlciBoaXN0b3J5IG5vdCB3b3JraW5nIGNvcnJlY3RseSBvbiBDaHJvbWVcbiAgLy8gaU9TOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy8yNTY1XG4gIGlmICh1YS5pbmRleE9mKCdDcmlPUycpICE9PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gd2luZG93Lmhpc3RvcnkgJiYgJ3B1c2hTdGF0ZScgaW4gd2luZG93Lmhpc3Rvcnk7XG59XG5cbi8qKlxuICogUmV0dXJucyBmYWxzZSBpZiB1c2luZyBnbyhuKSB3aXRoIGhhc2ggaGlzdG9yeSBjYXVzZXMgYSBmdWxsIHBhZ2UgcmVsb2FkLlxuICovXG5cbmZ1bmN0aW9uIHN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoKCkge1xuICB2YXIgdWEgPSBuYXZpZ2F0b3IudXNlckFnZW50O1xuICByZXR1cm4gdWEuaW5kZXhPZignRmlyZWZveCcpID09PSAtMTtcbn0iLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgY2FuVXNlRE9NID0gISEodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93LmRvY3VtZW50ICYmIHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbmV4cG9ydHMuY2FuVXNlRE9NID0gY2FuVXNlRE9NOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9FeGVjdXRpb25FbnZpcm9ubWVudCA9IHJlcXVpcmUoJy4vRXhlY3V0aW9uRW52aXJvbm1lbnQnKTtcblxudmFyIF9ET01VdGlscyA9IHJlcXVpcmUoJy4vRE9NVXRpbHMnKTtcblxudmFyIF9ET01TdGF0ZVN0b3JhZ2UgPSByZXF1aXJlKCcuL0RPTVN0YXRlU3RvcmFnZScpO1xuXG52YXIgX2NyZWF0ZURPTUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZURPTUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZURPTUhpc3RvcnkpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbi8qKlxuICogQ3JlYXRlcyBhbmQgcmV0dXJucyBhIGhpc3Rvcnkgb2JqZWN0IHRoYXQgdXNlcyBIVE1MNSdzIGhpc3RvcnkgQVBJXG4gKiAocHVzaFN0YXRlLCByZXBsYWNlU3RhdGUsIGFuZCB0aGUgcG9wc3RhdGUgZXZlbnQpIHRvIG1hbmFnZSBoaXN0b3J5LlxuICogVGhpcyBpcyB0aGUgcmVjb21tZW5kZWQgbWV0aG9kIG9mIG1hbmFnaW5nIGhpc3RvcnkgaW4gYnJvd3NlcnMgYmVjYXVzZVxuICogaXQgcHJvdmlkZXMgdGhlIGNsZWFuZXN0IFVSTHMuXG4gKlxuICogTm90ZTogSW4gYnJvd3NlcnMgdGhhdCBkbyBub3Qgc3VwcG9ydCB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgZnVsbFxuICogcGFnZSByZWxvYWRzIHdpbGwgYmUgdXNlZCB0byBwcmVzZXJ2ZSBVUkxzLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCcm93c2VySGlzdG9yeSgpIHtcbiAgdmFyIG9wdGlvbnMgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyB7fSA6IGFyZ3VtZW50c1swXTtcblxuICAhX0V4ZWN1dGlvbkVudmlyb25tZW50LmNhblVzZURPTSA/IHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlLCAnQnJvd3NlciBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgZm9yY2VSZWZyZXNoID0gb3B0aW9ucy5mb3JjZVJlZnJlc2g7XG5cbiAgdmFyIGlzU3VwcG9ydGVkID0gX0RPTVV0aWxzLnN1cHBvcnRzSGlzdG9yeSgpO1xuICB2YXIgdXNlUmVmcmVzaCA9ICFpc1N1cHBvcnRlZCB8fCBmb3JjZVJlZnJlc2g7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudExvY2F0aW9uKGhpc3RvcnlTdGF0ZSkge1xuICAgIGhpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZSB8fCB3aW5kb3cuaGlzdG9yeS5zdGF0ZSB8fCB7fTtcblxuICAgIHZhciBwYXRoID0gX0RPTVV0aWxzLmdldFdpbmRvd1BhdGgoKTtcbiAgICB2YXIgX2hpc3RvcnlTdGF0ZSA9IGhpc3RvcnlTdGF0ZTtcbiAgICB2YXIga2V5ID0gX2hpc3RvcnlTdGF0ZS5rZXk7XG5cbiAgICB2YXIgc3RhdGUgPSB1bmRlZmluZWQ7XG4gICAgaWYgKGtleSkge1xuICAgICAgc3RhdGUgPSBfRE9NU3RhdGVTdG9yYWdlLnJlYWRTdGF0ZShrZXkpO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdGF0ZSA9IG51bGw7XG4gICAgICBrZXkgPSBoaXN0b3J5LmNyZWF0ZUtleSgpO1xuXG4gICAgICBpZiAoaXNTdXBwb3J0ZWQpIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShfZXh0ZW5kcyh7fSwgaGlzdG9yeVN0YXRlLCB7IGtleToga2V5IH0pLCBudWxsLCBwYXRoKTtcbiAgICB9XG5cbiAgICB2YXIgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmV0dXJuIGhpc3RvcnkuY3JlYXRlTG9jYXRpb24oX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBzdGF0ZSB9KSwgdW5kZWZpbmVkLCBrZXkpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKF9yZWYpIHtcbiAgICB2YXIgdHJhbnNpdGlvblRvID0gX3JlZi50cmFuc2l0aW9uVG87XG5cbiAgICBmdW5jdGlvbiBwb3BTdGF0ZUxpc3RlbmVyKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQuc3RhdGUgPT09IHVuZGVmaW5lZCkgcmV0dXJuOyAvLyBJZ25vcmUgZXh0cmFuZW91cyBwb3BzdGF0ZSBldmVudHMgaW4gV2ViS2l0LlxuXG4gICAgICB0cmFuc2l0aW9uVG8oZ2V0Q3VycmVudExvY2F0aW9uKGV2ZW50LnN0YXRlKSk7XG4gICAgfVxuXG4gICAgX0RPTVV0aWxzLmFkZEV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBfRE9NVXRpbHMucmVtb3ZlRXZlbnRMaXN0ZW5lcih3aW5kb3csICdwb3BzdGF0ZScsIHBvcFN0YXRlTGlzdGVuZXIpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBmaW5pc2hUcmFuc2l0aW9uKGxvY2F0aW9uKSB7XG4gICAgdmFyIGJhc2VuYW1lID0gbG9jYXRpb24uYmFzZW5hbWU7XG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG4gICAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGU7XG4gICAgdmFyIGFjdGlvbiA9IGxvY2F0aW9uLmFjdGlvbjtcbiAgICB2YXIga2V5ID0gbG9jYXRpb24ua2V5O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZShrZXksIHN0YXRlKTtcblxuICAgIHZhciBwYXRoID0gKGJhc2VuYW1lIHx8ICcnKSArIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaDtcbiAgICB2YXIgaGlzdG9yeVN0YXRlID0ge1xuICAgICAga2V5OiBrZXlcbiAgICB9O1xuXG4gICAgaWYgKGFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBwYXRoO1xuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIFByZXZlbnQgbG9jYXRpb24gdXBkYXRlLlxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB3aW5kb3cuaGlzdG9yeS5wdXNoU3RhdGUoaGlzdG9yeVN0YXRlLCBudWxsLCBwYXRoKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBSRVBMQUNFXG4gICAgICBpZiAodXNlUmVmcmVzaCkge1xuICAgICAgICB3aW5kb3cubG9jYXRpb24ucmVwbGFjZShwYXRoKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucmVwbGFjZVN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9XG4gIH1cblxuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVET01IaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHt9LCBvcHRpb25zLCB7XG4gICAgZ2V0Q3VycmVudExvY2F0aW9uOiBnZXRDdXJyZW50TG9jYXRpb24sXG4gICAgZmluaXNoVHJhbnNpdGlvbjogZmluaXNoVHJhbnNpdGlvbixcbiAgICBzYXZlU3RhdGU6IF9ET01TdGF0ZVN0b3JhZ2Uuc2F2ZVN0YXRlXG4gIH0pKTtcblxuICB2YXIgbGlzdGVuZXJDb3VudCA9IDAsXG4gICAgICBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUobGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuQmVmb3JlKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBsaXN0ZW4obGlzdGVuZXIpIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIHZhciB1bmxpc3RlbiA9IGhpc3RvcnkubGlzdGVuKGxpc3RlbmVyKTtcblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICB1bmxpc3RlbigpO1xuXG4gICAgICBpZiAoLS1saXN0ZW5lckNvdW50ID09PSAwKSBzdG9wUG9wU3RhdGVMaXN0ZW5lcigpO1xuICAgIH07XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGlmICgrK2xpc3RlbmVyQ291bnQgPT09IDEpIHN0b3BQb3BTdGF0ZUxpc3RlbmVyID0gc3RhcnRQb3BTdGF0ZUxpc3RlbmVyKGhpc3RvcnkpO1xuXG4gICAgaGlzdG9yeS5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2soaG9vaykge1xuICAgIGhpc3RvcnkudW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spO1xuXG4gICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgfVxuXG4gIHJldHVybiBfZXh0ZW5kcyh7fSwgaGlzdG9yeSwge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiB1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2tcbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUJyb3dzZXJIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfaW52YXJpYW50ID0gcmVxdWlyZSgnaW52YXJpYW50Jyk7XG5cbnZhciBfaW52YXJpYW50MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2ludmFyaWFudCk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfY3JlYXRlSGlzdG9yeSA9IHJlcXVpcmUoJy4vY3JlYXRlSGlzdG9yeScpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlSGlzdG9yeSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZURPTUhpc3Rvcnkob3B0aW9ucykge1xuICB2YXIgaGlzdG9yeSA9IF9jcmVhdGVIaXN0b3J5MlsnZGVmYXVsdCddKF9leHRlbmRzKHtcbiAgICBnZXRVc2VyQ29uZmlybWF0aW9uOiBfRE9NVXRpbHMuZ2V0VXNlckNvbmZpcm1hdGlvblxuICB9LCBvcHRpb25zLCB7XG4gICAgZ286IF9ET01VdGlscy5nb1xuICB9KSk7XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0RPTSBoaXN0b3J5IG5lZWRzIGEgRE9NJykgOiBfaW52YXJpYW50MlsnZGVmYXVsdCddKGZhbHNlKSA6IHVuZGVmaW5lZDtcblxuICAgIHJldHVybiBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW46IGxpc3RlblxuICB9KTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlRE9NSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2RlZXBFcXVhbCA9IHJlcXVpcmUoJ2RlZXAtZXF1YWwnKTtcblxudmFyIF9kZWVwRXF1YWwyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfZGVlcEVxdWFsKTtcblxudmFyIF9Bc3luY1V0aWxzID0gcmVxdWlyZSgnLi9Bc3luY1V0aWxzJyk7XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX2NyZWF0ZUxvY2F0aW9uMiA9IHJlcXVpcmUoJy4vY3JlYXRlTG9jYXRpb24nKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjMgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVMb2NhdGlvbjIpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rID0gcmVxdWlyZSgnLi9ydW5UcmFuc2l0aW9uSG9vaycpO1xuXG52YXIgX3J1blRyYW5zaXRpb25Ib29rMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3J1blRyYW5zaXRpb25Ib29rKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG52YXIgX2RlcHJlY2F0ZSA9IHJlcXVpcmUoJy4vZGVwcmVjYXRlJyk7XG5cbnZhciBfZGVwcmVjYXRlMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlcHJlY2F0ZSk7XG5cbmZ1bmN0aW9uIGNyZWF0ZVJhbmRvbUtleShsZW5ndGgpIHtcbiAgcmV0dXJuIE1hdGgucmFuZG9tKCkudG9TdHJpbmcoMzYpLnN1YnN0cigyLCBsZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBsb2NhdGlvbnNBcmVFcXVhbChhLCBiKSB7XG4gIHJldHVybiBhLnBhdGhuYW1lID09PSBiLnBhdGhuYW1lICYmIGEuc2VhcmNoID09PSBiLnNlYXJjaCAmJlxuICAvL2EuYWN0aW9uID09PSBiLmFjdGlvbiAmJiAvLyBEaWZmZXJlbnQgYWN0aW9uICE9PSBsb2NhdGlvbiBjaGFuZ2UuXG4gIGEua2V5ID09PSBiLmtleSAmJiBfZGVlcEVxdWFsMlsnZGVmYXVsdCddKGEuc3RhdGUsIGIuc3RhdGUpO1xufVxuXG52YXIgRGVmYXVsdEtleUxlbmd0aCA9IDY7XG5cbmZ1bmN0aW9uIGNyZWF0ZUhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG4gIHZhciBnZXRDdXJyZW50TG9jYXRpb24gPSBvcHRpb25zLmdldEN1cnJlbnRMb2NhdGlvbjtcbiAgdmFyIGZpbmlzaFRyYW5zaXRpb24gPSBvcHRpb25zLmZpbmlzaFRyYW5zaXRpb247XG4gIHZhciBzYXZlU3RhdGUgPSBvcHRpb25zLnNhdmVTdGF0ZTtcbiAgdmFyIGdvID0gb3B0aW9ucy5nbztcbiAgdmFyIGtleUxlbmd0aCA9IG9wdGlvbnMua2V5TGVuZ3RoO1xuICB2YXIgZ2V0VXNlckNvbmZpcm1hdGlvbiA9IG9wdGlvbnMuZ2V0VXNlckNvbmZpcm1hdGlvbjtcblxuICBpZiAodHlwZW9mIGtleUxlbmd0aCAhPT0gJ251bWJlcicpIGtleUxlbmd0aCA9IERlZmF1bHRLZXlMZW5ndGg7XG5cbiAgdmFyIHRyYW5zaXRpb25Ib29rcyA9IFtdO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbkJlZm9yZShob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICB2YXIgYWxsS2V5cyA9IFtdO1xuICB2YXIgY2hhbmdlTGlzdGVuZXJzID0gW107XG4gIHZhciBsb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiBnZXRDdXJyZW50KCkge1xuICAgIGlmIChwZW5kaW5nTG9jYXRpb24gJiYgcGVuZGluZ0xvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKHBlbmRpbmdMb2NhdGlvbi5rZXkpO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24pIHtcbiAgICAgIHJldHVybiBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHVwZGF0ZUxvY2F0aW9uKG5ld0xvY2F0aW9uKSB7XG4gICAgdmFyIGN1cnJlbnQgPSBnZXRDdXJyZW50KCk7XG5cbiAgICBsb2NhdGlvbiA9IG5ld0xvY2F0aW9uO1xuXG4gICAgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUFVTSCkge1xuICAgICAgYWxsS2V5cyA9IFtdLmNvbmNhdChhbGxLZXlzLnNsaWNlKDAsIGN1cnJlbnQgKyAxKSwgW2xvY2F0aW9uLmtleV0pO1xuICAgIH0gZWxzZSBpZiAobG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5SRVBMQUNFKSB7XG4gICAgICBhbGxLZXlzW2N1cnJlbnRdID0gbG9jYXRpb24ua2V5O1xuICAgIH1cblxuICAgIGNoYW5nZUxpc3RlbmVycy5mb3JFYWNoKGZ1bmN0aW9uIChsaXN0ZW5lcikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0pO1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgY2hhbmdlTGlzdGVuZXJzLnB1c2gobGlzdGVuZXIpO1xuXG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICBsaXN0ZW5lcihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBfbG9jYXRpb24gPSBnZXRDdXJyZW50TG9jYXRpb24oKTtcbiAgICAgIGFsbEtleXMgPSBbX2xvY2F0aW9uLmtleV07XG4gICAgICB1cGRhdGVMb2NhdGlvbihfbG9jYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjaGFuZ2VMaXN0ZW5lcnMgPSBjaGFuZ2VMaXN0ZW5lcnMuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgIHJldHVybiBpdGVtICE9PSBsaXN0ZW5lcjtcbiAgICAgIH0pO1xuICAgIH07XG4gIH1cblxuICBmdW5jdGlvbiBjb25maXJtVHJhbnNpdGlvblRvKGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICAgIF9Bc3luY1V0aWxzLmxvb3BBc3luYyh0cmFuc2l0aW9uSG9va3MubGVuZ3RoLCBmdW5jdGlvbiAoaW5kZXgsIG5leHQsIGRvbmUpIHtcbiAgICAgIF9ydW5UcmFuc2l0aW9uSG9vazJbJ2RlZmF1bHQnXSh0cmFuc2l0aW9uSG9va3NbaW5kZXhdLCBsb2NhdGlvbiwgZnVuY3Rpb24gKHJlc3VsdCkge1xuICAgICAgICBpZiAocmVzdWx0ICE9IG51bGwpIHtcbiAgICAgICAgICBkb25lKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbmV4dCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9LCBmdW5jdGlvbiAobWVzc2FnZSkge1xuICAgICAgaWYgKGdldFVzZXJDb25maXJtYXRpb24gJiYgdHlwZW9mIG1lc3NhZ2UgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICAgICAgY2FsbGJhY2sob2sgIT09IGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjYWxsYmFjayhtZXNzYWdlICE9PSBmYWxzZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICB2YXIgcGVuZGluZ0xvY2F0aW9uID0gdW5kZWZpbmVkO1xuXG4gIGZ1bmN0aW9uIHRyYW5zaXRpb25UbyhuZXh0TG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24gJiYgbG9jYXRpb25zQXJlRXF1YWwobG9jYXRpb24sIG5leHRMb2NhdGlvbikpIHJldHVybjsgLy8gTm90aGluZyB0byBkby5cblxuICAgIHBlbmRpbmdMb2NhdGlvbiA9IG5leHRMb2NhdGlvbjtcblxuICAgIGNvbmZpcm1UcmFuc2l0aW9uVG8obmV4dExvY2F0aW9uLCBmdW5jdGlvbiAob2spIHtcbiAgICAgIGlmIChwZW5kaW5nTG9jYXRpb24gIT09IG5leHRMb2NhdGlvbikgcmV0dXJuOyAvLyBUcmFuc2l0aW9uIHdhcyBpbnRlcnJ1cHRlZC5cblxuICAgICAgaWYgKG9rKSB7XG4gICAgICAgIC8vIHRyZWF0IFBVU0ggdG8gY3VycmVudCBwYXRoIGxpa2UgUkVQTEFDRSB0byBiZSBjb25zaXN0ZW50IHdpdGggYnJvd3NlcnNcbiAgICAgICAgaWYgKG5leHRMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgICAgICB2YXIgcHJldlBhdGggPSBjcmVhdGVQYXRoKGxvY2F0aW9uKTtcbiAgICAgICAgICB2YXIgbmV4dFBhdGggPSBjcmVhdGVQYXRoKG5leHRMb2NhdGlvbik7XG5cbiAgICAgICAgICBpZiAobmV4dFBhdGggPT09IHByZXZQYXRoKSBuZXh0TG9jYXRpb24uYWN0aW9uID0gX0FjdGlvbnMuUkVQTEFDRTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmaW5pc2hUcmFuc2l0aW9uKG5leHRMb2NhdGlvbikgIT09IGZhbHNlKSB1cGRhdGVMb2NhdGlvbihuZXh0TG9jYXRpb24pO1xuICAgICAgfSBlbHNlIGlmIChsb2NhdGlvbiAmJiBuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QT1ApIHtcbiAgICAgICAgdmFyIHByZXZJbmRleCA9IGFsbEtleXMuaW5kZXhPZihsb2NhdGlvbi5rZXkpO1xuICAgICAgICB2YXIgbmV4dEluZGV4ID0gYWxsS2V5cy5pbmRleE9mKG5leHRMb2NhdGlvbi5rZXkpO1xuXG4gICAgICAgIGlmIChwcmV2SW5kZXggIT09IC0xICYmIG5leHRJbmRleCAhPT0gLTEpIGdvKHByZXZJbmRleCAtIG5leHRJbmRleCk7IC8vIFJlc3RvcmUgdGhlIFVSTC5cbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHB1c2gobG9jYXRpb24pIHtcbiAgICB0cmFuc2l0aW9uVG8oY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIF9BY3Rpb25zLlBVU0gsIGNyZWF0ZUtleSgpKSk7XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5SRVBMQUNFLCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gZ29CYWNrKCkge1xuICAgIGdvKC0xKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvRm9yd2FyZCgpIHtcbiAgICBnbygxKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUtleSgpIHtcbiAgICByZXR1cm4gY3JlYXRlUmFuZG9tS2V5KGtleUxlbmd0aCk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVQYXRoKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uID09IG51bGwgfHwgdHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgcmV0dXJuIGxvY2F0aW9uO1xuXG4gICAgdmFyIHBhdGhuYW1lID0gbG9jYXRpb24ucGF0aG5hbWU7XG4gICAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaDtcbiAgICB2YXIgaGFzaCA9IGxvY2F0aW9uLmhhc2g7XG5cbiAgICB2YXIgcmVzdWx0ID0gcGF0aG5hbWU7XG5cbiAgICBpZiAoc2VhcmNoKSByZXN1bHQgKz0gc2VhcmNoO1xuXG4gICAgaWYgKGhhc2gpIHJlc3VsdCArPSBoYXNoO1xuXG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNyZWF0ZUhyZWYobG9jYXRpb24pIHtcbiAgICByZXR1cm4gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgYWN0aW9uKSB7XG4gICAgdmFyIGtleSA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMiB8fCBhcmd1bWVudHNbMl0gPT09IHVuZGVmaW5lZCA/IGNyZWF0ZUtleSgpIDogYXJndW1lbnRzWzJdO1xuXG4gICAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgICAvL3dhcm5pbmcoXG4gICAgICAvLyAgZmFsc2UsXG4gICAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgICAgLy8gICdsb2NhdGlvbiBkZXNjcmlwdG9yIGluc3RlYWQnXG4gICAgICAvLylcblxuICAgICAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICAgIGFjdGlvbiA9IGtleTtcbiAgICAgIGtleSA9IGFyZ3VtZW50c1szXSB8fCBjcmVhdGVLZXkoKTtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NyZWF0ZUxvY2F0aW9uM1snZGVmYXVsdCddKGxvY2F0aW9uLCBhY3Rpb24sIGtleSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHNldFN0YXRlKHN0YXRlKSB7XG4gICAgaWYgKGxvY2F0aW9uKSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSk7XG4gICAgICB1cGRhdGVMb2NhdGlvbihsb2NhdGlvbik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUxvY2F0aW9uU3RhdGUoZ2V0Q3VycmVudExvY2F0aW9uKCksIHN0YXRlKTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvblN0YXRlKGxvY2F0aW9uLCBzdGF0ZSkge1xuICAgIGxvY2F0aW9uLnN0YXRlID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLnN0YXRlLCBzdGF0ZSk7XG4gICAgc2F2ZVN0YXRlKGxvY2F0aW9uLmtleSwgbG9jYXRpb24uc3RhdGUpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAodHJhbnNpdGlvbkhvb2tzLmluZGV4T2YoaG9vaykgPT09IC0xKSB0cmFuc2l0aW9uSG9va3MucHVzaChob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICB0cmFuc2l0aW9uSG9va3MgPSB0cmFuc2l0aW9uSG9va3MuZmlsdGVyKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICByZXR1cm4gaXRlbSAhPT0gaG9vaztcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcHVzaFN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICBwdXNoKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVwbGFjZVN0YXRlKHN0YXRlLCBwYXRoKSB7XG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJykgcGF0aCA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10ocGF0aCk7XG5cbiAgICByZXBsYWNlKF9leHRlbmRzKHsgc3RhdGU6IHN0YXRlIH0sIHBhdGgpKTtcbiAgfVxuXG4gIHJldHVybiB7XG4gICAgbGlzdGVuQmVmb3JlOiBsaXN0ZW5CZWZvcmUsXG4gICAgbGlzdGVuOiBsaXN0ZW4sXG4gICAgdHJhbnNpdGlvblRvOiB0cmFuc2l0aW9uVG8sXG4gICAgcHVzaDogcHVzaCxcbiAgICByZXBsYWNlOiByZXBsYWNlLFxuICAgIGdvOiBnbyxcbiAgICBnb0JhY2s6IGdvQmFjayxcbiAgICBnb0ZvcndhcmQ6IGdvRm9yd2FyZCxcbiAgICBjcmVhdGVLZXk6IGNyZWF0ZUtleSxcbiAgICBjcmVhdGVQYXRoOiBjcmVhdGVQYXRoLFxuICAgIGNyZWF0ZUhyZWY6IGNyZWF0ZUhyZWYsXG4gICAgY3JlYXRlTG9jYXRpb246IGNyZWF0ZUxvY2F0aW9uLFxuXG4gICAgc2V0U3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10oc2V0U3RhdGUsICdzZXRTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgbG9jYXRpb24ua2V5IHRvIHNhdmUgc3RhdGUgaW5zdGVhZCcpLFxuICAgIHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2s6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3JlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vaywgJ3VucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayBpcyBkZXByZWNhdGVkOyB1c2UgdGhlIGNhbGxiYWNrIHJldHVybmVkIGZyb20gbGlzdGVuQmVmb3JlIGluc3RlYWQnKSxcbiAgICBwdXNoU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocHVzaFN0YXRlLCAncHVzaFN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSBwdXNoIGluc3RlYWQnKSxcbiAgICByZXBsYWNlU3RhdGU6IF9kZXByZWNhdGUyWydkZWZhdWx0J10ocmVwbGFjZVN0YXRlLCAncmVwbGFjZVN0YXRlIGlzIGRlcHJlY2F0ZWQ7IHVzZSByZXBsYWNlIGluc3RlYWQnKVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVIaXN0b3J5O1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG52YXIgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uICh0YXJnZXQpIHsgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHsgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTsgZm9yICh2YXIga2V5IGluIHNvdXJjZSkgeyBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgeyB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldOyB9IH0gfSByZXR1cm4gdGFyZ2V0OyB9O1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfQWN0aW9ucyA9IHJlcXVpcmUoJy4vQWN0aW9ucycpO1xuXG52YXIgX3BhcnNlUGF0aCA9IHJlcXVpcmUoJy4vcGFyc2VQYXRoJyk7XG5cbnZhciBfcGFyc2VQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3BhcnNlUGF0aCk7XG5cbmZ1bmN0aW9uIGNyZWF0ZUxvY2F0aW9uKCkge1xuICB2YXIgbG9jYXRpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDAgfHwgYXJndW1lbnRzWzBdID09PSB1bmRlZmluZWQgPyAnLycgOiBhcmd1bWVudHNbMF07XG4gIHZhciBhY3Rpb24gPSBhcmd1bWVudHMubGVuZ3RoIDw9IDEgfHwgYXJndW1lbnRzWzFdID09PSB1bmRlZmluZWQgPyBfQWN0aW9ucy5QT1AgOiBhcmd1bWVudHNbMV07XG4gIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBudWxsIDogYXJndW1lbnRzWzJdO1xuXG4gIHZhciBfZm91cnRoQXJnID0gYXJndW1lbnRzLmxlbmd0aCA8PSAzIHx8IGFyZ3VtZW50c1szXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1szXTtcblxuICBpZiAodHlwZW9mIGxvY2F0aW9uID09PSAnc3RyaW5nJykgbG9jYXRpb24gPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKGxvY2F0aW9uKTtcblxuICBpZiAodHlwZW9mIGFjdGlvbiA9PT0gJ29iamVjdCcpIHtcbiAgICAvL3dhcm5pbmcoXG4gICAgLy8gIGZhbHNlLFxuICAgIC8vICAnVGhlIHN0YXRlICgybmQpIGFyZ3VtZW50IHRvIGNyZWF0ZUxvY2F0aW9uIGlzIGRlcHJlY2F0ZWQ7IHVzZSBhICcgK1xuICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgIC8vKVxuXG4gICAgbG9jYXRpb24gPSBfZXh0ZW5kcyh7fSwgbG9jYXRpb24sIHsgc3RhdGU6IGFjdGlvbiB9KTtcblxuICAgIGFjdGlvbiA9IGtleSB8fCBfQWN0aW9ucy5QT1A7XG4gICAga2V5ID0gX2ZvdXJ0aEFyZztcbiAgfVxuXG4gIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lIHx8ICcvJztcbiAgdmFyIHNlYXJjaCA9IGxvY2F0aW9uLnNlYXJjaCB8fCAnJztcbiAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoIHx8ICcnO1xuICB2YXIgc3RhdGUgPSBsb2NhdGlvbi5zdGF0ZSB8fCBudWxsO1xuXG4gIHJldHVybiB7XG4gICAgcGF0aG5hbWU6IHBhdGhuYW1lLFxuICAgIHNlYXJjaDogc2VhcmNoLFxuICAgIGhhc2g6IGhhc2gsXG4gICAgc3RhdGU6IHN0YXRlLFxuICAgIGFjdGlvbjogYWN0aW9uLFxuICAgIGtleToga2V5XG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZUxvY2F0aW9uO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwiLy9pbXBvcnQgd2FybmluZyBmcm9tICd3YXJuaW5nJ1xuXG5cInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGRlcHJlY2F0ZShmbikge1xuICByZXR1cm4gZm47XG4gIC8vcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgLy8gIHdhcm5pbmcoZmFsc2UsICdbaGlzdG9yeV0gJyArIG1lc3NhZ2UpXG4gIC8vICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKVxuICAvL31cbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBkZXByZWNhdGU7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZnVuY3Rpb24gZXh0cmFjdFBhdGgoc3RyaW5nKSB7XG4gIHZhciBtYXRjaCA9IHN0cmluZy5tYXRjaCgvXmh0dHBzPzpcXC9cXC9bXlxcL10qLyk7XG5cbiAgaWYgKG1hdGNoID09IG51bGwpIHJldHVybiBzdHJpbmc7XG5cbiAgcmV0dXJuIHN0cmluZy5zdWJzdHJpbmcobWF0Y2hbMF0ubGVuZ3RoKTtcbn1cblxuZXhwb3J0c1tcImRlZmF1bHRcIl0gPSBleHRyYWN0UGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1tcImRlZmF1bHRcIl07IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgX2V4dHJhY3RQYXRoID0gcmVxdWlyZSgnLi9leHRyYWN0UGF0aCcpO1xuXG52YXIgX2V4dHJhY3RQYXRoMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2V4dHJhY3RQYXRoKTtcblxuZnVuY3Rpb24gcGFyc2VQYXRoKHBhdGgpIHtcbiAgdmFyIHBhdGhuYW1lID0gX2V4dHJhY3RQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuICB2YXIgc2VhcmNoID0gJyc7XG4gIHZhciBoYXNoID0gJyc7XG5cbiAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHBhdGggPT09IHBhdGhuYW1lLCAnQSBwYXRoIG11c3QgYmUgcGF0aG5hbWUgKyBzZWFyY2ggKyBoYXNoIG9ubHksIG5vdCBhIGZ1bGx5IHF1YWxpZmllZCBVUkwgbGlrZSBcIiVzXCInLCBwYXRoKSA6IHVuZGVmaW5lZDtcblxuICB2YXIgaGFzaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignIycpO1xuICBpZiAoaGFzaEluZGV4ICE9PSAtMSkge1xuICAgIGhhc2ggPSBwYXRobmFtZS5zdWJzdHJpbmcoaGFzaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBoYXNoSW5kZXgpO1xuICB9XG5cbiAgdmFyIHNlYXJjaEluZGV4ID0gcGF0aG5hbWUuaW5kZXhPZignPycpO1xuICBpZiAoc2VhcmNoSW5kZXggIT09IC0xKSB7XG4gICAgc2VhcmNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKHNlYXJjaEluZGV4KTtcbiAgICBwYXRobmFtZSA9IHBhdGhuYW1lLnN1YnN0cmluZygwLCBzZWFyY2hJbmRleCk7XG4gIH1cblxuICBpZiAocGF0aG5hbWUgPT09ICcnKSBwYXRobmFtZSA9ICcvJztcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoXG4gIH07XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHBhcnNlUGF0aDtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxuZnVuY3Rpb24gcnVuVHJhbnNpdGlvbkhvb2soaG9vaywgbG9jYXRpb24sIGNhbGxiYWNrKSB7XG4gIHZhciByZXN1bHQgPSBob29rKGxvY2F0aW9uLCBjYWxsYmFjayk7XG5cbiAgaWYgKGhvb2subGVuZ3RoIDwgMikge1xuICAgIC8vIEFzc3VtZSB0aGUgaG9vayBydW5zIHN5bmNocm9ub3VzbHkgYW5kIGF1dG9tYXRpY2FsbHlcbiAgICAvLyBjYWxsIHRoZSBjYWxsYmFjayB3aXRoIHRoZSByZXR1cm4gdmFsdWUuXG4gICAgY2FsbGJhY2socmVzdWx0KTtcbiAgfSBlbHNlIHtcbiAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10ocmVzdWx0ID09PSB1bmRlZmluZWQsICdZb3Ugc2hvdWxkIG5vdCBcInJldHVyblwiIGluIGEgdHJhbnNpdGlvbiBob29rIHdpdGggYSBjYWxsYmFjayBhcmd1bWVudDsgY2FsbCB0aGUgY2FsbGJhY2sgaW5zdGVhZCcpIDogdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IHJ1blRyYW5zaXRpb25Ib29rO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzWydkZWZhdWx0J107IiwidmFyIHBTbGljZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZTtcbnZhciBvYmplY3RLZXlzID0gcmVxdWlyZSgnLi9saWIva2V5cy5qcycpO1xudmFyIGlzQXJndW1lbnRzID0gcmVxdWlyZSgnLi9saWIvaXNfYXJndW1lbnRzLmpzJyk7XG5cbnZhciBkZWVwRXF1YWwgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKSB7XG4gIGlmICghb3B0cykgb3B0cyA9IHt9O1xuICAvLyA3LjEuIEFsbCBpZGVudGljYWwgdmFsdWVzIGFyZSBlcXVpdmFsZW50LCBhcyBkZXRlcm1pbmVkIGJ5ID09PS5cbiAgaWYgKGFjdHVhbCA9PT0gZXhwZWN0ZWQpIHtcbiAgICByZXR1cm4gdHJ1ZTtcblxuICB9IGVsc2UgaWYgKGFjdHVhbCBpbnN0YW5jZW9mIERhdGUgJiYgZXhwZWN0ZWQgaW5zdGFuY2VvZiBEYXRlKSB7XG4gICAgcmV0dXJuIGFjdHVhbC5nZXRUaW1lKCkgPT09IGV4cGVjdGVkLmdldFRpbWUoKTtcblxuICAvLyA3LjMuIE90aGVyIHBhaXJzIHRoYXQgZG8gbm90IGJvdGggcGFzcyB0eXBlb2YgdmFsdWUgPT0gJ29iamVjdCcsXG4gIC8vIGVxdWl2YWxlbmNlIGlzIGRldGVybWluZWQgYnkgPT0uXG4gIH0gZWxzZSBpZiAoIWFjdHVhbCB8fCAhZXhwZWN0ZWQgfHwgdHlwZW9mIGFjdHVhbCAhPSAnb2JqZWN0JyAmJiB0eXBlb2YgZXhwZWN0ZWQgIT0gJ29iamVjdCcpIHtcbiAgICByZXR1cm4gb3B0cy5zdHJpY3QgPyBhY3R1YWwgPT09IGV4cGVjdGVkIDogYWN0dWFsID09IGV4cGVjdGVkO1xuXG4gIC8vIDcuNC4gRm9yIGFsbCBvdGhlciBPYmplY3QgcGFpcnMsIGluY2x1ZGluZyBBcnJheSBvYmplY3RzLCBlcXVpdmFsZW5jZSBpc1xuICAvLyBkZXRlcm1pbmVkIGJ5IGhhdmluZyB0aGUgc2FtZSBudW1iZXIgb2Ygb3duZWQgcHJvcGVydGllcyAoYXMgdmVyaWZpZWRcbiAgLy8gd2l0aCBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwpLCB0aGUgc2FtZSBzZXQgb2Yga2V5c1xuICAvLyAoYWx0aG91Z2ggbm90IG5lY2Vzc2FyaWx5IHRoZSBzYW1lIG9yZGVyKSwgZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5XG4gIC8vIGNvcnJlc3BvbmRpbmcga2V5LCBhbmQgYW4gaWRlbnRpY2FsICdwcm90b3R5cGUnIHByb3BlcnR5LiBOb3RlOiB0aGlzXG4gIC8vIGFjY291bnRzIGZvciBib3RoIG5hbWVkIGFuZCBpbmRleGVkIHByb3BlcnRpZXMgb24gQXJyYXlzLlxuICB9IGVsc2Uge1xuICAgIHJldHVybiBvYmpFcXVpdihhY3R1YWwsIGV4cGVjdGVkLCBvcHRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1VuZGVmaW5lZE9yTnVsbCh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gaXNCdWZmZXIgKHgpIHtcbiAgaWYgKCF4IHx8IHR5cGVvZiB4ICE9PSAnb2JqZWN0JyB8fCB0eXBlb2YgeC5sZW5ndGggIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIGlmICh0eXBlb2YgeC5jb3B5ICE9PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiB4LnNsaWNlICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmICh4Lmxlbmd0aCA+IDAgJiYgdHlwZW9mIHhbMF0gIT09ICdudW1iZXInKSByZXR1cm4gZmFsc2U7XG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiBvYmpFcXVpdihhLCBiLCBvcHRzKSB7XG4gIHZhciBpLCBrZXk7XG4gIGlmIChpc1VuZGVmaW5lZE9yTnVsbChhKSB8fCBpc1VuZGVmaW5lZE9yTnVsbChiKSlcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS5cbiAgaWYgKGEucHJvdG90eXBlICE9PSBiLnByb3RvdHlwZSkgcmV0dXJuIGZhbHNlO1xuICAvL35+fkkndmUgbWFuYWdlZCB0byBicmVhayBPYmplY3Qua2V5cyB0aHJvdWdoIHNjcmV3eSBhcmd1bWVudHMgcGFzc2luZy5cbiAgLy8gICBDb252ZXJ0aW5nIHRvIGFycmF5IHNvbHZlcyB0aGUgcHJvYmxlbS5cbiAgaWYgKGlzQXJndW1lbnRzKGEpKSB7XG4gICAgaWYgKCFpc0FyZ3VtZW50cyhiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBhID0gcFNsaWNlLmNhbGwoYSk7XG4gICAgYiA9IHBTbGljZS5jYWxsKGIpO1xuICAgIHJldHVybiBkZWVwRXF1YWwoYSwgYiwgb3B0cyk7XG4gIH1cbiAgaWYgKGlzQnVmZmVyKGEpKSB7XG4gICAgaWYgKCFpc0J1ZmZlcihiKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYS5sZW5ndGggIT09IGIubGVuZ3RoKSByZXR1cm4gZmFsc2U7XG4gICAgZm9yIChpID0gMDsgaSA8IGEubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChhW2ldICE9PSBiW2ldKSByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG4gIHRyeSB7XG4gICAgdmFyIGthID0gb2JqZWN0S2V5cyhhKSxcbiAgICAgICAga2IgPSBvYmplY3RLZXlzKGIpO1xuICB9IGNhdGNoIChlKSB7Ly9oYXBwZW5zIHdoZW4gb25lIGlzIGEgc3RyaW5nIGxpdGVyYWwgYW5kIHRoZSBvdGhlciBpc24ndFxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGtleXMgaW5jb3Jwb3JhdGVzXG4gIC8vIGhhc093blByb3BlcnR5KVxuICBpZiAoa2EubGVuZ3RoICE9IGtiLmxlbmd0aClcbiAgICByZXR1cm4gZmFsc2U7XG4gIC8vdGhlIHNhbWUgc2V0IG9mIGtleXMgKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksXG4gIGthLnNvcnQoKTtcbiAga2Iuc29ydCgpO1xuICAvL35+fmNoZWFwIGtleSB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgaWYgKGthW2ldICE9IGtiW2ldKVxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIC8vZXF1aXZhbGVudCB2YWx1ZXMgZm9yIGV2ZXJ5IGNvcnJlc3BvbmRpbmcga2V5LCBhbmRcbiAgLy9+fn5wb3NzaWJseSBleHBlbnNpdmUgZGVlcCB0ZXN0XG4gIGZvciAoaSA9IGthLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAga2V5ID0ga2FbaV07XG4gICAgaWYgKCFkZWVwRXF1YWwoYVtrZXldLCBiW2tleV0sIG9wdHMpKSByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBhID09PSB0eXBlb2YgYjtcbn1cbiIsInZhciBzdXBwb3J0c0FyZ3VtZW50c0NsYXNzID0gKGZ1bmN0aW9uKCl7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoYXJndW1lbnRzKVxufSkoKSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcblxuZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA/IHN1cHBvcnRlZCA6IHVuc3VwcG9ydGVkO1xuXG5leHBvcnRzLnN1cHBvcnRlZCA9IHN1cHBvcnRlZDtcbmZ1bmN0aW9uIHN1cHBvcnRlZChvYmplY3QpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmplY3QpID09ICdbb2JqZWN0IEFyZ3VtZW50c10nO1xufTtcblxuZXhwb3J0cy51bnN1cHBvcnRlZCA9IHVuc3VwcG9ydGVkO1xuZnVuY3Rpb24gdW5zdXBwb3J0ZWQob2JqZWN0KXtcbiAgcmV0dXJuIG9iamVjdCAmJlxuICAgIHR5cGVvZiBvYmplY3QgPT0gJ29iamVjdCcgJiZcbiAgICB0eXBlb2Ygb2JqZWN0Lmxlbmd0aCA9PSAnbnVtYmVyJyAmJlxuICAgIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsICdjYWxsZWUnKSAmJlxuICAgICFPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwob2JqZWN0LCAnY2FsbGVlJykgfHxcbiAgICBmYWxzZTtcbn07XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2YgT2JqZWN0LmtleXMgPT09ICdmdW5jdGlvbidcbiAgPyBPYmplY3Qua2V5cyA6IHNoaW07XG5cbmV4cG9ydHMuc2hpbSA9IHNoaW07XG5mdW5jdGlvbiBzaGltIChvYmopIHtcbiAgdmFyIGtleXMgPSBbXTtcbiAgZm9yICh2YXIga2V5IGluIG9iaikga2V5cy5wdXNoKGtleSk7XG4gIHJldHVybiBrZXlzO1xufVxuIl19
