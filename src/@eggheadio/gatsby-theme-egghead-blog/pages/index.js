import React from 'react'
import { graphql } from 'gatsby'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import Layout from '@eggheadio/gatsby-theme-egghead-blog/src/components/Layout'
import Link from '@eggheadio/gatsby-theme-egghead-blog/src/components/Link'
import { useTheme } from '@eggheadio/gatsby-theme-egghead-blog/src/components/Theming'
import Container from '@eggheadio/gatsby-theme-egghead-blog/src/components/Container'
import { rhythm } from '@eggheadio/gatsby-theme-egghead-blog/src/lib/typography'

const Hero = ({site}) => {
  const theme = useTheme()
  return (
    <section
      css={css`
        color: ${theme.colors.white};
        width: 100%;
        background: ${theme.colors.primary};
        padding: 20px 0 30px 0;
        display: flex;
      `}
    >
      <Container
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        <h1
          css={css`
            color: ${theme.colors.white};
            position: relative;
            z-index: 5;
            line-height: 1.5;
            margin: 0;
            max-width: ${rhythm(15)};
          `}
        >
          {site.siteMetadata.description}
        </h1>
      </Container>
      <div
        css={css`
          height: 150px;
          overflow: hidden;
        `}
      />
    </section>
  )
}
const Description = styled.p`
  margin-bottom: 10px;
  display: inline-block;
`
export default function Index({ data: { site, thoughts, irl, code } }) {
  const theme = useTheme()
  return (
    <Layout site={site}>
      <Hero site={site}/>
      <Container
        css={css`
          padding-bottom: 0;
          display: flex;
          flex-direction: left;
          justify-content: between;
          max-width: 1000px;
          div{
            margin-right: 20px;
          }
        `}
      >
        <div>
          <h2>Latest Code Article</h2>
        {code.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h3
              css={css({
                marginBottom: rhythm(0.3),
                textAlign: "left",
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h3>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        </div>
        <div>
          <h2>Latest Thoughts</h2>
        {thoughts.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h3
              css={css({
                marginBottom: rhythm(0.3),
                textAlign: "left",
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h3>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        </div>
        <div>
        <h2>Latest IRL Post</h2>
        {irl.edges.map(({ node: post }) => (
          <div
            key={post.id}
            css={css`
              margin-bottom: 40px;
            `}
          >
            <h3
              css={css({
                marginBottom: rhythm(0.3),
                textAlign: "left",
                transition: 'all 150ms ease',
                ':hover': {
                  color: theme.colors.primary,
                },
              })}
            >
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                {post.frontmatter.title}
              </Link>
            </h3>
            <Description>
              {post.excerpt}{' '}
              <Link
                to={post.frontmatter.slug}
                aria-label={`View ${post.frontmatter.title}`}
              >
                Read Article →
              </Link>
            </Description>
          </div>
        ))}
        </div>
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
    irl: allMdx(limit: 1, sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {categories: {in: "irl"}, published: {eq: true}}}) {
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
    code: allMdx(limit: 1, sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {categories: {in: "code"}, published: {eq: true}}}) {
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
    thoughts: allMdx(limit: 1, sort: { fields: [frontmatter___date], order: DESC }, filter: {fields: {categories: {in: "thoughts"}, published: {eq: true}}}) {
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