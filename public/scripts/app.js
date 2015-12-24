(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error("Cannot find module '"+o+"'")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Main = _react2.default.createClass({
  displayName: 'Main',

  render: function render() {
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
        _react2.default.createElement('input', { onClick: this.handleClick, className: 'button-primary', type: 'button', value: 'Next verse' })
      )
    );
  },
  getInitialState: function getInitialState() {
    return {
      verse: '',
      reference: ''
    };
  },
  getRandomVerse: function getRandomVerse() {
    $.getJSON('/api/v1.0/verse/random/', (function (data) {
      if (this.isMounted()) {
        this.setState({
          verse: data.text,
          reference: data.reference
        });
      }
    }).bind(this));
  },
  componentDidMount: function componentDidMount() {
    this.getRandomVerse();
  },
  handleClick: function handleClick() {
    this.getRandomVerse();
  }
});

(0, _reactDom.render)(_react2.default.createElement(Main, { title: 'Page' }), document.getElementById('app'));

},{"react":"b6Dds6","react-dom":"Ld8xHf","react-router":"F6am2D"}]},{},[1])
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkY6XFxSS1xcUHJvamVjdHNcXFJhbmRvbVZlcnNlXFxyYW5kb20tdmVyc2VcXG5vZGVfbW9kdWxlc1xcZ3VscC1icm93c2VyaWZ5XFxub2RlX21vZHVsZXNcXGJyb3dzZXJpZnlcXG5vZGVfbW9kdWxlc1xcYnJvd3Nlci1wYWNrXFxfcHJlbHVkZS5qcyIsImZha2VfYmMzN2I0MTcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7QUNJQSxJQUFJLElBQUksR0FBRyxnQkFBTSxXQUFXLENBQUM7OztBQUMzQixRQUFNLEVBQUUsa0JBQVc7QUFDakIsV0FDRTs7UUFBSyxTQUFTLEVBQUMsV0FBVztNQUN4Qjs7VUFBSyxTQUFTLEVBQUMsS0FBSztRQUNsQjs7WUFBSyxTQUFTLEVBQUMsc0JBQXNCO1VBQ25DOzs7WUFBSyxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUs7V0FBTTtVQUMzQjs7Y0FBRyxTQUFTLEVBQUMsT0FBTztZQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSztXQUFLO1VBQzNDOztjQUFHLFNBQVMsRUFBQyxXQUFXO1lBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxTQUFTO1dBQUs7U0FDL0M7T0FDRjtNQUNOOztVQUFLLFNBQVMsRUFBQyxLQUFLO1FBQ2xCLHlDQUFPLE9BQU8sRUFBRSxJQUFJLENBQUMsV0FBVyxBQUFDLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsS0FBSyxFQUFDLFlBQVksR0FBRTtPQUMzRjtLQUNGLENBQ047R0FDSDtBQUNELGlCQUFlLEVBQUUsMkJBQVc7QUFDeEIsV0FBTztBQUNILFdBQUssRUFBRSxFQUFFO0FBQ1QsZUFBUyxFQUFFLEVBQUU7S0FDaEIsQ0FBQztHQUNMO0FBQ0QsZ0JBQWMsRUFBRSwwQkFBVztBQUN6QixLQUFDLENBQUMsT0FBTyxDQUFDLHlCQUF5QixFQUFFLENBQUEsVUFBUyxJQUFJLEVBQUU7QUFDbEQsVUFBSSxJQUFJLENBQUMsU0FBUyxFQUFFLEVBQUU7QUFDcEIsWUFBSSxDQUFDLFFBQVEsQ0FBQztBQUNaLGVBQUssRUFBRSxJQUFJLENBQUMsSUFBSTtBQUNoQixtQkFBUyxFQUFFLElBQUksQ0FBQyxTQUFTO1NBQzFCLENBQUMsQ0FBQztPQUNKO0tBQ0YsQ0FBQSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0dBQ2Y7QUFDRCxtQkFBaUIsRUFBRSw2QkFBVztBQUM1QixRQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7R0FDdkI7QUFDRCxhQUFXLEVBQUUsdUJBQVc7QUFDdEIsUUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0dBQ3ZCO0NBQ0YsQ0FBQyxDQUFDOztBQUVILGNBNUNTLE1BQU0sRUE2Q2IsOEJBQUMsSUFBSSxJQUFDLEtBQUssRUFBQyxNQUFNLEdBQUUsRUFDcEIsUUFBUSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FDL0IsQ0FBQyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpfXZhciBmPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChmLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGYsZi5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3JlYWN0LWRvbSdcclxuaW1wb3J0IHsgYnJvd3Nlckhpc3RvcnksIFJvdXRlciwgUm91dGUsIExpbmsgfSBmcm9tICdyZWFjdC1yb3V0ZXInXHJcblxyXG5sZXQgTWFpbiA9IFJlYWN0LmNyZWF0ZUNsYXNzKHtcclxuICByZW5kZXI6IGZ1bmN0aW9uKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvbmUtaGFsZiBjb2x1bW4gdGVzdFwiPlxyXG4gICAgICAgICAgICA8aDQ+e3RoaXMucHJvcHMudGl0bGV9PC9oND5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidmVyc2VcIj57dGhpcy5zdGF0ZS52ZXJzZX08L3A+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInJlZmVyZW5jZVwiPnt0aGlzLnN0YXRlLnJlZmVyZW5jZX08L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgPGlucHV0IG9uQ2xpY2s9e3RoaXMuaGFuZGxlQ2xpY2t9IGNsYXNzTmFtZT1cImJ1dHRvbi1wcmltYXJ5XCIgdHlwZT1cImJ1dHRvblwiIHZhbHVlPVwiTmV4dCB2ZXJzZVwiLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH0sXHJcbiAgZ2V0SW5pdGlhbFN0YXRlOiBmdW5jdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIHZlcnNlOiAnJyxcclxuICAgICAgICAgIHJlZmVyZW5jZTogJydcclxuICAgICAgfTtcclxuICB9LFxyXG4gIGdldFJhbmRvbVZlcnNlOiBmdW5jdGlvbigpIHtcclxuICAgICQuZ2V0SlNPTignL2FwaS92MS4wL3ZlcnNlL3JhbmRvbS8nLCBmdW5jdGlvbihkYXRhKSB7XHJcbiAgICAgIGlmICh0aGlzLmlzTW91bnRlZCgpKSB7XHJcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7XHJcbiAgICAgICAgICB2ZXJzZTogZGF0YS50ZXh0LFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiBkYXRhLnJlZmVyZW5jZVxyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICB9LmJpbmQodGhpcykpO1xyXG4gIH0sXHJcbiAgY29tcG9uZW50RGlkTW91bnQ6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5nZXRSYW5kb21WZXJzZSgpO1xyXG4gIH0sXHJcbiAgaGFuZGxlQ2xpY2s6IGZ1bmN0aW9uKCkge1xyXG4gICAgdGhpcy5nZXRSYW5kb21WZXJzZSgpO1xyXG4gIH1cclxufSk7XHJcblxyXG5yZW5kZXIoXHJcbiAgPE1haW4gdGl0bGU9J1BhZ2UnLz4sXHJcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2FwcCcpXHJcbik7XHJcbiJdfQ==
