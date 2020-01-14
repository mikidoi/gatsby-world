import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h1>芦屋のこと</h1>
    <p>私のおばあちゃんとおじいちゃんは芦屋に住んでいました。</p>
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
