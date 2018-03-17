'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

var _templateObject = _taggedTemplateLiteral(
    [
      '\n0%{\n     box-shadow:0 0\n }\n 70%{\n     box-shadow:0 0 5px 10px rgba(255,255,255,0)\n }\n 100%{\n     box-shadow:0 0 0 0 rgba(255,255,255,0)\n }\n'
    ],
    [
      '\n0%{\n     box-shadow:0 0\n }\n 70%{\n     box-shadow:0 0 5px 10px rgba(255,255,255,0)\n }\n 100%{\n     box-shadow:0 0 0 0 rgba(255,255,255,0)\n }\n'
    ]
  ),
  _templateObject2 = _taggedTemplateLiteral(
    [
      "\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: #fff;\n  transition: border 0.1s ease-in;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ",
      '\n\n  ',
      '\n'
    ],
    [
      "\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  background: #fff;\n  transition: border 0.1s ease-in;\n\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n\n  ",
      '\n\n  ',
      '\n'
    ]
  ),
  _templateObject3 = _taggedTemplateLiteral(
    ['\n    &::after {\n      animation: ', ' 2s infinite;\n    }\n  '],
    ['\n    &::after {\n      animation: ', ' 2s infinite;\n    }\n  ']
  ),
  _templateObject4 = _taggedTemplateLiteral(
    [
      '\n    width: ',
      'px;\n    height: ',
      'px;\n    border: 1px solid ',
      ';\n\n    &::after {\n      width: ',
      'px;\n      height: ',
      'px;\n      border-color: ',
      ';\n      color: ',
      ';\n      fill: ',
      ';\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ',
      ';\n    }\n  '
    ],
    [
      '\n    width: ',
      'px;\n    height: ',
      'px;\n    border: 1px solid ',
      ';\n\n    &::after {\n      width: ',
      'px;\n      height: ',
      'px;\n      border-color: ',
      ';\n      color: ',
      ';\n      fill: ',
      ';\n    }\n\n    &:hover, &:focus {\n      border: 1px solid ',
      ';\n    }\n  '
    ]
  )

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

var shockwave = function shockwave (_ref) {
  var secondaryColor = _ref.theme.secondaryColor
  return (0, _styledComponents.keyframes)(_templateObject)
}

var ClapButton = _styledComponents2.default.button(
  _templateObject2,
  function (props) {
    return (
      props.isHover && (0, _styledComponents.css)(_templateObject3, shockwave)
    )
  },
  function (_ref2) {
    var _ref2$theme = _ref2.theme,
      primaryColor = _ref2$theme.primaryColor,
      secondaryColor = _ref2$theme.secondaryColor,
      size = _ref2$theme.size
    return (0, _styledComponents.css)(
      _templateObject4,
      size,
      size,
      primaryColor,
      size - 1,
      size - 1,
      secondaryColor,
      secondaryColor,
      secondaryColor,
      secondaryColor
    )
  }
)

exports.default = ClapButton
