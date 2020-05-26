import * as React from "react"
import { Styled, css } from "theme-ui"
import PostFooter from "gatsby-theme-blog/src/components/post-footer"
import Layout from "gatsby-theme-blog/src/components/layout"
import SEO from "gatsby-theme-blog/src/components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { Tag } from "./Tag"
import PostTitle from "./post-title"
import PostDate from "./post-date"
import PostHero from "./post-hero"

const Post = ({
  data: {
    post,
    site: {
      siteMetadata: { title },
    },
  },
  location,
  previous,
  next,
}) => (
  <Layout location={location} title={title}>
    <SEO
      title={post.title}
      description={post.excerpt}
      imageSource={
        post.socialImage
          ? post.socialImage?.childImageSharp?.fluid.src
          : post.image?.childImageSharp?.fluid.src
      }
      keywords={post.keywords}
      imageAlt={post.imageAlt}
    />
    <main>
      <PostHero post={post} />
      <PostTitle>{post.title}</PostTitle>
      <PostDate>
        {post.date} {` `} &bull; {` `}
        {post.tags.map((tag, i) => (
          <Tag tag={tag} isLast={i < post.tags.length - 1} />
        ))}
      </PostDate>

      <MDXRenderer>{post.body}</MDXRenderer>
    </main>
    <PostFooter {...{ previous, next }} />
  </Layout>
)
export default Post
