'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _templateObject = _taggedTemplateLiteral(
    [
      '\n  top: -',
      'px;\n  left: ',
      'px;\n  color: white;\n  border-radius: 50%;\n  backface-visibility: hidden;\n  ',
      '\n\n  ',
      '\n'
    ],
    [
      '\n  top: -',
      'px;\n  left: ',
      'px;\n  color: white;\n  border-radius: 50%;\n  backface-visibility: hidden;\n  ',
      '\n\n  ',
      '\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      '\n      height: ',
      ';\n      width: ',
      ';\n      line-height: ',
      ';\n      top: -',
      'px;\n      left: ',
      'px;\n      background: ',
      ';\n    '
    ],
    [
      '\n      height: ',
      ';\n      width: ',
      ';\n      line-height: ',
      ';\n      top: -',
      'px;\n      left: ',
      'px;\n      background: ',
      ';\n    '
    ]
  )

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _utils = require('../utils')

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _taggedTemplateLiteral (strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var ClapCount = _styledComponents2.default.span(
  _templateObject,
  function (_ref) {
    var size = _ref.size
    return size / 1.6
  },
  function (_ref2) {
    var size = _ref2.size
    return size / 4
  },
  _utils.textStyles,
  function (_ref3) {
    var _ref3$theme = _ref3.theme,
      secondaryColor = _ref3$theme.secondaryColor,
      size = _ref3$theme.size

    var half = size / 2 + 'px'
    return (0, _styledComponents.css)(
      _templateObject2,
      half,
      half,
      half,
      size / 2,
      size / 4,
      secondaryColor
    )
  }
)

exports.default = ClapCount
