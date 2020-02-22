import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "./layout.css"
import ThemeSelectionForm from "./ThemeSelectionForm"

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
`

const StyledNav = styled.nav`
  margin-bottom: 1.5rem;
  padding-top: 1rem;
  padding-bottom: 1.5rem;
  display: flex;
  justify-content: space-around;
  top: 0.5rem;
  position: sticky;
  z-index: 100;
  a {
    padding-right: 1rem;
    padding-left: 1rem;
  }
`

export default ({ children }) => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <Container>
      <StyledNav>
        <Link to={`/`}>{data.site.siteMetadata.title}</Link>
        <Link to={`/ashiya/`}>芦屋のこと</Link>
        <Link to={`/about/`}>私のこと</Link>
      </StyledNav>
      <ThemeSelectionForm />
      {children}
    </Container>
  )
}
