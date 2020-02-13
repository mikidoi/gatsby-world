import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"
import "./layout.css"
import ThemeSelectionForm from "./ThemeSelectionForm"

const Container = styled.div`
  margin: 0 auto;
  max-width: 600px;
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
      <header
        style={{
          marginBottom: `1.5rem`,
          display: `flex`,
          justifyContent: `space-between`,
        }}
      >
        <Link to={`/`}>
          <h3>{data.site.siteMetadata.title}</h3>
        </Link>
        <Link to={`/ashiya/`}>
          <h3>芦屋のこと</h3>
        </Link>
        <Link to={`/about/`}>
          <h3>私のこと</h3>
        </Link>
      </header>
      <ThemeSelectionForm />
      {children}
    </Container>
  )
}
