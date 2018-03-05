import React from 'react'
import styled, {keyframes} from 'styled-components'

export const clearClapsSlideIn = keyframes`
  to {
    transform: translateX(calc(100% - 5px));
  }
`

const ClearClaps = styled.button`
  border: 0;
  appearance: none;
  position: absolute;
  right: 0;
  top: calc(50% - 15px);
  transform: translateX(0);
  height: 30px;
  width: 36px;
  background: ${({primaryColor}) => primaryColor};
  border-radius: 0 9999px 9999px 0;
  backface-visibility: hidden;
  cursor: pointer;
  outline: none;

  &::before,
  &::after {
    content: '';
    position: absolute;
    right: calc(50% - 3.5px);
    top: calc(50% - 8px);
    height: 16px;
    width: 2px;
    background: ${({secondaryColor}) => secondaryColor};
    border-radius: 9999px;
  }

  &::before {
    transform: rotate(45deg);
  }

  &::after {
    transform: rotate(-45deg);
  }
`

export default props => <ClearClaps {...props} />
