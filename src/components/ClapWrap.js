import React from 'react'
import styled from 'styled-components'
import ClearClaps from './ClearClaps'

const Wrap = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`

const ClapWrapChildren = styled.div`
  position: relative;
  z-index: 2;
`

export default class ClapWrap extends React.Component {
  state = {
    displayClear: false
  }

  constructor (props) {
    super(props)
  }

  onClick = () => {
    if (this.state.displayClear) {
      this.setState({displayClear: false})
    }
  }

  mouseMove = () => {
    if (!this.state.displayClear) {
      this.setState({displayClear: true})
    }
  }

  mouseLeave = () => {
    if (this.state.displayClear) {
      this.setState({displayClear: false})
    }
  }

  render () {
    const {children, isClicked, onClickClear, primaryColor, secondaryColor} = this.props
    const {displayClear} = this.state
    return (
      <Wrap onMouseLeave={this.mouseLeave}>
        <ClapWrapChildren onMouseMove={this.mouseMove} onClick={this.onClick}>
          {children}
        </ClapWrapChildren>
        <ClearClaps
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          onClick={onClickClear}
          in={displayClear && isClicked}
        />
      </Wrap>
    )
  }
}
