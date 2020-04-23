import { Link } from "gatsby"
import get from "lodash/get"
import React from "react"
import styled from "styled-components"
import IconWrapper from "../components/IconWrapper"
import Layout from "../components/layout"
import SEO from "../components/Seo"
import Arrow from "../images/arrow.svg"
import ListText from "../images/list-text.svg"

const StyledLeftArrow = styled(Arrow)`
  width: 20px;
  -webkit-transform: scaleX(-1);
  transform: scaleX(-1);
`
const StyledListIcon = styled(ListText)`
  width: 20px;
`
const StyledRightArrow = styled(Arrow)`
  width: 20px;
`

export default ({ data, pageContext }) => {
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          {pageContext.prev && (
            <Link to={`/${pageContext.prev.slug}`}>
              <IconWrapper>
                <StyledLeftArrow />
              </IconWrapper>
              前へ
            </Link>
          )}

          <Link to="/">
            <IconWrapper>
              <StyledListIcon />
            </IconWrapper>
            もくじへ
          </Link>

          {pageContext.next && (
            <Link to={`/${pageContext.next && pageContext.next.slug}`}>
              <IconWrapper>
                <StyledRightArrow />
              </IconWrapper>
              次へ
            </Link>
          )}
        </div>
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
