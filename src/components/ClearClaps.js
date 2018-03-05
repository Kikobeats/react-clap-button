import React from 'react'
import styled from 'styled-components'

const ClearClaps = styled.button`
  border: 0;
  appearance: none;
  position: absolute;
  right: 0;
  top: calc(50% - 15px);
  height: 30px;
  transform: translateX(0);
  background: ${({primaryColor}) => primaryColor};
  border-radius: 0 9999px 9999px 0;
  width: 36px;
  backface-visibility: hidden;
  cursor: pointer;
  transition: transform .4s ease-out .4s;
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

export default props => <ClearClaps {...props}/>
