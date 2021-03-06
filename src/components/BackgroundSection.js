import { graphql, StaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"
import React from "react"
import styled from "styled-components"

const BackgroundSection = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        desktop: file(relativePath: { eq: "images/rainbow.jpg" }) {
          childImageSharp {
            fluid(quality: 90, maxWidth: 1920) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `}
    render={data => {
      // Set ImageData.
      const imageData = data.desktop.childImageSharp.fluid
      return (
        <BackgroundImage
          Tag="section"
          className={className}
          fluid={imageData}
          backgroundColor={`#040e18`}
          style={{
            position: "inherit",
          }}
        >
          <h1>おおきな　にじ</h1>
          <div>
            Photo by{" "}
            <a
              style={{
                marginLeft: `auto`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.pexels.com/photo/multicolored-abstract-art-2062637/?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels"
            >
              Amber Lamoreaux from Pexels
            </a>
            <a
              style={{
                marginLeft: `auto`,
              }}
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com/icons/set/rgb-circle-1"
            >
              Color Wheel icon
            </a>{" "}
            icon by{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://icons8.com"
            >
              Icons8
            </a>
            <a href="https://www.flaticon.com/authors/lyolya" title="Lyolya">
              Lyolya
            </a>{" "}
            from{" "}
            <a href="https://www.flaticon.com/" title="Flaticon">
              www.flaticon.com
            </a>
          </div>
        </BackgroundImage>
      )
    }}
  />
)
const StyledBackgroundSection = styled(BackgroundSection)`
  width: 100%;
  height: 100vh;
  background-position: bottom center;
  background-repeat: repeat-y;
  background-size: cover;
  display: flex;
  flex-direction: column;
`
export default StyledBackgroundSection
