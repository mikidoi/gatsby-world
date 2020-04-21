import { Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import styled from "styled-components"
import StyledBackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/Seo"

const MenuTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  font-family: "Hannari";
  font-weight: bold;
`

const MenuItem = styled.div`
  padding-bottom: 1rem;
  border-top: 1px solid black;
`

export default ({ data }) => {
  const post = get(data, "allContentfulEssay")
  return (
    <>
      <SEO />

      <StyledBackgroundSection />
      <Layout post={post}>
        <div style={{ textAlign: "center", marginTop: "5rem" }}>
          <MenuTitle>もくじ</MenuTitle>
          {post.nodes.map(node => (
            <MenuItem key={node.id}>
              <Link to={node.slug}>
                <h2>{node.title}</h2>
                <span>{node.publishedDate}</span>
              </Link>
            </MenuItem>
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
