import React from 'react'
import styled, {css} from 'styled-components'
import {storiesOf} from '@storybook/react'
import {Star} from 'react-feather'

import centered from '@storybook/addon-centered'

import ClapButton from '../src'

const CustomIcon = styled(Star)`
  stroke: ${({ theme: { secondaryColor } }) => secondaryColor};
  stroke-width: 1px;
  fill: none;
  ${props => props.isClicked && css`
      fill: ${({ theme: { secondaryColor } }) => secondaryColor};
      stroke: white;
    `};
`

storiesOf('ClapButton', module)
  .addDecorator(centered)
  .addWithJSX('default', () => <ClapButton />)
  .addWithJSX('maxCount', () => <ClapButton maxCount={3} countTotal={100} />)
  .addWithJSX('icon', () => (
    <ClapButton
      theme={{ size: 70 }}
      iconComponent={props => <CustomIcon {...props} />}
    />
  ))
  .addWithJSX('color', () => (
    <ClapButton
      theme={{ primaryColor: '#5f27ae', secondaryColor: '#5f27ae' }}
    />
  ))
