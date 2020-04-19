import React, { Fragment } from "react"
import { Link } from "gatsby"
import { css, Styled } from "theme-ui"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import Footer from "gatsby-theme-blog/src/components/home-footer"
import TagsBar from "./TagsBar"
import { Tag } from "./Tag"

const Posts = (data) => {
  const { location, posts, tagsGroup, siteTitle, socialLinks } = data
  return (
    <Layout location={location} title={siteTitle}>
      <TagsBar {...{ tagsGroup }} />
      <main>
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          const keywords = node.keywords || []
          return (
            <Fragment key={node.slug}>
              <SEO title="Home" keywords={keywords} />
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
// export default Posts
export default ({ location, data }) => {
  const { site, allBlogPost, tagsGroup } = data
  return (
    <Posts
      location={location}
      posts={allBlogPost.edges}
      tagsGroup={tagsGroup}
      siteTitle={site.siteMetadata.title}
      socialLinks={site.siteMetadata.social}
    />
  )
}
