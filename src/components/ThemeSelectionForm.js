import React, { useEffect, useState } from "react"
import { CirclePicker } from "react-color"
import styled from "styled-components"

const StyledCirclePicker = styled(CirclePicker)`
  padding: 20px;
  border: 1px solid #1a905d;
  background-color: white;
  border-radius: 5px;
`

const ThemeSelectionForm = () => {
  const [color, setColor] = useState("#2eec96")

  //1.Store values of CSS Variables by usign useEffect on refresh
  //2.Use react-color(http://casesandberg.github.io/react-color/)
  const handleInputChange = (property, pixels, color) => {
    console.log("color: ", color)
    document.documentElement.style.setProperty(
      `--${property}`,
      `${color.hex}${pixels ? "px" : ""}`
    )
  }

  useEffect(() => {
    handleInputChange("background-color", false, color)
  }, [color])

  return (
    <form>
      {/* <input
        type="color"
        id="background-color"
        value="#2eec96"
        onChange={event => handleInputChange("background-color", false, event)}
      /> */}
      <StyledCirclePicker
        width="100%"
        color={color}
        onChangeComplete={setColor}
      />
      {/* <input
        type="range"
        id="base-font-size"
        min="12"
        max="16"
        step="1"
        value="14"
        onChange={event => handleInputChange("base-font-size", true, event)}
      /> */}
    </form>
  )
}

export default ThemeSelectionForm
