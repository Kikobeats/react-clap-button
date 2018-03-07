'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 2px ', ';\n  }\n\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 50px ', ', inset 0 0 10px ', ';\n  }\n'], ['\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 2px ', ';\n  }\n\n  100% {\n    transform: scale(1);\n    box-shadow: 0 0 50px ', ', inset 0 0 10px ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: none;\n  transition: border 0.3s ease-in;\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n    opacity: 0;\n    animation: ', ' 1s ease-in 0.3s infinite;\n    transition: opacity 0.3s ease-in;\n  }\n\n  &:hover, &:focus {\n    &::after {\n      opacity: 1;\n      transition-timing-function: ease-out;\n    }\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ', '\n'], ['\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: none;\n  transition: border 0.3s ease-in;\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n    opacity: 0;\n    animation: ', ' 1s ease-in 0.3s infinite;\n    transition: opacity 0.3s ease-in;\n  }\n\n  &:hover, &:focus {\n    &::after {\n      opacity: 1;\n      transition-timing-function: ease-out;\n    }\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ', '\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n    width: ', 'px;\n    height: ', 'px;\n    border: 1px solid ', ';\n\n    &::after {\n      width: ', 'px;\n      height: ', 'px;\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ', ';\n    }\n  '], ['\n    width: ', 'px;\n    height: ', 'px;\n    border: 1px solid ', ';\n\n    &::after {\n      width: ', 'px;\n      height: ', 'px;\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ', ';\n    }\n  ']);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shockwave = function shockwave(_ref) {
  var secondaryColor = _ref.theme.secondaryColor;
  return (0, _styledComponents.keyframes)(_templateObject, secondaryColor, (0, _polished.darken)(0.2, (0, _polished.rgba)(secondaryColor, 0)), (0, _polished.rgba)(secondaryColor, 0));
};

var ClapButton = _styledComponents2.default.button(_templateObject2, shockwave, function (_ref2) {
  var _ref2$theme = _ref2.theme,
      primaryColor = _ref2$theme.primaryColor,
      secondaryColor = _ref2$theme.secondaryColor,
      size = _ref2$theme.size;
  return (0, _styledComponents.css)(_templateObject3, size, size, primaryColor, size - 1, size - 1, secondaryColor);
});

exports.default = ClapButton;