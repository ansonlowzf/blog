import { Link } from "gatsby"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import React, { Fragment } from "react"
import { css, Styled } from "theme-ui"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import { Tag } from "./Tag"
import TagsBar from "./TagsBar"

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext
  const { edges } = data.allBlogPost
  const siteTitle = data.site.siteMetadata.title
  const socialLinks = data.site.siteMetadata.social
  const tagsGroup = data.tagsGroup
  return (
    <Layout location={location} title={siteTitle}>
      <TagsBar {...{ tagsGroup, activeTag: tag }} />
      <main>
        {edges.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Tags" keywords={keywords} />
              <div>
                <Styled.h2
                  css={css({
                    mb: 1,
                  })}
                >
                  <Styled.a
                    as={Link}
                    css={css({
                      textDecoration: `none`,
                    })}
                    to={node.slug}
                  >
                    {title}
                  </Styled.a>
                </Styled.h2>
                <small>{node.date}</small>
                {node.tags.length ? (
                  <>
                    {` `} &bull; {` `}
                  </>
                ) : null}
                <small>
                  {node.tags.map((tag, i) => (
                    <Tag tag={tag} isLast={i < node.tags.length - 1} />
                  ))}
                </small>
                <Styled.p>{node.excerpt}</Styled.p>
              </div>
            </Fragment>
          )
        })}
      </main>
      <Footer socialLinks={socialLinks} />
    </Layout>
  )
}
export default Tags
