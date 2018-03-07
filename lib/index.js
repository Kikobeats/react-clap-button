'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moJs = require('mo-js');

var _moJs2 = _interopRequireDefault(_moJs);

var _styledComponents = require('styled-components');

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

var _ClapButton = require('./components/ClapButton');

var _ClapButton2 = _interopRequireDefault(_ClapButton);

var _ClapCount = require('./components/ClapCount');

var _ClapCount2 = _interopRequireDefault(_ClapCount);

var _ClapCountTotal = require('./components/ClapCountTotal');

var _ClapCountTotal2 = _interopRequireDefault(_ClapCountTotal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultTheme = {
  primaryColor: 'rgb(189, 195, 199)',
  secondaryColor: 'rgb(39, 174, 96)',
  size: 70
};

var Clap = function (_React$Component) {
  _inherits(Clap, _React$Component);

  function Clap(props) {
    _classCallCheck(this, Clap);

    var _this = _possibleConstructorReturn(this, (Clap.__proto__ || Object.getPrototypeOf(Clap)).call(this, props));

    _this.state = {
      count: _this.props.count,
      countTotal: _this.props.countTotal,
      isClicked: false
    };
    _this.onClick = _this.onClick.bind(_this);
    return _this;
  }

  _createClass(Clap, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      var tlDuration = 300;
      var triangleBurst = new _moJs2.default.Burst({
        parent: '#clap',
        radius: { 50: 95 },
        count: 5,
        angle: 30,
        children: {
          shape: 'polygon',
          radius: { 6: 0 },
          scale: 1,
          stroke: 'rgba(211,84,0 ,0.5)',
          strokeWidth: 2,
          angle: 210,
          delay: 30,
          speed: 0.2,
          easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1),
          duration: tlDuration
        }
      });

      var circleBurst = new _moJs2.default.Burst({
        parent: '#clap',
        radius: { 50: 75 },
        angle: 25,
        duration: tlDuration,
        children: {
          shape: 'circle',
          fill: 'rgba(149,165,166 ,0.5)',
          delay: 30,
          speed: 0.2,
          radius: { 3: 0 },
          easing: _moJs2.default.easing.bezier(0.1, 1, 0.3, 1)
        }
      });

      var countAnimation = new _moJs2.default.Html({
        el: '#clap--count',
        isShowStart: false,
        isShowEnd: true,
        y: { 0: -30 },
        opacity: { 0: 1 },
        duration: tlDuration
      }).then({
        opacity: { 1: 0 },
        y: -80,
        delay: tlDuration / 2
      });

      var countTotalAnimation = new _moJs2.default.Html({
        el: '#clap--count-total',
        isShowStart: false,
        isShowEnd: true,
        opacity: { 0: 1 },
        delay: 3 * tlDuration / 2,
        duration: tlDuration,
        y: { 0: -3 }
      });

      var scaleButton = new _moJs2.default.Html({
        el: '#clap',
        duration: tlDuration,
        scale: { 1.3: 1 },
        easing: _moJs2.default.easing.out
      });

      var clap = document.getElementById('clap');
      clap.style.transform = 'scale(1, 1)';
      this.animationTimeline = new _moJs2.default.Timeline();
      this.animationTimeline.add([countAnimation, countTotalAnimation, scaleButton, circleBurst, triangleBurst]);
    }
  }, {
    key: 'getTheme',
    value: function getTheme() {
      var _props$theme = this.props.theme,
          theme = _props$theme === undefined ? {} : _props$theme;

      return Object.assign({}, defaultTheme, theme);
    }
  }, {
    key: 'onClick',
    value: function onClick() {
      var maxCount = this.props.maxCount;

      this.animationTimeline.replay();

      this.setState(function (prevState, nextState) {
        if (prevState.count < maxCount) {
          return {
            count: prevState.count + 1,
            countTotal: prevState.countTotal + 1,
            isClicked: true
          };
        }
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var _state = this.state,
          count = _state.count,
          countTotal = _state.countTotal,
          isClicked = _state.isClicked;
      var ClapIcon = this.props.iconComponent;


      return _jsx(_styledComponents.ThemeProvider, {
        theme: this.getTheme()
      }, void 0, _jsx(_ClapButton2.default, {
        id: 'clap',
        onClick: this.onClick
      }, void 0, _jsx(ClapIcon, {
        id: 'clap--icon',
        isClicked: isClicked
      }), _jsx(_ClapCount2.default, {
        id: 'clap--count'
      }, void 0, '+', count), _jsx(_ClapCountTotal2.default, {
        id: 'clap--count-total'
      }, void 0, '+', countTotal)));
    }
  }]);

  return Clap;
}(_react2.default.Component);

Clap.defaultProps = {
  countTotal: 0,
  count: 0,
  maxCount: 50,
  iconComponent: _icon2.default
};

exports.default = Clap;