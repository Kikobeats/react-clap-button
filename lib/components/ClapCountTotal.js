'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _templateObject = _taggedTemplateLiteral(
    [
      '\n  transform: scale(1);\n  text-align: center;\n  left: 0;\n  ',
      '\n\n  ',
      '\n'
    ],
    [
      '\n  transform: scale(1);\n  text-align: center;\n  left: 0;\n  ',
      '\n\n  ',
      '\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n    top: -', 'px;\n    color: ', ';\n    width: ', 'px;\n  '],
    ['\n    top: -', 'px;\n    color: ', ';\n    width: ', 'px;\n  ']
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

var ClapCountTotal = _styledComponents2.default.span(
  _templateObject,
  _utils.textStyles,
  function (_ref) {
    var _ref$theme = _ref.theme,
      primaryColor = _ref$theme.primaryColor,
      size = _ref$theme.size
    return (0, _styledComponents.css)(
      _templateObject2,
      size / 3,
      primaryColor,
      size
    )
  }
)

exports.default = ClapCountTotal
