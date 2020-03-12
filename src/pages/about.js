import React from "react"
import Layout from "../components/layout"

export default ({ data }) => (
  <Layout>
    {/* <h1>{data.site.siteMetadata.title}</h1> */}
    <h1>私のこと</h1>
    <p>こんにちは！ 私はまりなとかりなのお母さんです。</p>
  </Layout>
)

// export const query = graphql`
//   query {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `
