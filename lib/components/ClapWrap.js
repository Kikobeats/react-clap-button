'use strict'

Object.defineProperty(exports, '__esModule', {
  value: true
})

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

var _createClass = (function () {
  function defineProperties (target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i]
      descriptor.enumerable = descriptor.enumerable || false
      descriptor.configurable = true
      if ('value' in descriptor) descriptor.writable = true
      Object.defineProperty(target, descriptor.key, descriptor)
    }
  }
  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps)
    if (staticProps) defineProperties(Constructor, staticProps)
    return Constructor
  }
})()

var _templateObject = _taggedTemplateLiteral(
    ['\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n'],
    ['\n  display: inline-block;\n  position: relative;\n  z-index: 1;\n']
  ),
  _templateObject2 = _taggedTemplateLiteral(
    ['\n  position: relative;\n  z-index: 2;\n'],
    ['\n  position: relative;\n  z-index: 2;\n']
  )

var _react = require('react')

var _react2 = _interopRequireDefault(_react)

var _styledComponents = require('styled-components')

var _styledComponents2 = _interopRequireDefault(_styledComponents)

var _ClearClaps = require('./ClearClaps')

var _ClearClaps2 = _interopRequireDefault(_ClearClaps)

function _interopRequireDefault (obj) {
  return obj && obj.__esModule ? obj : { default: obj }
}

function _classCallCheck (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError('Cannot call a class as a function')
  }
}

function _possibleConstructorReturn (self, call) {
  if (!self) {
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    )
  }
  return call && (typeof call === 'object' || typeof call === 'function')
    ? call
    : self
}

function _inherits (subClass, superClass) {
  if (typeof superClass !== 'function' && superClass !== null) {
    throw new TypeError(
      'Super expression must either be null or a function, not ' +
        typeof superClass
    )
  }
  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  })
  if (superClass) {
    Object.setPrototypeOf
      ? Object.setPrototypeOf(subClass, superClass)
      : (subClass.__proto__ = superClass)
  }
}

function _taggedTemplateLiteral (strings, raw) {
  return Object.freeze(
    Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })
  )
}

var Wrap = _styledComponents2.default.div(_templateObject)

var ClapWrapChildren = _styledComponents2.default.div(_templateObject2)

var ClapWrap = (function (_React$Component) {
  _inherits(ClapWrap, _React$Component)

  function ClapWrap () {
    var _ref

    var _temp, _this, _ret

    _classCallCheck(this, ClapWrap)

    for (
      var _len = arguments.length, args = Array(_len), _key = 0;
      _key < _len;
      _key++
    ) {
      args[_key] = arguments[_key]
    }

    return (
      (_ret = ((_temp = ((_this = _possibleConstructorReturn(
        this,
        (_ref =
          ClapWrap.__proto__ || Object.getPrototypeOf(ClapWrap)).call.apply(
          _ref,
          [this].concat(args)
        )
      )),
        _this)),
        (_this.state = {
          displayClear: false
        }),
        (_this.onClick = function () {
          if (_this.state.displayClear) {
            _this.setState({ displayClear: false })
          }
        }),
        (_this.mouseMove = function () {
          if (!_this.state.displayClear) {
            _this.setState({ displayClear: true })
          }
        }),
        (_this.mouseLeave = function () {
          if (_this.state.displayClear) {
            _this.setState({ displayClear: false })
          }
        }),
        _temp)),
      _possibleConstructorReturn(_this, _ret)
    )
  }

  _createClass(ClapWrap, [
    {
      key: 'render',
      value: function render () {
        var _this2 = this

        var _props = this.props,
          children = _props.children,
          isClicked = _props.isClicked,
          onClickClear = _props.onClickClear
        var displayClear = this.state.displayClear

        return _jsx(
          Wrap,
          {
            onMouseLeave: this.mouseLeave,
            onClick: function onClick (e) {
              _this2.state.isClicked = true
              setTimeout(function () {
                _this2.state.isClicked = false
              }, 100)
            }
          },
          void 0,
          _jsx(
            ClapWrapChildren,
            {
              onMouseMove: this.mouseMove,
              onClick: this.onClick
            },
            void 0,
            children
          ),
          _jsx(_ClearClaps2.default, {
            onClick: onClickClear,
            in: displayClear && isClicked,
            isClicked: this.state.isClicked
          })
        )
      }
    }
  ])

  return ClapWrap
})(_react2.default.Component)

exports.default = ClapWrap
