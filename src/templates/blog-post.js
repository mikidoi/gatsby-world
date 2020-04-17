import get from "lodash/get"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = get(data, "contentfulEssay")
  const { title, body } = post

  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/earlyaccess/hannari.css"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Sawarabi+Mincho"
          rel="stylesheet"
        ></link>
      </Helmet>
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
