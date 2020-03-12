import { graphql, Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import StyledBackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"

export default ({ data }) => {
  console.log(data)
  const post = get(data, "allContentfulEssay")
  return (
    <>
      <StyledBackgroundSection />
      <Layout post={post}>
        <div>
          {post.nodes.map(node => (
            <div key={node.id}>
              <Link to={node.slug}>
                <h3>
                  {node.title} <span>— {node.publishedDate}</span>
                </h3>
              </Link>
            </div>
          ))}
        </div>
      </Layout>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    allContentfulEssay {
      nodes {
        slug
        title
        publishedDate(formatString: "")
        body {
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`
