import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '@eggheadio/gatsby-theme-egghead-blog/src/components/Layout'
import Link from '@eggheadio/gatsby-theme-egghead-blog/src/components/Link'
import { useTheme } from '@eggheadio/gatsby-theme-egghead-blog/src/components/Theming'
import Container from '@eggheadio/gatsby-theme-egghead-blog/src/components/Container'
import { rhythm } from '@eggheadio/gatsby-theme-egghead-blog/src/lib/typography'
import Bio from '../components/bio'

const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`
export default function About({ data: { site, allMdx } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Container
        css={css`
          padding-bottom: 0;
        `}
      >
        <Bio />
        <hr />
      </Container>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    site {
      ...site
      siteMetadata {
        title
      }
    }
    allMdx(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { ne: false } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 190)
          id
          fields {
            title
            slug
            date
          }
          parent {
            ... on File {
              sourceInstanceName
            }
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            description
            banner {
              childImageSharp {
                sizes(maxWidth: 720) {
                  ...GatsbyImageSharpSizes
                }
              }
            }
            slug
            keywords
          }
        }
      }
    }
  }
`