import get from "lodash/get"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/SEO"

export default ({ data }) => {
  const post = get(data, "contentfulEssay")
  const { title, body } = post

  return (
    <>
      <SEO title={title} />
      <Layout>
        <h1>{title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: body.childMarkdownRemark.html,
          }}
        />
      </Layout>
    </>
  )
}

export const pageQuery = graphql`
  query EssayBySlug($slug: String!) {
    contentfulEssay(slug: { eq: $slug }) {
      title
      body {
        childMarkdownRemark {
          html
        }
      }
    }
  }
`
