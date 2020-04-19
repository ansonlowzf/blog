const _ = require(`lodash`)
const withDefaults = require(`gatsby-theme-blog-core/utils/default-options`)
// These templates are simply data-fetching wrappers that import components
const PostsTemplate = require.resolve(
  `./src/gatsby-theme-blog/templates/posts-query`
)
const TagsTemplate = require.resolve(
  `./src/gatsby-theme-blog/templates/tags-query`
)
exports.createPages = async ({ graphql, actions, reporter }, themeOptions) => {
  const { createPage } = actions
  const { basePath } = withDefaults(themeOptions)
  const result = await graphql(`
    {
      tagsGroup: allBlogPost(limit: 1000) {
        group(field: tags) {
          fieldValue
        }
      }
    }
  `)
  if (result.errors) {
    reporter.panic(result.errors)
  }
  const tags = result.data.tagsGroup.group
  // Make tag pages
  tags.forEach((tag) => {
    createPage({
      path: `/tags/${_.kebabCase(tag.fieldValue)}/`,
      component: TagsTemplate,
      context: {
        tag: tag.fieldValue,
      },
    })
  })
  // Make posts page
  createPage({
    path: basePath,
    component: PostsTemplate,
    context: {},
  })
}
