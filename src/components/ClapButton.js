import styled, {css, keyframes} from 'styled-components'

const shockwave = ({theme: {secondaryColor}}) => keyframes`
0%{
     box-shadow:0 0
 }
 70%{
     box-shadow:0 0 5px 10px rgba(255,255,255,0)
 }
 100%{
     box-shadow:0 0 0 0 rgba(255,255,255,0)
 }
`

const ClapButton = styled.button`
  position: relative;
  outline: 1px solid transparent;
  border-radius: 50%;
  background: #fff;
  transition: border 0.1s ease-in;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    border-radius: 50%;
  }

  &:hover {
    cursor: pointer;
  }

  ${props => props.isHover && css`
    &::after {
      animation: ${shockwave} 2s infinite;
    }
  `}

  ${({theme: {primaryColor, secondaryColor, size}}) => css`
    width: ${size}px;
    height: ${size}px;
    border: 1px solid ${primaryColor};

    &::after {
      width: ${size - 1}px;
      height: ${size - 1}px;
      border-color: ${secondaryColor};
      color: ${secondaryColor};
      fill: ${secondaryColor};
    }

    &:hover, &:focus {
      border: 1px solid ${secondaryColor};
    }
  `}
`

export default ClapButton
