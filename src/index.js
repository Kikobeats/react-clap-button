import React from 'react'
import mojs from 'mo-js'
import { ThemeProvider } from 'styled-components'

import ClapWrap from './components/ClapWrap'
import ClapIcon from './components/ClapIcon'
import ClapButton from './components/ClapButton'
import ClapCount from './components/ClapCount'
import ClapCountTotal from './components/ClapCountTotal'

const defaultTheme = {
  primaryColor: 'rgb(189, 195, 199)',
  secondaryColor: 'rgb(39, 174, 96)',
  size: 70
}

const Clap = class extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      unclicked: true,
      count: this.props.count,
      countTotal: this.props.countTotal,
      isClicked: props.count > 0,
      isHover: false
    }
    this.onClick = this.onClick.bind(this)
    this.onClickClear = this.onClickClear.bind(this)
  }

  componentDidMount () {
    const tlDuration = 300
    const triangleBurst = new mojs.Burst({
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
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1),
        duration: tlDuration
      }
    })

    const circleBurst = new mojs.Burst({
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
        easing: mojs.easing.bezier(0.1, 1, 0.3, 1)
      }
    })

    const countAnimation = new mojs.Html({
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
    })

    const opacityStart = this.props.count > 0 && this.state.unclicked ? 1 : 0

    const countTotalAnimation = new mojs.Html({
      el: '#clap--count-total',
      isShowStart: false,
      isShowEnd: true,
      opacity: { [opacityStart]: 1 },
      delay: (3 * tlDuration) / 2,
      duration: tlDuration,
      y: { 0: -3 }
    })

    const scaleButton = new mojs.Html({
      el: '#clap',
      duration: tlDuration,
      scale: { 1.3: 1 },
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

  getTheme () {
    const { theme = {} } = this.props
    return Object.assign({}, defaultTheme, theme)
  }

  onClick () {
    const { maxCount, onCountChange } = this.props
    this.animationTimeline.replay()

    this.setState(({ count, countTotal }) => {
      if (count < maxCount) {
        onCountChange({ count: count + 1, countTotal: countTotal + 1 })
        return {
          unclicked: false,
          count: count + 1,
          countTotal: countTotal + 1,
          isClicked: true
        }
      }
    })
  }

  onClickClear () {
    const { onCountChange } = this.props
    this.setState(({ count, countTotal }) => {
      onCountChange({ count: 0, countTotal: countTotal - 1 })
      return {
        isClicked: false,
        countTotal: countTotal - count,
        count: 0
      }
    })
  }

  render () {
    const { count, countTotal, isClicked, isHover } = this.state
    const { iconComponent: ClapIcon } = this.props

    return (
      <ThemeProvider theme={this.getTheme()}>
        <ClapWrap isClicked={isClicked} onClickClear={this.onClickClear}>
          <ClapButton
            id='clap'
            onClick={this.onClick}
            onMouseEnter={e => this.setState({ isHover: true })}
            onMouseLeave={e => this.setState({ isHover: false })}
            isHover={isHover && count === 0}
          >
            <ClapIcon id='clap--icon' isClicked={isClicked} />
            <ClapCount id='clap--count'>+{count}</ClapCount>
            <ClapCountTotal id='clap--count-total'>
              {Number(countTotal).toLocaleString()}
            </ClapCountTotal>
          </ClapButton>
        </ClapWrap>
      </ThemeProvider>
    )
  }
}

Clap.defaultProps = {
  countTotal: 0,
  count: 0,
  maxCount: 50,
  isClicked: false,
  onCountChange: () => {},
  iconComponent: ClapIcon
}

export default Clap
