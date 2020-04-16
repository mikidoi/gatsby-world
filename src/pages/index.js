import { Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import { Helmet } from "react-helmet"
import styled from "styled-components"
import StyledBackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"

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
  console.log(data)
  const post = get(data, "allContentfulEssay")
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
