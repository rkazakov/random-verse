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
            { to: '/#', className: 'button button-primary' },
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
      //console.log(id);
      var url = id ? '/api/v1.0/verse/' + id : '/api/v1.0/verse/';
      $.getJSON(url, (function (data) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
        location.hash = data.cid;
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
    { path: '/', component: _Verse2.default },
    '// ',
    _react2.default.createElement(_reactRouter.IndexRoute, { component: _Home2.default }),
    '// ',
    _react2.default.createElement(_reactRouter.Route, { path: 'verse', component: _Verse2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: '/:id', component: _Verse2.default }),
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlXFxyYW5kb20tdmVyc2VcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsIkhvbWUuanMiLCJOb3RGb3VuZC5qcyIsIlNoYXJlLmpzIiwiVmVyc2UuanMiLCJoaXN0b3J5LmpzIiwiZmFrZV84NjAyMzM1Mi5qcyIsImJyb3dzZXIuanMiLCJBY3Rpb25zLmpzIiwiQXN5bmNVdGlscy5qcyIsIkRPTVN0YXRlU3RvcmFnZS5qcyIsIkRPTVV0aWxzLmpzIiwiRXhlY3V0aW9uRW52aXJvbm1lbnQuanMiLCJjcmVhdGVCcm93c2VySGlzdG9yeS5qcyIsImNyZWF0ZURPTUhpc3RvcnkuanMiLCJjcmVhdGVIaXN0b3J5LmpzIiwiY3JlYXRlTG9jYXRpb24uanMiLCJkZXByZWNhdGUuanMiLCJleHRyYWN0UGF0aC5qcyIsInBhcnNlUGF0aC5qcyIsInJ1blRyYW5zaXRpb25Ib29rLmpzIiwiaW5kZXguanMiLCJpc19hcmd1bWVudHMuanMiLCJrZXlzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQ0dxQixJQUFJO1lBQUosSUFBSTs7QUFDdkIsV0FEbUIsSUFBSSxDQUNYLEtBQUssRUFBRTswQkFEQSxJQUFJOztrRUFBSixJQUFJLGFBRWYsS0FBSztHQUNaOztlQUhrQixJQUFJOzs2QkFJZDtBQUNQLGFBQ0U7O1VBQUssU0FBUyxFQUFDLFdBQVc7UUFDeEI7O1lBQUssU0FBUyxFQUFDLEtBQUs7VUFDbEI7O2NBQUssU0FBUyxFQUFDLHNCQUFzQjtZQUNuQzs7Z0JBQUcsU0FBUyxFQUFDLE9BQU87O2FBR2hCO1dBQ0E7U0FDRjtRQUNOOztZQUFLLFNBQVMsRUFBQyxLQUFLO1VBQ2xCO3lCQWxCRCxJQUFJO2NBa0JHLEVBQUUsRUFBRSxJ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Q0FBQyxDQUFDO0FBQ3hDLFNBQUssSUFBSSxHQUFHLEdBQUcsQ0FBQyxFQUFFLEdBQUcsR0FBRyxHQUFHLEVBQUUsR0FBRyxFQUFFLEVBQUU7QUFDbEMsVUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsR0FBRyxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUM7S0FDaEM7QUFDRCxRQUFJLE1BQU0sS0FBSyxTQUFTLEVBQUU7QUFDeEIsWUFBTSxJQUFJLEtBQUssQ0FDYiwyREFBMkQsR0FDM0Qsa0JBQWtCLENBQ25CLENBQUM7S0FDSDs7QUFFRCxRQUFJLE1BQU0sQ0FBQyxNQUFNLEdBQUcsRUFBRSxJQUFJLEFBQUMsVUFBVSxDQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTtBQUNuRCxZQUFNLElBQUksS0FBSyxDQUNiLDhEQUE4RCxHQUM5RCx1REFBdUQsR0FBRyxNQUFNLENBQ2pFLENBQUM7S0FDSDs7QUFFRCxRQUFJLENBQUMsU0FBUyxFQUFFO0FBQ2QsVUFBSSxRQUFRLEdBQUcsQ0FBQyxDQUFDO0FBQ2pCLFVBQUksT0FBTyxHQUFHLFdBQVcsR0FDdkIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsWUFBVztBQUMvQixlQUFPLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO09BQ3pCLENBQUMsQ0FBQztBQUNMLFVBQUksT0FBTyxPQUFPLEtBQUssV0FBVyxFQUFFO0FBQ2xDLGVBQU8sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7T0FDeEI7QUFDRCxVQUFJOzs7QUFHRixjQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO09BQzFCLENBQUMsT0FBTSxDQUFDLEVBQUUsRUFBRTtLQUNkO0dBQ0YsQ0FBQztDQUNIOztBQUVELE1BQU0sQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3Rocm93IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIil9dmFyIGY9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGYuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sZixmLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib25lLWhhbGYgY29sdW1uIHRleHRcIj5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmVyc2VcIj5cclxuICAgICAgICAgICAgICDQl9C00LXRgdGMINC80Ysg0YHQvtCx0LjRgNCw0LXQvCDRgdCw0LzRi9C1INCy0LTQvtGF0L3QvtCy0LvRj9GO0YnQuNC1INGC0LXQutGB0YLRiy5cclxuICAgICAgICAgICAgICDQndCwINGB0LDQudGC0LUsINC90LDQv9C+0LvQvdC10L3QvdC+0Lwg0LzRi9GB0LvRj9C80Lgg0LzRg9C00YDQtdGG0L7QsiDQuCDRhNC40LvQvtGB0L7RhNC+0LIsINCw0YTQvtGA0LjQt9C80LDQvNC4INC/0LjRgdCw0YLQtdC70LXQuSDQuCDQstGL0LTQsNGO0YnQuNGF0YHRjyDQu9GO0LTQtdC5LCDQvdC10YIg0L3QuCDQutCw0YLQsNC70L7Qs9CwINGE0YDQsNC3LCDQvdC4INGB0L/QuNGB0LrQsCDQsNCy0YLQvtGA0L7Qsi4g0JzRiyDQvdC1INCy0LXRgNC40Lwg0LIg0YHQu9GD0YfQsNC50L3Ri9C5INCy0YvQsdC+0YAuINCS0Ysg0YHQsNC80Lgg0YDRg9C60L7QstC+0LTQuNGC0LUg0YHQstC+0LXQuSDRgdGD0LTRjNCx0L7QuS4g0J/RgNC+0YHRgtC+INC/0YDQuNGB0LvRg9GI0LDQudGC0LXRgdGMINC6INGB0LXQsdC1LiDQl9Cw0LTRg9C80LDQudGC0LXRgdGMLCDQuCDQvtC00L3QviDQuNC3INGB0LDQvNGL0YUg0LLQtNC+0YXQvdC+0LLQu9GP0Y7RidC40YUg0LLRi9GB0LrQsNC30YvQstCw0L3QuNC5INGH0LXQu9C+0LLQtdGH0LXRgdGC0LLQsCDQv9C+0YHQu9GD0LbQuNGCINC30L3QsNC60L7QvCDQuNC80LXQvdC90L4g0LTQu9GPINCS0LDRgS5cclxuICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxMaW5rIHRvPXsnLyMnfSBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLXByaW1hcnlcIj7Qp9C40YLQsNGC0Yw8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxuICB9XHJcbn07XHJcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5vdEZvdW5kIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gIH1cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gPGgyPk5vdCBmb3VuZDwvaDI+O1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hhcmUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIj5GQjwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgaGlzdG9yeSBmcm9tICcuL2hpc3RvcnknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWZXJzZSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XHJcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcclxuICAgIHN1cGVyKHByb3BzKTtcclxuICAgIHRoaXMuc3RhdGUgPSB7IHZlcnNlOiAnJywgcmVmZXJlbmNlOiAnJyB9O1xyXG4gICAgdGhpcy5nZXROZXh0ID0gdGhpcy5nZXROZXh0LmJpbmQodGhpcyk7XHJcbiAgICB0aGlzLmdldFByZXYgPSB0aGlzLmdldFByZXYuYmluZCh0aGlzKTtcclxuICB9XHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtaGFsZiBjb2x1bW4gdGV4dFwiPlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2ZXJzZVwiPnt0aGlzLnN0YXRlLnZlcnNlfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVmZXJlbmNlXCI+e3RoaXMuc3RhdGUucmVmZXJlbmNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5nZXRQcmV2fSB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJCYWNrXCIvPlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuZ2V0TmV4dH0gY2xhc3NOYW1lPVwiYnV0dG9uIGJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTmV4dFwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH1cclxuICBnZXRQcmV2KCkge1xyXG4gICAgLy8gVE9ETzogdXNlIFJlYWN0IFJvdXRlciBoaXN0b3J5IHRvIGltcGxlbWVudCBiYWNrIGFjdGlvblxyXG4gICAgaGlzdG9yeS5nb0JhY2soKTtcclxuICB9XHJcbiAgZ2V0TmV4dCgpIHtcclxuICAgIGxldCBpZCA9IHRoaXMucHJvcHMucGFyYW1zLmlkO1xyXG4gICAgLy9jb25zb2xlLmxvZyhpZCk7XHJcbiAgICBsZXQgdXJsID0gaWQgPyAnL2FwaS92MS4wL3ZlcnNlLycgKyBpZCA6ICcvYXBpL3YxLjAvdmVyc2UvJztcclxuICAgICQuZ2V0SlNPTih1cmwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgdmVyc2U6IGRhdGEudGV4dCxcclxuICAgICAgICByZWZlcmVuY2U6IGRhdGEucmVmZXJlbmNlXHJcbiAgICAgIH0pO1xyXG4gICAgICBsb2NhdGlvbi5oYXNoID0gZGF0YS5jaWQ7XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG5cclxuICAgIC8qJC5nZXRKU09OKCcvYXBpL3YxLjAvdmVyc2UnLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIC8vaGlzdG9yeS5yZXBsYWNlU3RhdGUobnVsbCwgJy92ZXJzZS8nICsgZGF0YS5jaWQpO1xyXG4gICAgICAvL2xvY2F0aW9uLmhhc2ggPSBcIiN2YWx1ZVwiO1xyXG4gICAgfS5iaW5kKHRoaXMpKTsqL1xyXG4gIH1cclxuICBjb21wb25lbnREaWRNb3VudCgpIHtcclxuICAgIHRoaXMuZ2V0TmV4dCgpO1xyXG4gIH1cclxufTtcclxuIiwiaW1wb3J0IGNyZWF0ZUJyb3dzZXJIaXN0b3J5IGZyb20gJ2hpc3RvcnkvbGliL2NyZWF0ZUJyb3dzZXJIaXN0b3J5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlQnJvd3Nlckhpc3RvcnkoKVxyXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgUm91dGVyLCBSb3V0ZSwgSW5kZXhSb3V0ZSwgTGluaywgSW5kZXhMaW5rLCBicm93c2VySGlzdG9yeSB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbmltcG9ydCBoaXN0b3J5IGZyb20gJy4vY29tcG9uZW50cy9oaXN0b3J5J1xyXG5cclxuLy8gQ29tcG9uZW50c1xyXG5pbXBvcnQgSG9tZSBmcm9tICcuL2NvbXBvbmVudHMvSG9tZSc7XHJcbmltcG9ydCBWZXJzZSBmcm9tICcuL2NvbXBvbmVudHMvVmVyc2UnO1xyXG5pbXBvcnQgU2hhcmUgZnJvbSAnLi9jb21wb25lbnRzL1NoYXJlJztcclxuaW1wb3J0IE5vdEZvdW5kIGZyb20gJy4vY29tcG9uZW50cy9Ob3RGb3VuZCc7XHJcblxyXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xyXG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICBzdXBlcihwcm9wcyk7XHJcbiAgfVxyXG4gIHJlbmRlcigpIHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXY+IHt0aGlzLnByb3BzLmNoaWxkcmVuIHx8IDxIb21lIC8+fSA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59O1xyXG5cclxucmVuZGVyKChcclxuICA8Um91dGVyIGhpc3Rvcnk9e2hpc3Rvcnl9PlxyXG4gICAgPFJvdXRlIHBhdGg9Jy8nIGNvbXBvbmVudD17VmVyc2V9PlxyXG4gICAgICAvLyA8SW5kZXhSb3V0ZSBjb21wb25lbnQ9e0hvbWV9IC8+XHJcbiAgICAgIC8vIDxSb3V0ZSBwYXRoPSd2ZXJzZScgY29tcG9uZW50PXtWZXJzZX0gLz5cclxuICAgICAgPFJvdXRlIHBhdGg9Jy86aWQnIGNvbXBvbmVudD17VmVyc2V9IC8+XHJcbiAgICAgIDxSb3V0ZSBwYXRoPScqJyBjb21wb25lbnQ9e05vdEZvdW5kfSAvPlxyXG4gICAgPC9Sb3V0ZT5cclxuICA8L1JvdXRlcj5cclxuKSwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpKTtcclxuIiwiLyoqXG4gKiBDb3B5cmlnaHQgMjAxNC0yMDE1LCBGYWNlYm9vaywgSW5jLlxuICogQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBCU0Qtc3R5bGUgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS4gQW4gYWRkaXRpb25hbCBncmFudFxuICogb2YgcGF0ZW50IHJpZ2h0cyBjYW4gYmUgZm91bmQgaW4gdGhlIFBBVEVOVFMgZmlsZSBpbiB0aGUgc2FtZSBkaXJlY3RvcnkuXG4gKi9cblxuJ3VzZSBzdHJpY3QnO1xuXG4vKipcbiAqIFNpbWlsYXIgdG8gaW52YXJpYW50IGJ1dCBvbmx5IGxvZ3MgYSB3YXJuaW5nIGlmIHRoZSBjb25kaXRpb24gaXMgbm90IG1ldC5cbiAqIFRoaXMgY2FuIGJlIHVzZWQgdG8gbG9nIGlzc3VlcyBpbiBkZXZlbG9wbWVudCBlbnZpcm9ubWVudHMgaW4gY3JpdGljYWxcbiAqIHBhdGhzLiBSZW1vdmluZyB0aGUgbG9nZ2luZyBjb2RlIGZvciBwcm9kdWN0aW9uIGVudmlyb25tZW50cyB3aWxsIGtlZXAgdGhlXG4gKiBzYW1lIGxvZ2ljIGFuZCBmb2xsb3cgdGhlIHNhbWUgY29kZSBwYXRocy5cbiAqL1xuXG52YXIgd2FybmluZyA9IGZ1bmN0aW9uKCkge307XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIHdhcm5pbmcgPSBmdW5jdGlvbihjb25kaXRpb24sIGZvcm1hdCwgYXJncykge1xuICAgIHZhciBsZW4gPSBhcmd1bWVudHMubGVuZ3RoO1xuICAgIGFyZ3MgPSBuZXcgQXJyYXkobGVuID4gMiA/IGxlbiAtIDIgOiAwKTtcbiAgICBmb3IgKHZhciBrZXkgPSAyOyBrZXkgPCBsZW47IGtleSsrKSB7XG4gICAgICBhcmdzW2tleSAtIDJdID0gYXJndW1lbnRzW2tleV07XG4gICAgfVxuICAgIGlmIChmb3JtYXQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICAnYHdhcm5pbmcoY29uZGl0aW9uLCBmb3JtYXQsIC4uLmFyZ3MpYCByZXF1aXJlcyBhIHdhcm5pbmcgJyArXG4gICAgICAgICdtZXNzYWdlIGFyZ3VtZW50J1xuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoZm9ybWF0Lmxlbmd0aCA8IDEwIHx8ICgvXltzXFxXXSokLykudGVzdChmb3JtYXQpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICdUaGUgd2FybmluZyBmb3JtYXQgc2hvdWxkIGJlIGFibGUgdG8gdW5pcXVlbHkgaWRlbnRpZnkgdGhpcyAnICtcbiAgICAgICAgJ3dhcm5pbmcuIFBsZWFzZSwgdXNlIGEgbW9yZSBkZXNjcmlwdGl2ZSBmb3JtYXQgdGhhbjogJyArIGZvcm1hdFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgdmFyIGFyZ0luZGV4ID0gMDtcbiAgICAgIHZhciBtZXNzYWdlID0gJ1dhcm5pbmc6ICcgK1xuICAgICAgICBmb3JtYXQucmVwbGFjZSgvJXMvZywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgcmV0dXJuIGFyZ3NbYXJnSW5kZXgrK107XG4gICAgICAgIH0pO1xuICAgICAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKG1lc3NhZ2UpO1xuICAgICAgfVxuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyBlcnJvciB3YXMgdGhyb3duIGFzIGEgY29udmVuaWVuY2Ugc28gdGhhdCB5b3UgY2FuIHVzZSB0aGlzIHN0YWNrXG4gICAgICAgIC8vIHRvIGZpbmQgdGhlIGNhbGxzaXRlIHRoYXQgY2F1c2VkIHRoaXMgd2FybmluZyB0byBmaXJlLlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XG4gICAgICB9IGNhdGNoKHgpIHt9XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHdhcm5pbmc7XG4iLCIvKipcbiAqIEluZGljYXRlcyB0aGF0IG5hdmlnYXRpb24gd2FzIGNhdXNlZCBieSBhIGNhbGwgdG8gaGlzdG9yeS5wdXNoLlxuICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG52YXIgUFVTSCA9ICdQVVNIJztcblxuZXhwb3J0cy5QVVNIID0gUFVTSDtcbi8qKlxuICogSW5kaWNhdGVzIHRoYXQgbmF2aWdhdGlvbiB3YXMgY2F1c2VkIGJ5IGEgY2FsbCB0byBoaXN0b3J5LnJlcGxhY2UuXG4gKi9cbnZhciBSRVBMQUNFID0gJ1JFUExBQ0UnO1xuXG5leHBvcnRzLlJFUExBQ0UgPSBSRVBMQUNFO1xuLyoqXG4gKiBJbmRpY2F0ZXMgdGhhdCBuYXZpZ2F0aW9uIHdhcyBjYXVzZWQgYnkgc29tZSBvdGhlciBhY3Rpb24gc3VjaFxuICogYXMgdXNpbmcgYSBicm93c2VyJ3MgYmFjay9mb3J3YXJkIGJ1dHRvbnMgYW5kL29yIG1hbnVhbGx5IG1hbmlwdWxhdGluZ1xuICogdGhlIFVSTCBpbiBhIGJyb3dzZXIncyBsb2NhdGlvbiBiYXIuIFRoaXMgaXMgdGhlIGRlZmF1bHQuXG4gKlxuICogU2VlIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3dFdmVudEhhbmRsZXJzL29ucG9wc3RhdGVcbiAqIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICovXG52YXIgUE9QID0gJ1BPUCc7XG5cbmV4cG9ydHMuUE9QID0gUE9QO1xuZXhwb3J0c1snZGVmYXVsdCddID0ge1xuICBQVVNIOiBQVVNILFxuICBSRVBMQUNFOiBSRVBMQUNFLFxuICBQT1A6IFBPUFxufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmV4cG9ydHMubG9vcEFzeW5jID0gbG9vcEFzeW5jO1xuXG5mdW5jdGlvbiBsb29wQXN5bmModHVybnMsIHdvcmssIGNhbGxiYWNrKSB7XG4gIHZhciBjdXJyZW50VHVybiA9IDA7XG4gIHZhciBpc0RvbmUgPSBmYWxzZTtcblxuICBmdW5jdGlvbiBkb25lKCkge1xuICAgIGlzRG9uZSA9IHRydWU7XG4gICAgY2FsbGJhY2suYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIG5leHQoKSB7XG4gICAgaWYgKGlzRG9uZSkgcmV0dXJuO1xuXG4gICAgaWYgKGN1cnJlbnRUdXJuIDwgdHVybnMpIHtcbiAgICAgIHdvcmsuY2FsbCh0aGlzLCBjdXJyZW50VHVybisrLCBuZXh0LCBkb25lKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZG9uZS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfVxuXG4gIG5leHQoKTtcbn0iLCIvKmVzbGludC1kaXNhYmxlIG5vLWVtcHR5ICovXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5leHBvcnRzLnNhdmVTdGF0ZSA9IHNhdmVTdGF0ZTtcbmV4cG9ydHMucmVhZFN0YXRlID0gcmVhZFN0YXRlO1xuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iaikgeyByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDogeyAnZGVmYXVsdCc6IG9iaiB9OyB9XG5cbnZhciBfd2FybmluZyA9IHJlcXVpcmUoJ3dhcm5pbmcnKTtcblxudmFyIF93YXJuaW5nMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX3dhcm5pbmcpO1xuXG52YXIgS2V5UHJlZml4ID0gJ0BASGlzdG9yeS8nO1xudmFyIFF1b3RhRXhjZWVkZWRFcnJvciA9ICdRdW90YUV4Y2VlZGVkRXJyb3InO1xudmFyIFNlY3VyaXR5RXJyb3IgPSAnU2VjdXJpdHlFcnJvcic7XG5cbmZ1bmN0aW9uIGNyZWF0ZUtleShrZXkpIHtcbiAgcmV0dXJuIEtleVByZWZpeCArIGtleTtcbn1cblxuZnVuY3Rpb24gc2F2ZVN0YXRlKGtleSwgc3RhdGUpIHtcbiAgdHJ5IHtcbiAgICB3aW5kb3cuc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShjcmVhdGVLZXkoa2V5KSwgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gU2VjdXJpdHlFcnJvcikge1xuICAgICAgLy8gQmxvY2tpbmcgY29va2llcyBpbiBDaHJvbWUvRmlyZWZveC9TYWZhcmkgdGhyb3dzIFNlY3VyaXR5RXJyb3Igb24gYW55XG4gICAgICAvLyBhdHRlbXB0IHRvIGFjY2VzcyB3aW5kb3cuc2Vzc2lvblN0b3JhZ2UuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgZHVlIHRvIHNlY3VyaXR5IHNldHRpbmdzJykgOiB1bmRlZmluZWQ7XG5cbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoZXJyb3IubmFtZSA9PT0gUXVvdGFFeGNlZWRlZEVycm9yICYmIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5sZW5ndGggPT09IDApIHtcbiAgICAgIC8vIFNhZmFyaSBcInByaXZhdGUgbW9kZVwiIHRocm93cyBRdW90YUV4Y2VlZGVkRXJyb3IuXG4gICAgICBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX3dhcm5pbmcyWydkZWZhdWx0J10oZmFsc2UsICdbaGlzdG9yeV0gVW5hYmxlIHRvIHNhdmUgc3RhdGU7IHNlc3Npb25TdG9yYWdlIGlzIG5vdCBhdmFpbGFibGUgaW4gU2FmYXJpIHByaXZhdGUgbW9kZScpIDogdW5kZWZpbmVkO1xuXG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdGhyb3cgZXJyb3I7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVhZFN0YXRlKGtleSkge1xuICB2YXIganNvbiA9IHVuZGVmaW5lZDtcbiAgdHJ5IHtcbiAgICBqc29uID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oY3JlYXRlS2V5KGtleSkpO1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGlmIChlcnJvci5uYW1lID09PSBTZWN1cml0eUVycm9yKSB7XG4gICAgICAvLyBCbG9ja2luZyBjb29raWVzIGluIENocm9tZS9GaXJlZm94L1NhZmFyaSB0aHJvd3MgU2VjdXJpdHlFcnJvciBvbiBhbnlcbiAgICAgIC8vIGF0dGVtcHQgdG8gYWNjZXNzIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5cbiAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShmYWxzZSwgJ1toaXN0b3J5XSBVbmFibGUgdG8gcmVhZCBzdGF0ZTsgc2Vzc2lvblN0b3JhZ2UgaXMgbm90IGF2YWlsYWJsZSBkdWUgdG8gc2VjdXJpdHkgc2V0dGluZ3MnKSA6IHVuZGVmaW5lZDtcblxuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgaWYgKGpzb24pIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIEpTT04ucGFyc2UoanNvbik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIElnbm9yZSBpbnZhbGlkIEpTT04uXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIG51bGw7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xuZXhwb3J0cy5hZGRFdmVudExpc3RlbmVyID0gYWRkRXZlbnRMaXN0ZW5lcjtcbmV4cG9ydHMucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IHJlbW92ZUV2ZW50TGlzdGVuZXI7XG5leHBvcnRzLmdldEhhc2hQYXRoID0gZ2V0SGFzaFBhdGg7XG5leHBvcnRzLnJlcGxhY2VIYXNoUGF0aCA9IHJlcGxhY2VIYXNoUGF0aDtcbmV4cG9ydHMuZ2V0V2luZG93UGF0aCA9IGdldFdpbmRvd1BhdGg7XG5leHBvcnRzLmdvID0gZ287XG5leHBvcnRzLmdldFVzZXJDb25maXJtYXRpb24gPSBnZXRVc2VyQ29uZmlybWF0aW9uO1xuZXhwb3J0cy5zdXBwb3J0c0hpc3RvcnkgPSBzdXBwb3J0c0hpc3Rvcnk7XG5leHBvcnRzLnN1cHBvcnRzR29XaXRob3V0UmVsb2FkVXNpbmdIYXNoID0gc3VwcG9ydHNHb1dpdGhvdXRSZWxvYWRVc2luZ0hhc2g7XG5cbmZ1bmN0aW9uIGFkZEV2ZW50TGlzdGVuZXIobm9kZSwgZXZlbnQsIGxpc3RlbmVyKSB7XG4gIGlmIChub2RlLmFkZEV2ZW50TGlzdGVuZXIpIHtcbiAgICBub2RlLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIH0gZWxzZSB7XG4gICAgbm9kZS5hdHRhY2hFdmVudCgnb24nICsgZXZlbnQsIGxpc3RlbmVyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVFdmVudExpc3RlbmVyKG5vZGUsIGV2ZW50LCBsaXN0ZW5lcikge1xuICBpZiAobm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKSB7XG4gICAgbm9kZS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lciwgZmFsc2UpO1xuICB9IGVsc2Uge1xuICAgIG5vZGUuZGV0YWNoRXZlbnQoJ29uJyArIGV2ZW50LCBsaXN0ZW5lcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0SGFzaFBhdGgoKSB7XG4gIC8vIFdlIGNhbid0IHVzZSB3aW5kb3cubG9jYXRpb24uaGFzaCBoZXJlIGJlY2F1c2UgaXQncyBub3RcbiAgLy8gY29uc2lzdGVudCBhY3Jvc3MgYnJvd3NlcnMgLSBGaXJlZm94IHdpbGwgcHJlLWRlY29kZSBpdCFcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmLnNwbGl0KCcjJylbMV0gfHwgJyc7XG59XG5cbmZ1bmN0aW9uIHJlcGxhY2VIYXNoUGF0aChwYXRoKSB7XG4gIHdpbmRvdy5sb2NhdGlvbi5yZXBsYWNlKHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyAnIycgKyBwYXRoKTtcbn1cblxuZnVuY3Rpb24gZ2V0V2luZG93UGF0aCgpIHtcbiAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZSArIHdpbmRvdy5sb2NhdGlvbi5zZWFyY2ggKyB3aW5kb3cubG9jYXRpb24uaGFzaDtcbn1cblxuZnVuY3Rpb24gZ28obikge1xuICBpZiAobikgd2luZG93Lmhpc3RvcnkuZ28obik7XG59XG5cbmZ1bmN0aW9uIGdldFVzZXJDb25maXJtYXRpb24obWVzc2FnZSwgY2FsbGJhY2spIHtcbiAgY2FsbGJhY2sod2luZG93LmNvbmZpcm0obWVzc2FnZSkpO1xufVxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgSFRNTDUgaGlzdG9yeSBBUEkgaXMgc3VwcG9ydGVkLiBUYWtlbiBmcm9tIE1vZGVybml6ci5cbiAqXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9MSUNFTlNFXG4gKiBodHRwczovL2dpdGh1Yi5jb20vTW9kZXJuaXpyL01vZGVybml6ci9ibG9iL21hc3Rlci9mZWF0dXJlLWRldGVjdHMvaGlzdG9yeS5qc1xuICogY2hhbmdlZCB0byBhdm9pZCBmYWxzZSBuZWdhdGl2ZXMgZm9yIFdpbmRvd3MgUGhvbmVzOiBodHRwczovL2dpdGh1Yi5jb20vcmFja3QvcmVhY3Qtcm91dGVyL2lzc3Vlcy81ODZcbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0hpc3RvcnkoKSB7XG4gIHZhciB1YSA9IG5hdmlnYXRvci51c2VyQWdlbnQ7XG4gIGlmICgodWEuaW5kZXhPZignQW5kcm9pZCAyLicpICE9PSAtMSB8fCB1YS5pbmRleE9mKCdBbmRyb2lkIDQuMCcpICE9PSAtMSkgJiYgdWEuaW5kZXhPZignTW9iaWxlIFNhZmFyaScpICE9PSAtMSAmJiB1YS5pbmRleE9mKCdDaHJvbWUnKSA9PT0gLTEgJiYgdWEuaW5kZXhPZignV2luZG93cyBQaG9uZScpID09PSAtMSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvLyBGSVhNRTogV29yayBhcm91bmQgb3VyIGJyb3dzZXIgaGlzdG9yeSBub3Qgd29ya2luZyBjb3JyZWN0bHkgb24gQ2hyb21lXG4gIC8vIGlPUzogaHR0cHM6Ly9naXRodWIuY29tL3JhY2t0L3JlYWN0LXJvdXRlci9pc3N1ZXMvMjU2NVxuICBpZiAodWEuaW5kZXhPZignQ3JpT1MnKSAhPT0gLTEpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgcmV0dXJuIHdpbmRvdy5oaXN0b3J5ICYmICdwdXNoU3RhdGUnIGluIHdpbmRvdy5oaXN0b3J5O1xufVxuXG4vKipcbiAqIFJldHVybnMgZmFsc2UgaWYgdXNpbmcgZ28obikgd2l0aCBoYXNoIGhpc3RvcnkgY2F1c2VzIGEgZnVsbCBwYWdlIHJlbG9hZC5cbiAqL1xuXG5mdW5jdGlvbiBzdXBwb3J0c0dvV2l0aG91dFJlbG9hZFVzaW5nSGFzaCgpIHtcbiAgdmFyIHVhID0gbmF2aWdhdG9yLnVzZXJBZ2VudDtcbiAgcmV0dXJuIHVhLmluZGV4T2YoJ0ZpcmVmb3gnKSA9PT0gLTE7XG59IiwiJ3VzZSBzdHJpY3QnO1xuXG5leHBvcnRzLl9fZXNNb2R1bGUgPSB0cnVlO1xudmFyIGNhblVzZURPTSA9ICEhKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5kb2N1bWVudCAmJiB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5leHBvcnRzLmNhblVzZURPTSA9IGNhblVzZURPTTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9pbnZhcmlhbnQgPSByZXF1aXJlKCdpbnZhcmlhbnQnKTtcblxudmFyIF9pbnZhcmlhbnQyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfaW52YXJpYW50KTtcblxudmFyIF9BY3Rpb25zID0gcmVxdWlyZSgnLi9BY3Rpb25zJyk7XG5cbnZhciBfRXhlY3V0aW9uRW52aXJvbm1lbnQgPSByZXF1aXJlKCcuL0V4ZWN1dGlvbkVudmlyb25tZW50Jyk7XG5cbnZhciBfRE9NVXRpbHMgPSByZXF1aXJlKCcuL0RPTVV0aWxzJyk7XG5cbnZhciBfRE9NU3RhdGVTdG9yYWdlID0gcmVxdWlyZSgnLi9ET01TdGF0ZVN0b3JhZ2UnKTtcblxudmFyIF9jcmVhdGVET01IaXN0b3J5ID0gcmVxdWlyZSgnLi9jcmVhdGVET01IaXN0b3J5Jyk7XG5cbnZhciBfY3JlYXRlRE9NSGlzdG9yeTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9jcmVhdGVET01IaXN0b3J5KTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG4vKipcbiAqIENyZWF0ZXMgYW5kIHJldHVybnMgYSBoaXN0b3J5IG9iamVjdCB0aGF0IHVzZXMgSFRNTDUncyBoaXN0b3J5IEFQSVxuICogKHB1c2hTdGF0ZSwgcmVwbGFjZVN0YXRlLCBhbmQgdGhlIHBvcHN0YXRlIGV2ZW50KSB0byBtYW5hZ2UgaGlzdG9yeS5cbiAqIFRoaXMgaXMgdGhlIHJlY29tbWVuZGVkIG1ldGhvZCBvZiBtYW5hZ2luZyBoaXN0b3J5IGluIGJyb3dzZXJzIGJlY2F1c2VcbiAqIGl0IHByb3ZpZGVzIHRoZSBjbGVhbmVzdCBVUkxzLlxuICpcbiAqIE5vdGU6IEluIGJyb3dzZXJzIHRoYXQgZG8gbm90IHN1cHBvcnQgdGhlIEhUTUw1IGhpc3RvcnkgQVBJIGZ1bGxcbiAqIHBhZ2UgcmVsb2FkcyB3aWxsIGJlIHVzZWQgdG8gcHJlc2VydmUgVVJMcy5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnJvd3Nlckhpc3RvcnkoKSB7XG4gIHZhciBvcHRpb25zID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8ge30gOiBhcmd1bWVudHNbMF07XG5cbiAgIV9FeGVjdXRpb25FbnZpcm9ubWVudC5jYW5Vc2VET00gPyBwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nID8gX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSwgJ0Jyb3dzZXIgaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGZvcmNlUmVmcmVzaCA9IG9wdGlvbnMuZm9yY2VSZWZyZXNoO1xuXG4gIHZhciBpc1N1cHBvcnRlZCA9IF9ET01VdGlscy5zdXBwb3J0c0hpc3RvcnkoKTtcbiAgdmFyIHVzZVJlZnJlc2ggPSAhaXNTdXBwb3J0ZWQgfHwgZm9yY2VSZWZyZXNoO1xuXG4gIGZ1bmN0aW9uIGdldEN1cnJlbnRMb2NhdGlvbihoaXN0b3J5U3RhdGUpIHtcbiAgICBoaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGUgfHwgd2luZG93Lmhpc3Rvcnkuc3RhdGUgfHwge307XG5cbiAgICB2YXIgcGF0aCA9IF9ET01VdGlscy5nZXRXaW5kb3dQYXRoKCk7XG4gICAgdmFyIF9oaXN0b3J5U3RhdGUgPSBoaXN0b3J5U3RhdGU7XG4gICAgdmFyIGtleSA9IF9oaXN0b3J5U3RhdGUua2V5O1xuXG4gICAgdmFyIHN0YXRlID0gdW5kZWZpbmVkO1xuICAgIGlmIChrZXkpIHtcbiAgICAgIHN0YXRlID0gX0RPTVN0YXRlU3RvcmFnZS5yZWFkU3RhdGUoa2V5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3RhdGUgPSBudWxsO1xuICAgICAga2V5ID0gaGlzdG9yeS5jcmVhdGVLZXkoKTtcblxuICAgICAgaWYgKGlzU3VwcG9ydGVkKSB3aW5kb3cuaGlzdG9yeS5yZXBsYWNlU3RhdGUoX2V4dGVuZHMoe30sIGhpc3RvcnlTdGF0ZSwgeyBrZXk6IGtleSB9KSwgbnVsbCwgcGF0aCk7XG4gICAgfVxuXG4gICAgdmFyIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcblxuICAgIHJldHVybiBoaXN0b3J5LmNyZWF0ZUxvY2F0aW9uKF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogc3RhdGUgfSksIHVuZGVmaW5lZCwga2V5KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihfcmVmKSB7XG4gICAgdmFyIHRyYW5zaXRpb25UbyA9IF9yZWYudHJhbnNpdGlvblRvO1xuXG4gICAgZnVuY3Rpb24gcG9wU3RhdGVMaXN0ZW5lcihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LnN0YXRlID09PSB1bmRlZmluZWQpIHJldHVybjsgLy8gSWdub3JlIGV4dHJhbmVvdXMgcG9wc3RhdGUgZXZlbnRzIGluIFdlYktpdC5cblxuICAgICAgdHJhbnNpdGlvblRvKGdldEN1cnJlbnRMb2NhdGlvbihldmVudC5zdGF0ZSkpO1xuICAgIH1cblxuICAgIF9ET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ3BvcHN0YXRlJywgcG9wU3RhdGVMaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgX0RPTVV0aWxzLnJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAncG9wc3RhdGUnLCBwb3BTdGF0ZUxpc3RlbmVyKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gZmluaXNoVHJhbnNpdGlvbihsb2NhdGlvbikge1xuICAgIHZhciBiYXNlbmFtZSA9IGxvY2F0aW9uLmJhc2VuYW1lO1xuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuICAgIHZhciBzdGF0ZSA9IGxvY2F0aW9uLnN0YXRlO1xuICAgIHZhciBhY3Rpb24gPSBsb2NhdGlvbi5hY3Rpb247XG4gICAgdmFyIGtleSA9IGxvY2F0aW9uLmtleTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkgcmV0dXJuOyAvLyBOb3RoaW5nIHRvIGRvLlxuXG4gICAgX0RPTVN0YXRlU3RvcmFnZS5zYXZlU3RhdGUoa2V5LCBzdGF0ZSk7XG5cbiAgICB2YXIgcGF0aCA9IChiYXNlbmFtZSB8fCAnJykgKyBwYXRobmFtZSArIHNlYXJjaCArIGhhc2g7XG4gICAgdmFyIGhpc3RvcnlTdGF0ZSA9IHtcbiAgICAgIGtleToga2V5XG4gICAgfTtcblxuICAgIGlmIChhY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGlmICh1c2VSZWZyZXNoKSB7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gcGF0aDtcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBQcmV2ZW50IGxvY2F0aW9uIHVwZGF0ZS5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgd2luZG93Lmhpc3RvcnkucHVzaFN0YXRlKGhpc3RvcnlTdGF0ZSwgbnVsbCwgcGF0aCk7XG4gICAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgLy8gUkVQTEFDRVxuICAgICAgaWYgKHVzZVJlZnJlc2gpIHtcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLnJlcGxhY2UocGF0aCk7XG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gUHJldmVudCBsb2NhdGlvbiB1cGRhdGUuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShoaXN0b3J5U3RhdGUsIG51bGwsIHBhdGgpO1xuICAgICAgICB9XG4gICAgfVxuICB9XG5cbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlRE9NSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7fSwgb3B0aW9ucywge1xuICAgIGdldEN1cnJlbnRMb2NhdGlvbjogZ2V0Q3VycmVudExvY2F0aW9uLFxuICAgIGZpbmlzaFRyYW5zaXRpb246IGZpbmlzaFRyYW5zaXRpb24sXG4gICAgc2F2ZVN0YXRlOiBfRE9NU3RhdGVTdG9yYWdlLnNhdmVTdGF0ZVxuICB9KSk7XG5cbiAgdmFyIGxpc3RlbmVyQ291bnQgPSAwLFxuICAgICAgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gbGlzdGVuQmVmb3JlKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbkJlZm9yZShsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gbGlzdGVuKGxpc3RlbmVyKSB7XG4gICAgaWYgKCsrbGlzdGVuZXJDb3VudCA9PT0gMSkgc3RvcFBvcFN0YXRlTGlzdGVuZXIgPSBzdGFydFBvcFN0YXRlTGlzdGVuZXIoaGlzdG9yeSk7XG5cbiAgICB2YXIgdW5saXN0ZW4gPSBoaXN0b3J5Lmxpc3RlbihsaXN0ZW5lcik7XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdW5saXN0ZW4oKTtcblxuICAgICAgaWYgKC0tbGlzdGVuZXJDb3VudCA9PT0gMCkgc3RvcFBvcFN0YXRlTGlzdGVuZXIoKTtcbiAgICB9O1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiByZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBpZiAoKytsaXN0ZW5lckNvdW50ID09PSAxKSBzdG9wUG9wU3RhdGVMaXN0ZW5lciA9IHN0YXJ0UG9wU3RhdGVMaXN0ZW5lcihoaXN0b3J5KTtcblxuICAgIGhpc3RvcnkucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rKGhvb2spIHtcbiAgICBoaXN0b3J5LnVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKTtcblxuICAgIGlmICgtLWxpc3RlbmVyQ291bnQgPT09IDApIHN0b3BQb3BTdGF0ZUxpc3RlbmVyKCk7XG4gIH1cblxuICByZXR1cm4gX2V4dGVuZHMoe30sIGhpc3RvcnksIHtcbiAgICBsaXN0ZW5CZWZvcmU6IGxpc3RlbkJlZm9yZSxcbiAgICBsaXN0ZW46IGxpc3RlbixcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiByZWdpc3RlclRyYW5zaXRpb25Ib29rLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogdW5yZWdpc3RlclRyYW5zaXRpb25Ib29rXG4gIH0pO1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVCcm93c2VySGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX2ludmFyaWFudCA9IHJlcXVpcmUoJ2ludmFyaWFudCcpO1xuXG52YXIgX2ludmFyaWFudDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9pbnZhcmlhbnQpO1xuXG52YXIgX0V4ZWN1dGlvbkVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9FeGVjdXRpb25FbnZpcm9ubWVudCcpO1xuXG52YXIgX0RPTVV0aWxzID0gcmVxdWlyZSgnLi9ET01VdGlscycpO1xuXG52YXIgX2NyZWF0ZUhpc3RvcnkgPSByZXF1aXJlKCcuL2NyZWF0ZUhpc3RvcnknKTtcblxudmFyIF9jcmVhdGVIaXN0b3J5MiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2NyZWF0ZUhpc3RvcnkpO1xuXG5mdW5jdGlvbiBjcmVhdGVET01IaXN0b3J5KG9wdGlvbnMpIHtcbiAgdmFyIGhpc3RvcnkgPSBfY3JlYXRlSGlzdG9yeTJbJ2RlZmF1bHQnXShfZXh0ZW5kcyh7XG4gICAgZ2V0VXNlckNvbmZpcm1hdGlvbjogX0RPTVV0aWxzLmdldFVzZXJDb25maXJtYXRpb25cbiAgfSwgb3B0aW9ucywge1xuICAgIGdvOiBfRE9NVXRpbHMuZ29cbiAgfSkpO1xuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgICFfRXhlY3V0aW9uRW52aXJvbm1lbnQuY2FuVXNlRE9NID8gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF9pbnZhcmlhbnQyWydkZWZhdWx0J10oZmFsc2UsICdET00gaGlzdG9yeSBuZWVkcyBhIERPTScpIDogX2ludmFyaWFudDJbJ2RlZmF1bHQnXShmYWxzZSkgOiB1bmRlZmluZWQ7XG5cbiAgICByZXR1cm4gaGlzdG9yeS5saXN0ZW4obGlzdGVuZXIpO1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBoaXN0b3J5LCB7XG4gICAgbGlzdGVuOiBsaXN0ZW5cbiAgfSk7XG59XG5cbmV4cG9ydHNbJ2RlZmF1bHQnXSA9IGNyZWF0ZURPTUhpc3Rvcnk7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIvL2ltcG9ydCB3YXJuaW5nIGZyb20gJ3dhcm5pbmcnXG4ndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbnZhciBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkgeyBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgeyB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldOyBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7IGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7IHRhcmdldFtrZXldID0gc291cmNlW2tleV07IH0gfSB9IHJldHVybiB0YXJnZXQ7IH07XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF9kZWVwRXF1YWwgPSByZXF1aXJlKCdkZWVwLWVxdWFsJyk7XG5cbnZhciBfZGVlcEVxdWFsMiA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQoX2RlZXBFcXVhbCk7XG5cbnZhciBfQXN5bmNVdGlscyA9IHJlcXVpcmUoJy4vQXN5bmNVdGlscycpO1xuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9jcmVhdGVMb2NhdGlvbjIgPSByZXF1aXJlKCcuL2NyZWF0ZUxvY2F0aW9uJyk7XG5cbnZhciBfY3JlYXRlTG9jYXRpb24zID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfY3JlYXRlTG9jYXRpb24yKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vayA9IHJlcXVpcmUoJy4vcnVuVHJhbnNpdGlvbkhvb2snKTtcblxudmFyIF9ydW5UcmFuc2l0aW9uSG9vazIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9ydW5UcmFuc2l0aW9uSG9vayk7XG5cbnZhciBfcGFyc2VQYXRoID0gcmVxdWlyZSgnLi9wYXJzZVBhdGgnKTtcblxudmFyIF9wYXJzZVBhdGgyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfcGFyc2VQYXRoKTtcblxudmFyIF9kZXByZWNhdGUgPSByZXF1aXJlKCcuL2RlcHJlY2F0ZScpO1xuXG52YXIgX2RlcHJlY2F0ZTIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9kZXByZWNhdGUpO1xuXG5mdW5jdGlvbiBjcmVhdGVSYW5kb21LZXkobGVuZ3RoKSB7XG4gIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgbGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb25zQXJlRXF1YWwoYSwgYikge1xuICByZXR1cm4gYS5wYXRobmFtZSA9PT0gYi5wYXRobmFtZSAmJiBhLnNlYXJjaCA9PT0gYi5zZWFyY2ggJiZcbiAgLy9hLmFjdGlvbiA9PT0gYi5hY3Rpb24gJiYgLy8gRGlmZmVyZW50IGFjdGlvbiAhPT0gbG9jYXRpb24gY2hhbmdlLlxuICBhLmtleSA9PT0gYi5rZXkgJiYgX2RlZXBFcXVhbDJbJ2RlZmF1bHQnXShhLnN0YXRlLCBiLnN0YXRlKTtcbn1cblxudmFyIERlZmF1bHRLZXlMZW5ndGggPSA2O1xuXG5mdW5jdGlvbiBjcmVhdGVIaXN0b3J5KCkge1xuICB2YXIgb3B0aW9ucyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMCB8fCBhcmd1bWVudHNbMF0gPT09IHVuZGVmaW5lZCA/IHt9IDogYXJndW1lbnRzWzBdO1xuICB2YXIgZ2V0Q3VycmVudExvY2F0aW9uID0gb3B0aW9ucy5nZXRDdXJyZW50TG9jYXRpb247XG4gIHZhciBmaW5pc2hUcmFuc2l0aW9uID0gb3B0aW9ucy5maW5pc2hUcmFuc2l0aW9uO1xuICB2YXIgc2F2ZVN0YXRlID0gb3B0aW9ucy5zYXZlU3RhdGU7XG4gIHZhciBnbyA9IG9wdGlvbnMuZ287XG4gIHZhciBrZXlMZW5ndGggPSBvcHRpb25zLmtleUxlbmd0aDtcbiAgdmFyIGdldFVzZXJDb25maXJtYXRpb24gPSBvcHRpb25zLmdldFVzZXJDb25maXJtYXRpb247XG5cbiAgaWYgKHR5cGVvZiBrZXlMZW5ndGggIT09ICdudW1iZXInKSBrZXlMZW5ndGggPSBEZWZhdWx0S2V5TGVuZ3RoO1xuXG4gIHZhciB0cmFuc2l0aW9uSG9va3MgPSBbXTtcblxuICBmdW5jdGlvbiBsaXN0ZW5CZWZvcmUoaG9vaykge1xuICAgIHRyYW5zaXRpb25Ib29rcy5wdXNoKGhvb2spO1xuXG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHRyYW5zaXRpb25Ib29rcyA9IHRyYW5zaXRpb25Ib29rcy5maWx0ZXIoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgdmFyIGFsbEtleXMgPSBbXTtcbiAgdmFyIGNoYW5nZUxpc3RlbmVycyA9IFtdO1xuICB2YXIgbG9jYXRpb24gPSB1bmRlZmluZWQ7XG5cbiAgZnVuY3Rpb24gZ2V0Q3VycmVudCgpIHtcbiAgICBpZiAocGVuZGluZ0xvY2F0aW9uICYmIHBlbmRpbmdMb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBPUCkge1xuICAgICAgcmV0dXJuIGFsbEtleXMuaW5kZXhPZihwZW5kaW5nTG9jYXRpb24ua2V5KTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uKSB7XG4gICAgICByZXR1cm4gYWxsS2V5cy5pbmRleE9mKGxvY2F0aW9uLmtleSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiB1cGRhdGVMb2NhdGlvbihuZXdMb2NhdGlvbikge1xuICAgIHZhciBjdXJyZW50ID0gZ2V0Q3VycmVudCgpO1xuXG4gICAgbG9jYXRpb24gPSBuZXdMb2NhdGlvbjtcblxuICAgIGlmIChsb2NhdGlvbi5hY3Rpb24gPT09IF9BY3Rpb25zLlBVU0gpIHtcbiAgICAgIGFsbEtleXMgPSBbXS5jb25jYXQoYWxsS2V5cy5zbGljZSgwLCBjdXJyZW50ICsgMSksIFtsb2NhdGlvbi5rZXldKTtcbiAgICB9IGVsc2UgaWYgKGxvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUkVQTEFDRSkge1xuICAgICAgYWxsS2V5c1tjdXJyZW50XSA9IGxvY2F0aW9uLmtleTtcbiAgICB9XG5cbiAgICBjaGFuZ2VMaXN0ZW5lcnMuZm9yRWFjaChmdW5jdGlvbiAobGlzdGVuZXIpIHtcbiAgICAgIGxpc3RlbmVyKGxvY2F0aW9uKTtcbiAgICB9KTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGxpc3RlbihsaXN0ZW5lcikge1xuICAgIGNoYW5nZUxpc3RlbmVycy5wdXNoKGxpc3RlbmVyKTtcblxuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgbGlzdGVuZXIobG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgX2xvY2F0aW9uID0gZ2V0Q3VycmVudExvY2F0aW9uKCk7XG4gICAgICBhbGxLZXlzID0gW19sb2NhdGlvbi5rZXldO1xuICAgICAgdXBkYXRlTG9jYXRpb24oX2xvY2F0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgY2hhbmdlTGlzdGVuZXJzID0gY2hhbmdlTGlzdGVuZXJzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICByZXR1cm4gaXRlbSAhPT0gbGlzdGVuZXI7XG4gICAgICB9KTtcbiAgICB9O1xuICB9XG5cbiAgZnVuY3Rpb24gY29uZmlybVRyYW5zaXRpb25Ubyhsb2NhdGlvbiwgY2FsbGJhY2spIHtcbiAgICBfQXN5bmNVdGlscy5sb29wQXN5bmModHJhbnNpdGlvbkhvb2tzLmxlbmd0aCwgZnVuY3Rpb24gKGluZGV4LCBuZXh0LCBkb25lKSB7XG4gICAgICBfcnVuVHJhbnNpdGlvbkhvb2syWydkZWZhdWx0J10odHJhbnNpdGlvbkhvb2tzW2luZGV4XSwgbG9jYXRpb24sIGZ1bmN0aW9uIChyZXN1bHQpIHtcbiAgICAgICAgaWYgKHJlc3VsdCAhPSBudWxsKSB7XG4gICAgICAgICAgZG9uZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5leHQoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSwgZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgIGlmIChnZXRVc2VyQ29uZmlybWF0aW9uICYmIHR5cGVvZiBtZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICBnZXRVc2VyQ29uZmlybWF0aW9uKG1lc3NhZ2UsIGZ1bmN0aW9uIChvaykge1xuICAgICAgICAgIGNhbGxiYWNrKG9rICE9PSBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY2FsbGJhY2sobWVzc2FnZSAhPT0gZmFsc2UpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgdmFyIHBlbmRpbmdMb2NhdGlvbiA9IHVuZGVmaW5lZDtcblxuICBmdW5jdGlvbiB0cmFuc2l0aW9uVG8obmV4dExvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uICYmIGxvY2F0aW9uc0FyZUVxdWFsKGxvY2F0aW9uLCBuZXh0TG9jYXRpb24pKSByZXR1cm47IC8vIE5vdGhpbmcgdG8gZG8uXG5cbiAgICBwZW5kaW5nTG9jYXRpb24gPSBuZXh0TG9jYXRpb247XG5cbiAgICBjb25maXJtVHJhbnNpdGlvblRvKG5leHRMb2NhdGlvbiwgZnVuY3Rpb24gKG9rKSB7XG4gICAgICBpZiAocGVuZGluZ0xvY2F0aW9uICE9PSBuZXh0TG9jYXRpb24pIHJldHVybjsgLy8gVHJhbnNpdGlvbiB3YXMgaW50ZXJydXB0ZWQuXG5cbiAgICAgIGlmIChvaykge1xuICAgICAgICAvLyB0cmVhdCBQVVNIIHRvIGN1cnJlbnQgcGF0aCBsaWtlIFJFUExBQ0UgdG8gYmUgY29uc2lzdGVudCB3aXRoIGJyb3dzZXJzXG4gICAgICAgIGlmIChuZXh0TG9jYXRpb24uYWN0aW9uID09PSBfQWN0aW9ucy5QVVNIKSB7XG4gICAgICAgICAgdmFyIHByZXZQYXRoID0gY3JlYXRlUGF0aChsb2NhdGlvbik7XG4gICAgICAgICAgdmFyIG5leHRQYXRoID0gY3JlYXRlUGF0aChuZXh0TG9jYXRpb24pO1xuXG4gICAgICAgICAgaWYgKG5leHRQYXRoID09PSBwcmV2UGF0aCkgbmV4dExvY2F0aW9uLmFjdGlvbiA9IF9BY3Rpb25zLlJFUExBQ0U7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZmluaXNoVHJhbnNpdGlvbihuZXh0TG9jYXRpb24pICE9PSBmYWxzZSkgdXBkYXRlTG9jYXRpb24obmV4dExvY2F0aW9uKTtcbiAgICAgIH0gZWxzZSBpZiAobG9jYXRpb24gJiYgbmV4dExvY2F0aW9uLmFjdGlvbiA9PT0gX0FjdGlvbnMuUE9QKSB7XG4gICAgICAgIHZhciBwcmV2SW5kZXggPSBhbGxLZXlzLmluZGV4T2YobG9jYXRpb24ua2V5KTtcbiAgICAgICAgdmFyIG5leHRJbmRleCA9IGFsbEtleXMuaW5kZXhPZihuZXh0TG9jYXRpb24ua2V5KTtcblxuICAgICAgICBpZiAocHJldkluZGV4ICE9PSAtMSAmJiBuZXh0SW5kZXggIT09IC0xKSBnbyhwcmV2SW5kZXggLSBuZXh0SW5kZXgpOyAvLyBSZXN0b3JlIHRoZSBVUkwuXG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBmdW5jdGlvbiBwdXNoKGxvY2F0aW9uKSB7XG4gICAgdHJhbnNpdGlvblRvKGNyZWF0ZUxvY2F0aW9uKGxvY2F0aW9uLCBfQWN0aW9ucy5QVVNILCBjcmVhdGVLZXkoKSkpO1xuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZShsb2NhdGlvbikge1xuICAgIHRyYW5zaXRpb25UbyhjcmVhdGVMb2NhdGlvbihsb2NhdGlvbiwgX0FjdGlvbnMuUkVQTEFDRSwgY3JlYXRlS2V5KCkpKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGdvQmFjaygpIHtcbiAgICBnbygtMSk7XG4gIH1cblxuICBmdW5jdGlvbiBnb0ZvcndhcmQoKSB7XG4gICAgZ28oMSk7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVLZXkoKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVJhbmRvbUtleShrZXlMZW5ndGgpO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlUGF0aChsb2NhdGlvbikge1xuICAgIGlmIChsb2NhdGlvbiA9PSBudWxsIHx8IHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIHJldHVybiBsb2NhdGlvbjtcblxuICAgIHZhciBwYXRobmFtZSA9IGxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2g7XG4gICAgdmFyIGhhc2ggPSBsb2NhdGlvbi5oYXNoO1xuXG4gICAgdmFyIHJlc3VsdCA9IHBhdGhuYW1lO1xuXG4gICAgaWYgKHNlYXJjaCkgcmVzdWx0ICs9IHNlYXJjaDtcblxuICAgIGlmIChoYXNoKSByZXN1bHQgKz0gaGFzaDtcblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICBmdW5jdGlvbiBjcmVhdGVIcmVmKGxvY2F0aW9uKSB7XG4gICAgcmV0dXJuIGNyZWF0ZVBhdGgobG9jYXRpb24pO1xuICB9XG5cbiAgZnVuY3Rpb24gY3JlYXRlTG9jYXRpb24obG9jYXRpb24sIGFjdGlvbikge1xuICAgIHZhciBrZXkgPSBhcmd1bWVudHMubGVuZ3RoIDw9IDIgfHwgYXJndW1lbnRzWzJdID09PSB1bmRlZmluZWQgPyBjcmVhdGVLZXkoKSA6IGFyZ3VtZW50c1syXTtcblxuICAgIGlmICh0eXBlb2YgYWN0aW9uID09PSAnb2JqZWN0Jykge1xuICAgICAgLy93YXJuaW5nKFxuICAgICAgLy8gIGZhbHNlLFxuICAgICAgLy8gICdUaGUgc3RhdGUgKDJuZCkgYXJndW1lbnQgdG8gaGlzdG9yeS5jcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAgIC8vICAnbG9jYXRpb24gZGVzY3JpcHRvciBpbnN0ZWFkJ1xuICAgICAgLy8pXG5cbiAgICAgIGlmICh0eXBlb2YgbG9jYXRpb24gPT09ICdzdHJpbmcnKSBsb2NhdGlvbiA9IF9wYXJzZVBhdGgyWydkZWZhdWx0J10obG9jYXRpb24pO1xuXG4gICAgICBsb2NhdGlvbiA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbiwgeyBzdGF0ZTogYWN0aW9uIH0pO1xuXG4gICAgICBhY3Rpb24gPSBrZXk7XG4gICAgICBrZXkgPSBhcmd1bWVudHNbM10gfHwgY3JlYXRlS2V5KCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jcmVhdGVMb2NhdGlvbjNbJ2RlZmF1bHQnXShsb2NhdGlvbiwgYWN0aW9uLCBrZXkpO1xuICB9XG5cbiAgLy8gZGVwcmVjYXRlZFxuICBmdW5jdGlvbiBzZXRTdGF0ZShzdGF0ZSkge1xuICAgIGlmIChsb2NhdGlvbikge1xuICAgICAgdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpO1xuICAgICAgdXBkYXRlTG9jYXRpb24obG9jYXRpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVMb2NhdGlvblN0YXRlKGdldEN1cnJlbnRMb2NhdGlvbigpLCBzdGF0ZSk7XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gdXBkYXRlTG9jYXRpb25TdGF0ZShsb2NhdGlvbiwgc3RhdGUpIHtcbiAgICBsb2NhdGlvbi5zdGF0ZSA9IF9leHRlbmRzKHt9LCBsb2NhdGlvbi5zdGF0ZSwgc3RhdGUpO1xuICAgIHNhdmVTdGF0ZShsb2NhdGlvbi5rZXksIGxvY2F0aW9uLnN0YXRlKTtcbiAgfVxuXG4gIC8vIGRlcHJlY2F0ZWRcbiAgZnVuY3Rpb24gcmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgaWYgKHRyYW5zaXRpb25Ib29rcy5pbmRleE9mKGhvb2spID09PSAtMSkgdHJhbnNpdGlvbkhvb2tzLnB1c2goaG9vayk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vayhob29rKSB7XG4gICAgdHJhbnNpdGlvbkhvb2tzID0gdHJhbnNpdGlvbkhvb2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgcmV0dXJuIGl0ZW0gIT09IGhvb2s7XG4gICAgfSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHB1c2hTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcHVzaChfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICAvLyBkZXByZWNhdGVkXG4gIGZ1bmN0aW9uIHJlcGxhY2VTdGF0ZShzdGF0ZSwgcGF0aCkge1xuICAgIGlmICh0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycpIHBhdGggPSBfcGFyc2VQYXRoMlsnZGVmYXVsdCddKHBhdGgpO1xuXG4gICAgcmVwbGFjZShfZXh0ZW5kcyh7IHN0YXRlOiBzdGF0ZSB9LCBwYXRoKSk7XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGxpc3RlbkJlZm9yZTogbGlzdGVuQmVmb3JlLFxuICAgIGxpc3RlbjogbGlzdGVuLFxuICAgIHRyYW5zaXRpb25UbzogdHJhbnNpdGlvblRvLFxuICAgIHB1c2g6IHB1c2gsXG4gICAgcmVwbGFjZTogcmVwbGFjZSxcbiAgICBnbzogZ28sXG4gICAgZ29CYWNrOiBnb0JhY2ssXG4gICAgZ29Gb3J3YXJkOiBnb0ZvcndhcmQsXG4gICAgY3JlYXRlS2V5OiBjcmVhdGVLZXksXG4gICAgY3JlYXRlUGF0aDogY3JlYXRlUGF0aCxcbiAgICBjcmVhdGVIcmVmOiBjcmVhdGVIcmVmLFxuICAgIGNyZWF0ZUxvY2F0aW9uOiBjcmVhdGVMb2NhdGlvbixcblxuICAgIHNldFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHNldFN0YXRlLCAnc2V0U3RhdGUgaXMgZGVwcmVjYXRlZDsgdXNlIGxvY2F0aW9uLmtleSB0byBzYXZlIHN0YXRlIGluc3RlYWQnKSxcbiAgICByZWdpc3RlclRyYW5zaXRpb25Ib29rOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICdyZWdpc3RlclRyYW5zaXRpb25Ib29rIGlzIGRlcHJlY2F0ZWQ7IHVzZSBsaXN0ZW5CZWZvcmUgaW5zdGVhZCcpLFxuICAgIHVucmVnaXN0ZXJUcmFuc2l0aW9uSG9vazogX2RlcHJlY2F0ZTJbJ2RlZmF1bHQnXSh1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2ssICd1bnJlZ2lzdGVyVHJhbnNpdGlvbkhvb2sgaXMgZGVwcmVjYXRlZDsgdXNlIHRoZSBjYWxsYmFjayByZXR1cm5lZCBmcm9tIGxpc3RlbkJlZm9yZSBpbnN0ZWFkJyksXG4gICAgcHVzaFN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHB1c2hTdGF0ZSwgJ3B1c2hTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcHVzaCBpbnN0ZWFkJyksXG4gICAgcmVwbGFjZVN0YXRlOiBfZGVwcmVjYXRlMlsnZGVmYXVsdCddKHJlcGxhY2VTdGF0ZSwgJ3JlcGxhY2VTdGF0ZSBpcyBkZXByZWNhdGVkOyB1c2UgcmVwbGFjZSBpbnN0ZWFkJylcbiAgfTtcbn1cblxuZXhwb3J0c1snZGVmYXVsdCddID0gY3JlYXRlSGlzdG9yeTtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcbid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxudmFyIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiAodGFyZ2V0KSB7IGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7IHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07IGZvciAodmFyIGtleSBpbiBzb3VyY2UpIHsgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHsgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTsgfSB9IH0gcmV0dXJuIHRhcmdldDsgfTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX0FjdGlvbnMgPSByZXF1aXJlKCcuL0FjdGlvbnMnKTtcblxudmFyIF9wYXJzZVBhdGggPSByZXF1aXJlKCcuL3BhcnNlUGF0aCcpO1xuXG52YXIgX3BhcnNlUGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9wYXJzZVBhdGgpO1xuXG5mdW5jdGlvbiBjcmVhdGVMb2NhdGlvbigpIHtcbiAgdmFyIGxvY2F0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAwIHx8IGFyZ3VtZW50c1swXSA9PT0gdW5kZWZpbmVkID8gJy8nIDogYXJndW1lbnRzWzBdO1xuICB2YXIgYWN0aW9uID0gYXJndW1lbnRzLmxlbmd0aCA8PSAxIHx8IGFyZ3VtZW50c1sxXSA9PT0gdW5kZWZpbmVkID8gX0FjdGlvbnMuUE9QIDogYXJndW1lbnRzWzFdO1xuICB2YXIga2V5ID0gYXJndW1lbnRzLmxlbmd0aCA8PSAyIHx8IGFyZ3VtZW50c1syXSA9PT0gdW5kZWZpbmVkID8gbnVsbCA6IGFyZ3VtZW50c1syXTtcblxuICB2YXIgX2ZvdXJ0aEFyZyA9IGFyZ3VtZW50cy5sZW5ndGggPD0gMyB8fCBhcmd1bWVudHNbM10gPT09IHVuZGVmaW5lZCA/IG51bGwgOiBhcmd1bWVudHNbM107XG5cbiAgaWYgKHR5cGVvZiBsb2NhdGlvbiA9PT0gJ3N0cmluZycpIGxvY2F0aW9uID0gX3BhcnNlUGF0aDJbJ2RlZmF1bHQnXShsb2NhdGlvbik7XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdvYmplY3QnKSB7XG4gICAgLy93YXJuaW5nKFxuICAgIC8vICBmYWxzZSxcbiAgICAvLyAgJ1RoZSBzdGF0ZSAoMm5kKSBhcmd1bWVudCB0byBjcmVhdGVMb2NhdGlvbiBpcyBkZXByZWNhdGVkOyB1c2UgYSAnICtcbiAgICAvLyAgJ2xvY2F0aW9uIGRlc2NyaXB0b3IgaW5zdGVhZCdcbiAgICAvLylcblxuICAgIGxvY2F0aW9uID0gX2V4dGVuZHMoe30sIGxvY2F0aW9uLCB7IHN0YXRlOiBhY3Rpb24gfSk7XG5cbiAgICBhY3Rpb24gPSBrZXkgfHwgX0FjdGlvbnMuUE9QO1xuICAgIGtleSA9IF9mb3VydGhBcmc7XG4gIH1cblxuICB2YXIgcGF0aG5hbWUgPSBsb2NhdGlvbi5wYXRobmFtZSB8fCAnLyc7XG4gIHZhciBzZWFyY2ggPSBsb2NhdGlvbi5zZWFyY2ggfHwgJyc7XG4gIHZhciBoYXNoID0gbG9jYXRpb24uaGFzaCB8fCAnJztcbiAgdmFyIHN0YXRlID0gbG9jYXRpb24uc3RhdGUgfHwgbnVsbDtcblxuICByZXR1cm4ge1xuICAgIHBhdGhuYW1lOiBwYXRobmFtZSxcbiAgICBzZWFyY2g6IHNlYXJjaCxcbiAgICBoYXNoOiBoYXNoLFxuICAgIHN0YXRlOiBzdGF0ZSxcbiAgICBhY3Rpb246IGFjdGlvbixcbiAgICBrZXk6IGtleVxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBjcmVhdGVMb2NhdGlvbjtcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsIi8vaW1wb3J0IHdhcm5pbmcgZnJvbSAnd2FybmluZydcblxuXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5mdW5jdGlvbiBkZXByZWNhdGUoZm4pIHtcbiAgcmV0dXJuIGZuO1xuICAvL3JldHVybiBmdW5jdGlvbiAoKSB7XG4gIC8vICB3YXJuaW5nKGZhbHNlLCAnW2hpc3RvcnldICcgKyBtZXNzYWdlKVxuICAvLyAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cylcbiAgLy99XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZGVwcmVjYXRlO1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzW1wiZGVmYXVsdFwiXTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcbmZ1bmN0aW9uIGV4dHJhY3RQYXRoKHN0cmluZykge1xuICB2YXIgbWF0Y2ggPSBzdHJpbmcubWF0Y2goL15odHRwcz86XFwvXFwvW15cXC9dKi8pO1xuXG4gIGlmIChtYXRjaCA9PSBudWxsKSByZXR1cm4gc3RyaW5nO1xuXG4gIHJldHVybiBzdHJpbmcuc3Vic3RyaW5nKG1hdGNoWzBdLmxlbmd0aCk7XG59XG5cbmV4cG9ydHNbXCJkZWZhdWx0XCJdID0gZXh0cmFjdFBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbXCJkZWZhdWx0XCJdOyIsIid1c2Ugc3RyaWN0JztcblxuZXhwb3J0cy5fX2VzTW9kdWxlID0gdHJ1ZTtcblxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHsgcmV0dXJuIG9iaiAmJiBvYmouX19lc01vZHVsZSA/IG9iaiA6IHsgJ2RlZmF1bHQnOiBvYmogfTsgfVxuXG52YXIgX3dhcm5pbmcgPSByZXF1aXJlKCd3YXJuaW5nJyk7XG5cbnZhciBfd2FybmluZzIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF93YXJuaW5nKTtcblxudmFyIF9leHRyYWN0UGF0aCA9IHJlcXVpcmUoJy4vZXh0cmFjdFBhdGgnKTtcblxudmFyIF9leHRyYWN0UGF0aDIgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KF9leHRyYWN0UGF0aCk7XG5cbmZ1bmN0aW9uIHBhcnNlUGF0aChwYXRoKSB7XG4gIHZhciBwYXRobmFtZSA9IF9leHRyYWN0UGF0aDJbJ2RlZmF1bHQnXShwYXRoKTtcbiAgdmFyIHNlYXJjaCA9ICcnO1xuICB2YXIgaGFzaCA9ICcnO1xuXG4gIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicgPyBfd2FybmluZzJbJ2RlZmF1bHQnXShwYXRoID09PSBwYXRobmFtZSwgJ0EgcGF0aCBtdXN0IGJlIHBhdGhuYW1lICsgc2VhcmNoICsgaGFzaCBvbmx5LCBub3QgYSBmdWxseSBxdWFsaWZpZWQgVVJMIGxpa2UgXCIlc1wiJywgcGF0aCkgOiB1bmRlZmluZWQ7XG5cbiAgdmFyIGhhc2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJyMnKTtcbiAgaWYgKGhhc2hJbmRleCAhPT0gLTEpIHtcbiAgICBoYXNoID0gcGF0aG5hbWUuc3Vic3RyaW5nKGhhc2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgaGFzaEluZGV4KTtcbiAgfVxuXG4gIHZhciBzZWFyY2hJbmRleCA9IHBhdGhuYW1lLmluZGV4T2YoJz8nKTtcbiAgaWYgKHNlYXJjaEluZGV4ICE9PSAtMSkge1xuICAgIHNlYXJjaCA9IHBhdGhuYW1lLnN1YnN0cmluZyhzZWFyY2hJbmRleCk7XG4gICAgcGF0aG5hbWUgPSBwYXRobmFtZS5zdWJzdHJpbmcoMCwgc2VhcmNoSW5kZXgpO1xuICB9XG5cbiAgaWYgKHBhdGhuYW1lID09PSAnJykgcGF0aG5hbWUgPSAnLyc7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZTogcGF0aG5hbWUsXG4gICAgc2VhcmNoOiBzZWFyY2gsXG4gICAgaGFzaDogaGFzaFxuICB9O1xufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBwYXJzZVBhdGg7XG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHNbJ2RlZmF1bHQnXTsiLCIndXNlIHN0cmljdCc7XG5cbmV4cG9ydHMuX19lc01vZHVsZSA9IHRydWU7XG5cbmZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7IHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7ICdkZWZhdWx0Jzogb2JqIH07IH1cblxudmFyIF93YXJuaW5nID0gcmVxdWlyZSgnd2FybmluZycpO1xuXG52YXIgX3dhcm5pbmcyID0gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChfd2FybmluZyk7XG5cbmZ1bmN0aW9uIHJ1blRyYW5zaXRpb25Ib29rKGhvb2ssIGxvY2F0aW9uLCBjYWxsYmFjaykge1xuICB2YXIgcmVzdWx0ID0gaG9vayhsb2NhdGlvbiwgY2FsbGJhY2spO1xuXG4gIGlmIChob29rLmxlbmd0aCA8IDIpIHtcbiAgICAvLyBBc3N1bWUgdGhlIGhvb2sgcnVucyBzeW5jaHJvbm91c2x5IGFuZCBhdXRvbWF0aWNhbGx5XG4gICAgLy8gY2FsbCB0aGUgY2FsbGJhY2sgd2l0aCB0aGUgcmV0dXJuIHZhbHVlLlxuICAgIGNhbGxiYWNrKHJlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJyA/IF93YXJuaW5nMlsnZGVmYXVsdCddKHJlc3VsdCA9PT0gdW5kZWZpbmVkLCAnWW91IHNob3VsZCBub3QgXCJyZXR1cm5cIiBpbiBhIHRyYW5zaXRpb24gaG9vayB3aXRoIGEgY2FsbGJhY2sgYXJndW1lbnQ7IGNhbGwgdGhlIGNhbGxiYWNrIGluc3RlYWQnKSA6IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnRzWydkZWZhdWx0J10gPSBydW5UcmFuc2l0aW9uSG9vaztcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0c1snZGVmYXVsdCddOyIsInZhciBwU2xpY2UgPSBBcnJheS5wcm90b3R5cGUuc2xpY2U7XG52YXIgb2JqZWN0S2V5cyA9IHJlcXVpcmUoJy4vbGliL2tleXMuanMnKTtcbnZhciBpc0FyZ3VtZW50cyA9IHJlcXVpcmUoJy4vbGliL2lzX2FyZ3VtZW50cy5qcycpO1xuXG52YXIgZGVlcEVxdWFsID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYWN0dWFsLCBleHBlY3RlZCwgb3B0cykge1xuICBpZiAoIW9wdHMpIG9wdHMgPSB7fTtcbiAgLy8gNy4xLiBBbGwgaWRlbnRpY2FsIHZhbHVlcyBhcmUgZXF1aXZhbGVudCwgYXMgZGV0ZXJtaW5lZCBieSA9PT0uXG4gIGlmIChhY3R1YWwgPT09IGV4cGVjdGVkKSB7XG4gICAgcmV0dXJuIHRydWU7XG5cbiAgfSBlbHNlIGlmIChhY3R1YWwgaW5zdGFuY2VvZiBEYXRlICYmIGV4cGVjdGVkIGluc3RhbmNlb2YgRGF0ZSkge1xuICAgIHJldHVybiBhY3R1YWwuZ2V0VGltZSgpID09PSBleHBlY3RlZC5nZXRUaW1lKCk7XG5cbiAgLy8gNy4zLiBPdGhlciBwYWlycyB0aGF0IGRvIG5vdCBib3RoIHBhc3MgdHlwZW9mIHZhbHVlID09ICdvYmplY3QnLFxuICAvLyBlcXVpdmFsZW5jZSBpcyBkZXRlcm1pbmVkIGJ5ID09LlxuICB9IGVsc2UgaWYgKCFhY3R1YWwgfHwgIWV4cGVjdGVkIHx8IHR5cGVvZiBhY3R1YWwgIT0gJ29iamVjdCcgJiYgdHlwZW9mIGV4cGVjdGVkICE9ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIG9wdHMuc3RyaWN0ID8gYWN0dWFsID09PSBleHBlY3RlZCA6IGFjdHVhbCA9PSBleHBlY3RlZDtcblxuICAvLyA3LjQuIEZvciBhbGwgb3RoZXIgT2JqZWN0IHBhaXJzLCBpbmNsdWRpbmcgQXJyYXkgb2JqZWN0cywgZXF1aXZhbGVuY2UgaXNcbiAgLy8gZGV0ZXJtaW5lZCBieSBoYXZpbmcgdGhlIHNhbWUgbnVtYmVyIG9mIG93bmVkIHByb3BlcnRpZXMgKGFzIHZlcmlmaWVkXG4gIC8vIHdpdGggT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKSwgdGhlIHNhbWUgc2V0IG9mIGtleXNcbiAgLy8gKGFsdGhvdWdoIG5vdCBuZWNlc3NhcmlseSB0aGUgc2FtZSBvcmRlciksIGVxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeVxuICAvLyBjb3JyZXNwb25kaW5nIGtleSwgYW5kIGFuIGlkZW50aWNhbCAncHJvdG90eXBlJyBwcm9wZXJ0eS4gTm90ZTogdGhpc1xuICAvLyBhY2NvdW50cyBmb3IgYm90aCBuYW1lZCBhbmQgaW5kZXhlZCBwcm9wZXJ0aWVzIG9uIEFycmF5cy5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gb2JqRXF1aXYoYWN0dWFsLCBleHBlY3RlZCwgb3B0cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNVbmRlZmluZWRPck51bGwodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzQnVmZmVyICh4KSB7XG4gIGlmICgheCB8fCB0eXBlb2YgeCAhPT0gJ29iamVjdCcgfHwgdHlwZW9mIHgubGVuZ3RoICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICBpZiAodHlwZW9mIHguY29weSAhPT0gJ2Z1bmN0aW9uJyB8fCB0eXBlb2YgeC5zbGljZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoeC5sZW5ndGggPiAwICYmIHR5cGVvZiB4WzBdICE9PSAnbnVtYmVyJykgcmV0dXJuIGZhbHNlO1xuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gb2JqRXF1aXYoYSwgYiwgb3B0cykge1xuICB2YXIgaSwga2V5O1xuICBpZiAoaXNVbmRlZmluZWRPck51bGwoYSkgfHwgaXNVbmRlZmluZWRPck51bGwoYikpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvLyBhbiBpZGVudGljYWwgJ3Byb3RvdHlwZScgcHJvcGVydHkuXG4gIGlmIChhLnByb3RvdHlwZSAhPT0gYi5wcm90b3R5cGUpIHJldHVybiBmYWxzZTtcbiAgLy9+fn5JJ3ZlIG1hbmFnZWQgdG8gYnJlYWsgT2JqZWN0LmtleXMgdGhyb3VnaCBzY3Jld3kgYXJndW1lbnRzIHBhc3NpbmcuXG4gIC8vICAgQ29udmVydGluZyB0byBhcnJheSBzb2x2ZXMgdGhlIHByb2JsZW0uXG4gIGlmIChpc0FyZ3VtZW50cyhhKSkge1xuICAgIGlmICghaXNBcmd1bWVudHMoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgYSA9IHBTbGljZS5jYWxsKGEpO1xuICAgIGIgPSBwU2xpY2UuY2FsbChiKTtcbiAgICByZXR1cm4gZGVlcEVxdWFsKGEsIGIsIG9wdHMpO1xuICB9XG4gIGlmIChpc0J1ZmZlcihhKSkge1xuICAgIGlmICghaXNCdWZmZXIoYikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGEubGVuZ3RoICE9PSBiLmxlbmd0aCkgcmV0dXJuIGZhbHNlO1xuICAgIGZvciAoaSA9IDA7IGkgPCBhLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpZiAoYVtpXSAhPT0gYltpXSkgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB0cnkge1xuICAgIHZhciBrYSA9IG9iamVjdEtleXMoYSksXG4gICAgICAgIGtiID0gb2JqZWN0S2V5cyhiKTtcbiAgfSBjYXRjaCAoZSkgey8vaGFwcGVucyB3aGVuIG9uZSBpcyBhIHN0cmluZyBsaXRlcmFsIGFuZCB0aGUgb3RoZXIgaXNuJ3RcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgLy8gaGF2aW5nIHRoZSBzYW1lIG51bWJlciBvZiBvd25lZCBwcm9wZXJ0aWVzIChrZXlzIGluY29ycG9yYXRlc1xuICAvLyBoYXNPd25Qcm9wZXJ0eSlcbiAgaWYgKGthLmxlbmd0aCAhPSBrYi5sZW5ndGgpXG4gICAgcmV0dXJuIGZhbHNlO1xuICAvL3RoZSBzYW1lIHNldCBvZiBrZXlzIChhbHRob3VnaCBub3QgbmVjZXNzYXJpbHkgdGhlIHNhbWUgb3JkZXIpLFxuICBrYS5zb3J0KCk7XG4gIGtiLnNvcnQoKTtcbiAgLy9+fn5jaGVhcCBrZXkgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGlmIChrYVtpXSAhPSBrYltpXSlcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICAvL2VxdWl2YWxlbnQgdmFsdWVzIGZvciBldmVyeSBjb3JyZXNwb25kaW5nIGtleSwgYW5kXG4gIC8vfn5+cG9zc2libHkgZXhwZW5zaXZlIGRlZXAgdGVzdFxuICBmb3IgKGkgPSBrYS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgIGtleSA9IGthW2ldO1xuICAgIGlmICghZGVlcEVxdWFsKGFba2V5XSwgYltrZXldLCBvcHRzKSkgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiB0eXBlb2YgYSA9PT0gdHlwZW9mIGI7XG59XG4iLCJ2YXIgc3VwcG9ydHNBcmd1bWVudHNDbGFzcyA9IChmdW5jdGlvbigpe1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKGFyZ3VtZW50cylcbn0pKCkgPT0gJ1tvYmplY3QgQXJndW1lbnRzXSc7XG5cbmV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHN1cHBvcnRzQXJndW1lbnRzQ2xhc3MgPyBzdXBwb3J0ZWQgOiB1bnN1cHBvcnRlZDtcblxuZXhwb3J0cy5zdXBwb3J0ZWQgPSBzdXBwb3J0ZWQ7XG5mdW5jdGlvbiBzdXBwb3J0ZWQob2JqZWN0KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KSA9PSAnW29iamVjdCBBcmd1bWVudHNdJztcbn07XG5cbmV4cG9ydHMudW5zdXBwb3J0ZWQgPSB1bnN1cHBvcnRlZDtcbmZ1bmN0aW9uIHVuc3VwcG9ydGVkKG9iamVjdCl7XG4gIHJldHVybiBvYmplY3QgJiZcbiAgICB0eXBlb2Ygb2JqZWN0ID09ICdvYmplY3QnICYmXG4gICAgdHlwZW9mIG9iamVjdC5sZW5ndGggPT0gJ251bWJlcicgJiZcbiAgICBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCAnY2FsbGVlJykgJiZcbiAgICAhT2JqZWN0LnByb3RvdHlwZS5wcm9wZXJ0eUlzRW51bWVyYWJsZS5jYWxsKG9iamVjdCwgJ2NhbGxlZScpIHx8XG4gICAgZmFsc2U7XG59O1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIE9iamVjdC5rZXlzID09PSAnZnVuY3Rpb24nXG4gID8gT2JqZWN0LmtleXMgOiBzaGltO1xuXG5leHBvcnRzLnNoaW0gPSBzaGltO1xuZnVuY3Rpb24gc2hpbSAob2JqKSB7XG4gIHZhciBrZXlzID0gW107XG4gIGZvciAodmFyIGtleSBpbiBvYmopIGtleXMucHVzaChrZXkpO1xuICByZXR1cm4ga2V5cztcbn1cbiJdfQ==
