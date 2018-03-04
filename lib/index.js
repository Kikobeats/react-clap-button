'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _jsx = function () { var REACT_ELEMENT_TYPE = typeof Symbol === "function" && Symbol.for && Symbol.for("react.element") || 0xeac7; return function createRawReactElement(type, props, key, children) { var defaultProps = type && type.defaultProps; var childrenLength = arguments.length - 3; if (!props && childrenLength !== 0) { props = {}; } if (props && defaultProps) { for (var propName in defaultProps) { if (props[propName] === void 0) { props[propName] = defaultProps[propName]; } } } else if (!props) { props = defaultProps || {}; } if (childrenLength === 1) { props.children = children; } else if (childrenLength > 1) { var childArray = Array(childrenLength); for (var i = 0; i < childrenLength; i++) { childArray[i] = arguments[i + 3]; } props.children = childArray; } return { $$typeof: REACT_ELEMENT_TYPE, type: type, key: key === undefined ? null : '' + key, ref: null, props: props, _owner: null }; }; }();

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 2px ', ';\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n    box-shadow: 0 0 50px ', ', inset 0 0 10px ', ';\n  }\n'], ['\n  0% {\n    transform: scale(1);\n    box-shadow: 0 0 2px ', ';\n    opacity: 1;\n  }\n\n  100% {\n    transform: scale(1);\n    opacity: 0;\n    box-shadow: 0 0 50px ', ', inset 0 0 10px ', ';\n  }\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  border: 1px solid ', ';\n  width: ', 'px;\n  height: ', 'px;\n  background: none;\n  transition: border 0.3s ease-in;\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n    width: ', 'px;\n    height: ', 'px;\n  }\n\n  &:hover, &:focus {\n    border: 1px solid ', ';\n\n    &::after {\n      animation: ', ' 1s ease-in infinite;\n    }\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n'], ['\n  position: relative;\n  outline: 1px solid transparent;\n  border-radius: 50%;\n  border: 1px solid ', ';\n  width: ', 'px;\n  height: ', 'px;\n  background: none;\n  transition: border 0.3s ease-in;\n\n  &::after {\n    content: \'\';\n    position: absolute;\n    top: 0;\n    left: 0;\n    display: block;\n    border-radius: 50%;\n    width: ', 'px;\n    height: ', 'px;\n  }\n\n  &:hover, &:focus {\n    border: 1px solid ', ';\n\n    &::after {\n      animation: ', ' 1s ease-in infinite;\n    }\n  }\n\n  &:hover {\n    cursor: pointer;\n  }\n']),
    _templateObject3 = _taggedTemplateLiteral(['\n  font-size: 0.8rem;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n'], ['\n  font-size: 0.8rem;\n  user-select: none;\n  pointer-events: none;\n  position: absolute;\n']),
    _templateObject4 = _taggedTemplateLiteral(['\n  top: -', 'px;\n  left: ', 'px;\n  color: white;\n  background: ', ';\n  border-radius: 50%;\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n  backface-visibility: hidden;\n  ', '\n'], ['\n  top: -', 'px;\n  left: ', 'px;\n  color: white;\n  background: ', ';\n  border-radius: 50%;\n  height: ', 'px;\n  width: ', 'px;\n  line-height: ', 'px;\n  backface-visibility: hidden;\n  ', '\n']),
    _templateObject5 = _taggedTemplateLiteral(['\n  width: ', 'px;\n  text-align: center;\n  left: 0;\n  top: -', 'px;\n  color: ', ';\n  ', '\n'], ['\n  width: ', 'px;\n  text-align: center;\n  left: 0;\n  top: -', 'px;\n  color: ', ';\n  ', '\n']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moJs = require('mo-js');

var _moJs2 = _interopRequireDefault(_moJs);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _polished = require('polished');

var _icon = require('./icon');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var shockwave = function shockwave(_ref) {
  var secondaryColor = _ref.secondaryColor;
  return (0, _styledComponents.keyframes)(_templateObject, secondaryColor, (0, _polished.darken)(0.2, secondaryColor), secondaryColor);
};

var ClapButton = _styledComponents2.default.button(_templateObject2, function (_ref2) {
  var primaryColor = _ref2.primaryColor;
  return primaryColor;
}, function (_ref3) {
  var size = _ref3.size;
  return size;
}, function (_ref4) {
  var size = _ref4.size;
  return size;
}, function (_ref5) {
  var size = _ref5.size;
  return size - 1;
}, function (_ref6) {
  var size = _ref6.size;
  return size - 1;
}, function (_ref7) {
  var secondaryColor = _ref7.secondaryColor;
  return secondaryColor;
}, shockwave);

var textStyles = (0, _styledComponents.css)(_templateObject3);

var ClapCount = _styledComponents2.default.span(_templateObject4, function (_ref8) {
  var size = _ref8.size;
  return size / 1.6;
}, function (_ref9) {
  var size = _ref9.size;
  return size / 4;
}, function (_ref10) {
  var secondaryColor = _ref10.secondaryColor;
  return secondaryColor;
}, function (_ref11) {
  var size = _ref11.size;
  return size / 2;
}, function (_ref12) {
  var size = _ref12.size;
  return size / 2;
}, function (_ref13) {
  var size = _ref13.size;
  return size / 2;
}, textStyles);

var ClapCountTotal = _styledComponents2.default.span(_templateObject5, function (_ref14) {
  var size = _ref14.size;
  return size;
}, function (_ref15) {
  var size = _ref15.size;
  return size / 3.5;
}, function (_ref16) {
  var primaryColor = _ref16.primaryColor;
  return primaryColor;
}, textStyles);

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
      var _props = this.props,
          size = _props.size,
          primaryColor = _props.primaryColor,
          secondaryColor = _props.secondaryColor,
          ClapIcon = _props.iconComponent;


      return _jsx(ClapButton, {
        id: 'clap',
        primaryColor: primaryColor,
        secondaryColor: secondaryColor,
        size: size,
        onClick: this.onClick
      }, void 0, _jsx(ClapIcon, {
        id: 'clap--icon',
        isClicked: isClicked,
        primaryColor: primaryColor,
        secondaryColor: secondaryColor
      }), _jsx(ClapCount, {
        id: 'clap--count',
        secondaryColor: secondaryColor,
        size: size
      }, void 0, '+', count), _jsx(ClapCountTotal, {
        primaryColor: primaryColor,
        id: 'clap--count-total',
        size: size
      }, void 0, '+', countTotal));
    }
  }]);

  return Clap;
}(_react2.default.Component);

Clap.defaultProps = {
  size: 70,
  primaryColor: 'rgba(189,195,199 ,1)',
  secondaryColor: 'rgba(39,174,96 ,1)',
  countTotal: 0,
  count: 0,
  maxCount: 50,
  iconComponent: _icon2.default
};

exports.default = Clap;