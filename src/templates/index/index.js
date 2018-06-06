import React, { Fragment } from 'react'

import Header from './Header'

export const HomePageTemplate = ({ header }) => (
  <Fragment>
    <Header
      title={header.title}
      subTitle={header.subTitle}
      sizes={header.image.childImageSharp.sizes}
    />
  </Fragment>
)

export default ({ data }) => {
  const { frontmatter } = data.markdownRemark
  return <HomePageTemplate header={frontmatter.header} />
}

export const query = graphql`
  query HomePageQuery($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        header {
          title
          subTitle
          image {
            childImageSharp {
              sizes(maxWidth: 2000) {
                ...GatsbyImageSharpSizes
              }
            }
          }
        }
      }
    }
  }
`
