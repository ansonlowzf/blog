import { graphql } from "gatsby"
import TagsPage from "../components/tags"

export default TagsPage

export const query = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
        social {
          name
          url
        }
      }
    }
    allBlogPost(
      sort: { fields: [date, title], order: DESC }
      limit: 1000
      filter: { tags: { eq: $tag } }
    ) {
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
