import { graphql, Link, useStaticQuery } from "gatsby"
import React from "react"
import styled from "styled-components"

const Container = styled.div`
  margin: 3rem auto;
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
        <Link to={`/about/`}>
          <h3>私のこと</h3>
        </Link>
      </header>
      {children}
    </Container>
  )
}
