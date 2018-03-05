import React from 'react'
import mojs from 'mo-js'
import {ThemeProvider} from 'styled-components'

import ClapIcon from './icon'
import ClapButton from './components/ClapButton'
import ClapCount from './components/ClapCount'
import ClapCountTotal from './components/ClapCountTotal'
import {textStyles} from './utils'

const defaultTheme = {
  primaryColor: 'rgb(189, 195, 199)',
  secondaryColor: 'rgb(39, 174, 96)',
  size: 70
}

const Clap = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      count: this.props.count,
      countTotal: this.props.countTotal,
      isClicked: false
    }
    this.onClick = this.onClick.bind(this)
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

    this.setState((prevState, nextState) => {
      if (prevState.count < maxCount) {
        return {
          count: prevState.count + 1,
          countTotal: prevState.countTotal + 1,
          isClicked: true
        }
      }
    })
  }

  render () {
    const {count, countTotal, isClicked} = this.state
    const {iconComponent: ClapIcon, theme} = this.props

    return (
      <ThemeProvider theme={Object.assign(defaultTheme, theme || {})}>
        <ClapButton id='clap' onClick={this.onClick}>
          <ClapIcon id='clap--icon' isClicked={isClicked} />
          <ClapCount id='clap--count'>
            +{count}
          </ClapCount>
          <ClapCountTotal id='clap--count-total'>
            +{countTotal}
          </ClapCountTotal>
        </ClapButton>
      </ThemeProvider>
    )
  }
}

Clap.defaultProps = {
  countTotal: 0,
  count: 0,
  maxCount: 50,
  iconComponent: ClapIcon
}

export default Clap
