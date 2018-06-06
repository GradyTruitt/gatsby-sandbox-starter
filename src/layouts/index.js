import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { ThemeProvider } from 'styled-components'

import theme from 'theme'
import NavBar from 'components/NavBar'

const TemplateWrapper = ({ children, data }) => {
  console.log('does this run')
  const { logo, site } = data
  return (
    <ThemeProvider theme={theme}>
      <Fragment>
        <Helmet>
          <title>{site.meta.title}</title>
          <link rel="icon" href={logo.sizes.src} />
        </Helmet>
        <NavBar />
        {children()}
      </Fragment>
    </ThemeProvider>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper

export const query = graphql`
  query LayoutTemplateQuery {
    site {
      meta: siteMetadata {
        title
      }
    }
    logo: imageSharp(id: { regex: "/favicon/" }) {
      id
      sizes {
        src
      }
    }
  }
`
