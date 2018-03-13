import styled, {css} from 'styled-components'
import {textStyles} from '../utils'

const ClapCount = styled.span`
  top: -${({size}) => size / 1.6}px;
  left: ${({size}) => size / 4}px;
  color: white;
  border-radius: 50%;
  backface-visibility: hidden;
  ${textStyles}

  ${({theme: {secondaryColor, size}}) => {
    const half = `${size / 2}px`
    return css`
      height: ${half};
      width: ${half};
      line-height: ${half};
      top: -${size / 2}px;
      left: ${size / 4}px;
      background: ${secondaryColor};
    `
  }}
`

export default ClapCount
