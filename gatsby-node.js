const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query MyQuery {
      allContentfulEssay {
        nodes {
          slug
          title
        }
      }
    }
  `)
  const articles = result.data.allContentfulEssay.nodes
  console.log("articles: ", articles)
  articles.forEach((node, index) => {
    createPage({
      path: node.slug,
      component: path.resolve(`./src/templates/blog-post.js`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.slug,
        prev: index === 0 ? null : articles[index - 1],
        next: index === articles.length - 1 ? null : articles[index + 1],
      },
    })
  })
}
