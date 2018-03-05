import styled, {css, keyframes} from 'styled-components'
import {darken} from 'polished'

const shockwave = ({theme: {secondaryColor}}) => keyframes`
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
  background: none;
  transition: border 0.3s ease-in;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
  }

  &:hover, &:focus {
    &::after {
      animation: ${shockwave} 1s ease-in infinite;
    }
  }

  &:hover {
    cursor: pointer;
  }

  ${({theme: {primaryColor, secondaryColor, size}}) => css`
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${primaryColor};

    &::after {
      width: ${size - 1}px;
      height: ${size - 1}px;
    }

    &:hover, &:focus {
      border: 1px solid ${secondaryColor};
    }
  `}
`

export default ClapButton
