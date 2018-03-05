import React from 'react'
import mojs from 'mo-js'
import styled, {keyframes, css} from 'styled-components'
import {darken} from 'polished'

import ClapIcon from './components/ClapIcon'
import ClapWrap from './components/ClapWrap'

const shockwave = ({secondaryColor}) => keyframes`
  0% {
    transform: scale(1);
    box-shadow: 0 0 2px ${secondaryColor};
    opacity: 1;
  }

  100% {
    transform: scale(1);
    opacity: 0;
    box-shadow: 0 0 50px ${darken(0.2, secondaryColor)}, inset 0 0 10px ${secondaryColor};
  }
`

const ClapButton = styled.button`
  position: relative;
  outline: 1px solid transparent;
  border-radius: 50%;
  border: 1px solid ${({primaryColor}) => primaryColor};
  width: ${({size}) => size}px;
  height: ${({size}) => size}px;
  background: #fff;
  transition: border 0.3s ease-in;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
    width: ${({size}) => size - 1}px;
    height: ${({size}) => size - 1}px;
  }

  &:hover, &:focus {
    border: 1px solid ${({secondaryColor}) => secondaryColor};

    &::after {
      animation: ${shockwave} 1s ease-in infinite;
    }
  }

  &:hover {
    cursor: pointer;
  }
`

const textStyles = css`
  font-size: 0.8rem;
  user-select: none;
  pointer-events: none;
  position: absolute;
`

const ClapCount = styled.span`
  top: -${({size}) => size / 1.6}px;
  left: ${({size}) => size / 4}px;
  color: white;
  background: ${({secondaryColor}) => secondaryColor};
  border-radius: 50%;
  height: ${({size}) => size / 2}px;
  width: ${({size}) => size / 2}px;
  line-height: ${({size}) => size / 2}px;
  backface-visibility: hidden;
  ${textStyles};
`

const ClapCountTotal = styled.span`
  width: ${({size}) => size}px;
  text-align: center;
  left: 0;
  top: -${({size}) => size / 3.5}px;
  color: ${({primaryColor}) => primaryColor};
  ${textStyles};
  ${({countTotal}) => css`
    opacity: ${countTotal > 0 ? 1 : '0 !important'};
    transition: ${countTotal > 0 ? '' : 'opacity 0.25s ease-out'};
  `};
`

const Clap = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: this.props.count,
      countTotal: this.props.countTotal,
      isClicked: false
    }
    this.onClick = this.onClick.bind(this)
    this.onClickClear = this.onClickClear.bind(this)
  }

  componentDidMount () {
    const tlDuration = 300
    const triangleBurst = new mojs.Burst({
      parent: '#clap',
      radius: {50: 95},
      count: 5,
      angle: 30,
      children: {
        shape: 'polygon',
        radius: {6: 0},
        scale: 1,
        stroke: 'rgba(211,84,0 ,0.5)',
        strokeWidth: 2,
        angle: 210,
        delay: 30,
        speed: 0.2,
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    })

    const circleBurst = new mojs.Burst({
      parent: '#clap',
      radius: {50: 75},
      angle: 25,
      duration: tlDuration,
      children: {
        shape: 'circle',
        fill: 'rgba(149,165,166 ,0.5)',
        delay: 30,
        speed: 0.2,
        radius: {3: 0},
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    })

    const countAnimation = new mojs.Html({
      el: '#clap--count',
      isShowStart: false,
      isShowEnd: true,
      y: {0: -30},
      opacity: {0: 1},
      duration: tlDuration
    }).then({
      opacity: {1: 0},
      y: -80,
      delay: tlDuration / 2
    })

    const countTotalAnimation = new mojs.Html({
      el: '#clap--count-total',
      isShowStart: false,
      isShowEnd: true,
      opacity: {0: 1},
      delay: 3 * tlDuration / 2,
      duration: tlDuration,
      y: {0: -3}
    })

    const scaleButton = new mojs.Html({
      el: '#clap',
      duration: tlDuration,
      scale: {1.3: 1},
      easing: mojs.easing.out
    })

    const clap = document.getElementById('clap')
    clap.style.transform = 'scale(1, 1)'
    this.animationTimeline = new mojs.Timeline()
    this.animationTimeline.add([
      countAnimation,
      countTotalAnimation,
      scaleButton,
      circleBurst,
      triangleBurst
    ])
  }

  onClick () {
    const {maxCount} = this.props
    this.animationTimeline.replay()

    this.setState(({count, countTotal}) => {
      if (count < maxCount) {
        return {
          count: count + 1,
          countTotal: countTotal + 1,
          isClicked: true
        }
      }
    })
  }

  onClickClear () {
    this.setState(({count, countTotal}) => {
      return {
        isClicked: false,
        countTotal: countTotal - count,
        count: 0
      }
    })
  }

  render () {
    const {count, countTotal, isClicked} = this.state
    const {size, primaryColor, secondaryColor, iconComponent: ClapIcon} = this.props

    return (
      <ClapWrap primaryColor={primaryColor} secondaryColor={secondaryColor} isClicked={isClicked} onClickClear={this.onClickClear}>
        <ClapButton id='clap' primaryColor={primaryColor} secondaryColor={secondaryColor} size={size} onClick={this.onClick}>
          <ClapIcon id='clap--icon' isClicked={isClicked} primaryColor={primaryColor} secondaryColor={secondaryColor} />
          <ClapCount id='clap--count' secondaryColor={secondaryColor} size={size}>
            +{count}
          </ClapCount>
          <ClapCountTotal primaryColor={primaryColor} id='clap--count-total' size={size} countTotal={countTotal}>
            +{countTotal}
          </ClapCountTotal>
        </ClapButton>
      </ClapWrap>
    )
  }
}

Clap.defaultProps = {
  size: 70,
  primaryColor: 'rgba(189,195,199 ,1)',
  secondaryColor: 'rgba(39,174,96 ,1)',
  countTotal: 0,
  count: 0,
  maxCount: 50,
  iconComponent: ClapIcon
}

export default Clap
