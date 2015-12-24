(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var Main = _react2.default.createClass({
  displayName: 'Main',

  render: function render() {
    return _react2.default.createElement('div', { className: 'container' }, _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('div', { className: 'one-half column test' }, _react2.default.createElement('h4', null, this.props.title), _react2.default.createElement('p', { className: 'verse' }, this.state.verse), _react2.default.createElement('p', { className: 'reference' }, this.state.reference))), _react2.default.createElement('div', { className: 'row' }, _react2.default.createElement('input', { onClick: this.handleClick, className: 'button-primary', type: 'button', value: 'Next verse' })));
  },
  getInitialState: function getInitialState() {
    return {
      verse: '',
      reference: ''
    };
  },
  getRandomVerse: function getRandomVerse() {
    $.get('/api/v1.0/verse/random/', (function (data) {
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

(0, _reactDom.render)(_react2.default.createElement(Main, null), document.getElementById('app'));

},{"react":"react","react-dom":"react-dom","react-router":"react-router"}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJjbGllbnRcXHNjcmlwdHNcXG1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ0lBLElBQUksSUFBSSxHQUFHLGdCQUFNLFdBQVcsQ0FBQztxQkFDM0I7O1FBQU0sRUFBRSxrQkFBVyxBQUNqQjtXQUNFLHVDQUFLLFNBQVMsRUFBQyxXQUFXLElBQ3hCLHVDQUFLLFNBQVMsRUFBQyxLQUFLLElBQ2xCLHVDQUFLLFNBQVMsRUFBQyxzQkFBc0IsSUFDbkMsMENBQUssSUFBSSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQU0sRUFDM0IscUNBQUcsU0FBUyxFQUFDLE9BQU8sSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBSyxFQUMzQyxxQ0FBRyxTQUFTLEVBQUMsV0FBVyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFLLENBQy9DLENBQ0YsRUFDTix1Q0FBSyxTQUFTLEVBQUMsS0FBSyxJQUNsQix5Q0FBTyxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsQUFBQyxFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxJQUFJLEVBQUMsUUFBUSxFQUFDLEtBQUssRUFBQyxZQUFZLEdBQUUsQ0FDM0YsQ0FDRixDQUNOO0dBQ0gsQUFDRDtpQkFBZSxFQUFFLDJCQUFXLEFBQ3hCO1dBQU8sQUFDSDtXQUFLLEVBQUUsRUFBRSxBQUNUO2VBQVMsRUFBRSxFQUFFO0tBQ2hCLENBQUM7R0FDTCxBQUNEO2dCQUFjLEVBQUUsMEJBQVcsQUFDekI7S0FBQyxDQUFDLEdBQUcsQ0FBQyx5QkFBeUIsRUFBRSxDQUFBLFVBQVMsSUFBSSxFQUFFLEFBQzlDO1VBQUksSUFBSSxDQUFDLFNBQVMsRUFBRSxFQUFFLEFBQ3BCO1lBQUksQ0FBQyxRQUFRLENBQUMsQUFDWjtlQUFLLEVBQUUsSUFBSSxDQUFDLElBQUksQUFDaEI7bUJBQVMsRUFBRSxJQUFJLENBQUMsU0FBUztTQUMxQixDQUFDLENBQUM7T0FDSjtLQUNGLEVBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7R0FDZixBQUNEO21CQUFpQixFQUFFLDZCQUFXLEFBQzVCO1FBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztHQUN2QixBQUNEO2FBQVcsRUFBRSx1QkFBVyxBQUN0QjtRQUFJLENBQUMsY0FBYyxFQUFFLENBQUM7R0FDdkI7Q0FDRixDQUFDLENBQUM7O0FBRUgsY0E1Q1MsTUFBTSxFQTZDYiw4QkFBQyxJQUFJLE9BQUcsRUFDUixRQUFRLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUMvQixDQUFDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSAncmVhY3QtZG9tJ1xyXG5pbXBvcnQgeyBicm93c2VySGlzdG9yeSwgUm91dGVyLCBSb3V0ZSwgTGluayB9IGZyb20gJ3JlYWN0LXJvdXRlcidcclxuXHJcbnZhciBNYWluID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xyXG4gIHJlbmRlcjogZnVuY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm9uZS1oYWxmIGNvbHVtbiB0ZXN0XCI+XHJcbiAgICAgICAgICAgIDxoND57dGhpcy5wcm9wcy50aXRsZX08L2g0PlxyXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ2ZXJzZVwiPnt0aGlzLnN0YXRlLnZlcnNlfTwvcD5cclxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwicmVmZXJlbmNlXCI+e3RoaXMuc3RhdGUucmVmZXJlbmNlfTwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICA8aW5wdXQgb25DbGljaz17dGhpcy5oYW5kbGVDbGlja30gY2xhc3NOYW1lPVwiYnV0dG9uLXByaW1hcnlcIiB0eXBlPVwiYnV0dG9uXCIgdmFsdWU9XCJOZXh0IHZlcnNlXCIvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfSxcclxuICBnZXRJbml0aWFsU3RhdGU6IGZ1bmN0aW9uKCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgdmVyc2U6ICcnLFxyXG4gICAgICAgICAgcmVmZXJlbmNlOiAnJ1xyXG4gICAgICB9O1xyXG4gIH0sXHJcbiAgZ2V0UmFuZG9tVmVyc2U6IGZ1bmN0aW9uKCkge1xyXG4gICAgJC5nZXQoJy9hcGkvdjEuMC92ZXJzZS9yYW5kb20vJywgZnVuY3Rpb24oZGF0YSkge1xyXG4gICAgICBpZiAodGhpcy5pc01vdW50ZWQoKSkge1xyXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe1xyXG4gICAgICAgICAgdmVyc2U6IGRhdGEudGV4dCxcclxuICAgICAgICAgIHJlZmVyZW5jZTogZGF0YS5yZWZlcmVuY2VcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgfS5iaW5kKHRoaXMpKTtcclxuICB9LFxyXG4gIGNvbXBvbmVudERpZE1vdW50OiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZ2V0UmFuZG9tVmVyc2UoKTtcclxuICB9LFxyXG4gIGhhbmRsZUNsaWNrOiBmdW5jdGlvbigpIHtcclxuICAgIHRoaXMuZ2V0UmFuZG9tVmVyc2UoKTtcclxuICB9XHJcbn0pO1xyXG5cclxucmVuZGVyKFxyXG4gIDxNYWluIC8+LFxyXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKVxyXG4pO1xyXG4iXX0=
