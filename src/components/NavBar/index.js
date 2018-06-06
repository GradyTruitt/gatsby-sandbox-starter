import React, { Fragment } from 'react'
import styled from 'styled-components'
import Desktop from './Desktop'
import Mobile from './Mobile'

const routes = [
  { text: 'Home', path: '/' }
]

const MobileNav = styled(Mobile)`
  @media (min-width: ${props => props.theme.desktop + 1}px) {
    display: none;
  }
`
const DesktopNav = styled(Desktop)`
  @media (max-width: ${props => props.theme.desktop}px) {
    display: none;
  }
`

export default () => (
  <Fragment>
    <MobileNav routes={routes} />
    <DesktopNav routes={routes} />
  </Fragment>
)
