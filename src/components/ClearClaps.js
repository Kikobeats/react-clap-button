import React from 'react'
import {Transition} from 'react-transition-group'
import styled, {css} from 'styled-components'
import {rgba, darken} from 'polished'

const ClearClaps = styled.button`
  border: 0;
  padding: 0;
  appearance: none;
  position: absolute;
  right: 0;
  top: calc(50% - 15px);
  transform: translateX(0);
  height: 30px;
  width: 36px;
  border-radius: 0 9999px 9999px 0;
  backface-visibility: hidden;
  cursor: pointer;
  outline: none;
  transition: transform .3s cubic-bezier(.25,0,.6,1.4) 1s,-webkit-transform .3s cubic-bezier(.25,0,.6,1.4) 1s;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: calc(50% - 3.5px);
    top: calc(50% - 8px);
    height: 16px;
    width: 2px;
    border-radius: 9999px;
    transition: background 0.3s ease-in-out;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }

  ${({theme: {primaryColor, secondaryColor}}) => css`
    background: ${rgba(secondaryColor, 0.1)};

    &::before,
    &::after {
      background: ${secondaryColor};
    }

    &:hover {
      &::before,
      &::after {
        background: ${darken(0.1, secondaryColor)};
      }
    }
  `}
`

const transitionStyles = {
  entered: () => ({
    transform: 'translateX(calc(100% - 5px))',
    transitionDelay: '0s'
  }),
  exiting: ({isClicked}) => ({
    transitionDuration: isClicked ? '0.25s' : '0.3s',
    transitionDelay: isClicked ? '0s' : '0.7s'
  })
}

export default ({in: inProp, ...props}) => {
  return (
    <Transition in={inProp} timeout={{enter: 400}}>
      {state => <ClearClaps style={transitionStyles[state] && transitionStyles[state](props)} {...props} />}
    </Transition>
  )
}
