import React from 'react'
import styled from 'styled-components'
import ClearClaps, {clearClapsSlideIn} from './ClearClaps'

const ClapWrap = styled.div`
  display: inline-block;
  position: relative;
  z-index: 1;
`

const ClapWrapChildren = styled.div`
  position: relative;
  z-index: 2;
`

const ExtendedClearClaps = styled(ClearClaps)`
  ${ClapWrap}:hover & {
    animation: ${clearClapsSlideIn} 0.4s ease-out forwards 1s;
  }
`

export default ({children, isClicked, primaryColor, secondaryColor}) => (
  <ClapWrap>
    <ClapWrapChildren>{children}</ClapWrapChildren>
    {isClicked && (
      <ExtendedClearClaps primaryColor={primaryColor} secondaryColor={secondaryColor} />
    )}
  </ClapWrap>
)
