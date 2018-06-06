import React from 'react'
import styled from 'styled-components'

import ImageLoader from '@merchantlabs/gatsby-image-loader'

export default ({ title, subTitle, sizes }) => (
  <ImageLoader sizes={sizes}>
    {({ src }) => (
      <Background url={src}>
        <Heading>{title}</Heading>
        <Text>{subTitle}</Text>
      </Background>
    )}
  </ImageLoader>
)

const Background = styled.div`
  position: fixed;
  padding: 300px 0 0;
  top: 0;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
  width: 100vw;
  height: 100vh;

  @media (max-width: ${props => props.theme.desktop}px) {
    padding: 200px 0 0;
  }
`
const Heading = styled.h1`
  margin: 5px auto;
  font-size: 50pt;
  font-weight: 600;
  letter-spacing: -1px;
  text-align: center;
  color: white;
  width: 500px;

  @media (max-width: ${props => props.theme.desktop}px) {
    font-size: 40pt;
    width: 300px;
  }
`
const Text = styled.h1`
  margin: 20px auto 0;
  font-size: 20pt;
  text-align: center;
  color: white;
  width: 500px;

  @media (max-width: ${props => props.theme.desktop}px) {
    font-size: 16pt;
    width: 300px;
  }
`
