import { graphql } from "gatsby"
import PostsPage from "../components/posts"
export default PostsPage

export const query = graphql`
  query PostsQueryAndTagsGroup {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(sort: { fields: [date, title], order: DESC }, limit: 1000) {
      totalCount
      edges {
        node {
          id
          excerpt
          slug
          title
          date(formatString: "MMMM DD, YYYY")
          tags
        }
      }
    }
    tagsGroup: allBlogPost(limit: 1000) {
      group(field: tags) {
        fieldValue
        totalCount
      }
    }
  }
`
