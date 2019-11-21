/*
 * @Date: 2019-11-20 18:31:13
 * @LastEditors: Tian Zhi
 * @LastEditTime: 2019-11-21 10:32:22
 */
import React from 'react'
import styled, { css } from 'styled-components'
import { storiesOf } from '@storybook/react'
import { ThumbsUp } from 'react-feather'

import centered from '@storybook/addon-centered'

import ClapButton from '../src'

const CustomIcon = styled(ThumbsUp)`
  stroke: ${({ theme: { secondaryColor } }) => secondaryColor};
  stroke-width: 1px;
  fill: none;
  ${({ isClicked, theme: { secondaryColor } }) =>
    isClicked &&
    css`
      fill: ${secondaryColor};
      stroke: white;
    `};
`

storiesOf('ClapButton', module)
  .addDecorator(centered)
  .addWithJSX('default', () => <ClapButton />)
  .addWithJSX('maxCount', () => <ClapButton maxCount={3} countTotal={5005} />)
  .addWithJSX('count', () => <ClapButton countTotal={5005} count={3} />)
  .addWithJSX('icon', () => (
    <ClapButton iconComponent={props => <CustomIcon {...props} size={38} />} />
  ))
  .addWithJSX('color', () => <ClapButton theme={{ secondaryColor: '#5f27ae' }} />)
  .addWithJSX('canSwitch', () => <ClapButton canSwitch countTotal={5005} />)
