import React from 'react'
import styled from 'styled-components'
import ClearClaps from './ClearClaps'

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
    transform: translateX(calc(100% - 5px));
    transition-delay: 1s;
  }
`

export default ({children, primaryColor, secondaryColor}) => (
  <ClapWrap>
    <ClapWrapChildren>{children}</ClapWrapChildren>
    <ExtendedClearClaps primaryColor={primaryColor} secondaryColor={secondaryColor} />
  </ClapWrap>
)
