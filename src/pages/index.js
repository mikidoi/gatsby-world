import FontFaceObserver from "fontfaceobserver"
import { Link } from "gatsby"
import googleFonts from "google-fonts"
import get from "lodash/get"
import React, { useEffect, useState } from "react"
import styled from "styled-components"
import StyledBackgroundSection from "../components/BackgroundSection"
import Layout from "../components/layout"
import SEO from "../components/Seo"

const MenuTitle = styled.p`
  margin-bottom: 2rem;
  font-size: 1rem;
  font-weight: bold;
`

const MenuItem = styled.div`
  padding-bottom: 1rem;
  border-top: 1px solid black;
`

const Loader = () => <div>loading</div>
export default ({ data }) => {
  const [loading, setLoading] = useState(true)
  const post = get(data, "allContentfulEssay")

  useEffect(() => {
    googleFonts.add({ Hannari: true, "Sawarabi Mincho": true })
    const SawarabiFontObserver = new FontFaceObserver("Sawarabi Mincho")
    const HannariFontObserver = new FontFaceObserver("Hannari")
    Promise.all([SawarabiFontObserver.load(), HannariFontObserver.load()]).then(
      () => {
        setLoading(false)
      },
      err => {
        console.error("Failed to load fonts!", err)
        setLoading(false)
      }
    )
  })
  return (
    <>
      <SEO />
      {loading ? (
        <Loader />
      ) : (
        <>
          <StyledBackgroundSection />
          <Layout post={post}>
            <div style={{ textAlign: "center", marginTop: "5rem" }}>
              <MenuTitle>もくじ</MenuTitle>
              {post.nodes.map(node => (
                <MenuItem key={node.slug}>
                  <Link to={`/${node.slug}`}>
                    <h2>{node.title}</h2>
                    <span>{node.publishedDate}</span>
                  </Link>
                </MenuItem>
              ))}
            </div>
          </Layout>
        </>
      )}
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
