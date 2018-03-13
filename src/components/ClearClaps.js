import React from 'react'
import {Transition} from 'react-transition-group'
import styled, {css} from 'styled-components'
import {darken} from 'polished'

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
  transition: transform 0.8s ease-in-out 1s;

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
    background: ${primaryColor};

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
  entered: {
    transform: 'translateX(calc(100% - 5px))'
  },
  exiting: {
    transitionDuration: '0.6s',
    transitionDelay: '0.8s'
  }
}

export default ({in: inProp, ...props}) => (
  <Transition in={inProp} timeout={{enter: 1000, exit: 800}}>
    {state => <ClearClaps style={transitionStyles[state]} {...props} />}
  </Transition>
)
