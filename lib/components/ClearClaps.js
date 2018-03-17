'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _extends =
  Object.assign ||
  function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i]
      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key]
        }
      }
    }
    return target
  }

var _jsx = (function () {
  var REACT_ELEMENT_TYPE =
    (typeof Symbol === 'function' &&
      Symbol.for &&
      Symbol.for('react.element')) ||
    0xeac7
  return function createRawReactElement (type, props, key, children) {
    var defaultProps = type && type.defaultProps
    var childrenLength = arguments.length - 3
    if (!props && childrenLength !== 0) {
      props = {}
    }
    if (props && defaultProps) {
      for (var propName in defaultProps) {
        if (props[propName] === void 0) {
          props[propName] = defaultProps[propName]
        }
      }
    } else if (!props) {
      props = defaultProps || {}
    }
    if (childrenLength === 1) {
      props.children = children
    } else if (childrenLength > 1) {
      var childArray = Array(childrenLength)
      for (var i = 0; i < childrenLength; i++) {
        childArray[i] = arguments[i + 3]
      }
      props.children = childArray
    }
    return {
      $$typeof: REACT_ELEMENT_TYPE,
      type: type,
      key: key === undefined ? null : '' + key,
      ref: null,
      props: props,
      _owner: null
    }
  }
})()

var _templateObject = _taggedTemplateLiteral(
    [
      "\n  border: 0;\n  padding: 0;\n  appearance: none;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 15px);\n  transform: translateX(0);\n  height: 30px;\n  width: 36px;\n  border-radius: 0 9999px 9999px 0;\n  backface-visibility: hidden;\n  cursor: pointer;\n  outline: none;\n  transition: transform .3s cubic-bezier(.25,0,.6,1.4) 1s,-webkit-transform .3s cubic-bezier(.25,0,.6,1.4) 1s;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    right: calc(50% - 3.5px);\n    top: calc(50% - 8px);\n    height: 16px;\n    width: 2px;\n    border-radius: 9999px;\n    transition: background 0.3s ease-in-out;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n\n  ",
      '\n'
    ],
    [
      "\n  border: 0;\n  padding: 0;\n  appearance: none;\n  position: absolute;\n  right: 0;\n  top: calc(50% - 15px);\n  transform: translateX(0);\n  height: 30px;\n  width: 36px;\n  border-radius: 0 9999px 9999px 0;\n  backface-visibility: hidden;\n  cursor: pointer;\n  outline: none;\n  transition: transform .3s cubic-bezier(.25,0,.6,1.4) 1s,-webkit-transform .3s cubic-bezier(.25,0,.6,1.4) 1s;\n\n  &::before,\n  &::after {\n    content: '';\n    position: absolute;\n    right: calc(50% - 3.5px);\n    top: calc(50% - 8px);\n    height: 16px;\n    width: 2px;\n    border-radius: 9999px;\n    transition: background 0.3s ease-in-out;\n  }\n\n  &::before {\n    transform: rotate(45deg);\n  }\n\n  &::after {\n    transform: rotate(-45deg);\n  }\n\n  ",
      '\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n    background: ',
      ';\n\n    &::before,\n    &::after {\n      background: ',
      ';\n    }\n\n    &:hover {\n      &::before,\n      &::after {\n        background: ',
      ';\n      }\n    }\n  '
    ],
    [
      '\n    background: ',
      ';\n\n    &::before,\n    &::after {\n      background: ',
      ';\n    }\n\n    &:hover {\n      &::before,\n      &::after {\n        background: ',
      ';\n      }\n    }\n  '
    ]
  )

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _reactTransitionGroup = require('react-transition-group')

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _polished = require('polished')

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _objectWithoutProperties (obj, keys) {
  var target = {}
  for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue
    if (!Object.prototype.hasOwnProperty.call(obj, i)) continue
    target[i] = obj[i]
  }
  return target
}

function _taggedTemplateLiteral (strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var ClearClaps = _styledComponents2.default.button(_templateObject, function (
  _ref
) {
  var _ref$theme = _ref.theme,
    primaryColor = _ref$theme.primaryColor,
    secondaryColor = _ref$theme.secondaryColor
  return (0, _styledComponents.css)(
    _templateObject2,
    (0, _polished.rgba)(secondaryColor, 0.1),
    secondaryColor,
    (0, _polished.darken)(0.1, secondaryColor)
  )
})

var transitionStyles = {
  entered: function entered () {
    return {
      transform: 'translateX(calc(100% - 5px))',
      transitionDelay: '0s'
    }
  },
  exiting: function exiting (_ref2) {
    var isClicked = _ref2.isClicked
    return {
      transitionDuration: isClicked ? '0.25s' : '0.3s',
      transitionDelay: isClicked ? '0s' : '0.7s'
    }
  }
}

exports.default = function (_ref3) {
  var inProp = _ref3.in,
    props = _objectWithoutProperties(_ref3, ['in'])

  return _jsx(
    _reactTransitionGroup.Transition,
    {
      in: inProp,
      timeout: { enter: 400 }
    },
    void 0,
    function (state) {
      return _react2.default.createElement(
        ClearClaps,
        _extends(
          { style: transitionStyles[state] && transitionStyles[state](props) },
          props
        )
      )
    }
  )
}
