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
    ['\n  width: 33px;\n\n  ', ';\n'],
    ['\n  width: 33px;\n\n  ', ';\n']
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n    fill: ', ';\n    stroke: ', ';\n    stroke-width: ', ';\n  '],
    ['\n    fill: ', ';\n    stroke: ', ';\n    stroke-width: ', ';\n  ']
  )

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _taggedTemplateLiteral (strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var Icon = _styledComponents2.default.svg(_templateObject, function (_ref) {
  var isClicked = _ref.isClicked,
    secondaryColor = _ref.theme.secondaryColor
  return (0,
    _styledComponents.css)(_templateObject2, !isClicked ? 'none' : secondaryColor, !isClicked ? secondaryColor : 'white', !isClicked ? '2px' : '1px')
})

exports.default = function (props) {
  return _react2.default.createElement(
    Icon,
    _extends(
      {
        xmlns: 'http://www.w3.org/2000/svg',
        viewBox: '-549 338 100.1 125'
      },
      props
    ),
    _jsx('path', {
      d:
        'M-471.2 366.8c1.2 1.1 1.9 2.6 2.3 4.1.4-.3.8-.5 1.2-.7 1-1.9.7-4.3-1-5.9-2-1.9-5.2-1.9-7.2.1l-.2.2c1.8.1 3.6.9 4.9 2.2zm-28.8 14c.4.9.7 1.9.8 3.1l16.5-16.9c.6-.6 1.4-1.1 2.1-1.5 1-1.9.7-4.4-.9-6-2-1.9-5.2-1.9-7.2.1l-15.5 15.9c2.3 2.2 3.1 3 4.2 5.3zm-38.9 39.7c-.1-8.9 3.2-17.2 9.4-23.6l18.6-19c.7-2 .5-4.1-.1-5.3-.8-1.8-1.3-2.3-3.6-4.5l-20.9 21.4c-10.6 10.8-11.2 27.6-2.3 39.3-.6-2.6-1-5.4-1.1-8.3z'
    }),
    _jsx('path', {
      d:
        'M-527.2 399.1l20.9-21.4c2.2 2.2 2.7 2.6 3.5 4.5.8 1.8 1 5.4-1.6 8l-11.8 12.2c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l34-35c1.9-2 5.2-2.1 7.2-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l28.5-29.3c2-2 5.2-2 7.1-.1 2 1.9 2 5.1.1 7.1l-28.5 29.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.4 1.7 0l24.7-25.3c1.9-2 5.1-2.1 7.1-.1 2 1.9 2 5.2.1 7.2l-24.7 25.3c-.5.5-.4 1.2 0 1.7.5.5 1.2.5 1.7 0l14.6-15c2-2 5.2-2 7.2-.1 2 2 2.1 5.2.1 7.2l-27.6 28.4c-11.6 11.9-30.6 12.2-42.5.6-12-11.7-12.2-30.8-.6-42.7m18.1-48.4l-.7 4.9-2.2-4.4m7.6.9l-3.7 3.4 1.2-4.8m5.5 4.7l-4.8 1.6 3.1-3.9'
    })
  )
}
