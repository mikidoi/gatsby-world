import React, { useEffect, useState } from "react"
import { CirclePicker } from "react-color"
import styled from "styled-components"
import CutIcon from "../images/cut.svg"
import PaintPalette from "../images/paint_palette.svg"
import IconWrapper from "./IconWrapper"

const StyledPaintPalette = styled(PaintPalette)`
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 100ms ease 0s;
  }
`
const StyledCutIcon = styled(CutIcon)`
  transform: scale(1);
  &:hover {
    cursor: pointer;
    transform: scale(1.2);
    transition: transform 100ms ease 0s;
  }
`

const CirclePickerWrapper = styled.section`
  margin: 5px;
  position: relative;
`

const StyledCirclePicker = styled(CirclePicker)`
  padding: 20px 20px 30px;
  border: 1px solid #e0efe8;
  background-color: white;
  border-radius: 15px;
`

const ThemeSelectionForm = () => {
  const [color, setColor] = useState({ hex: "#adfbc6" })
  const [showColorPicker, setShowColorPicker] = useState(false)

  //1.Store values of CSS Variables by usign useEffect on refresh
  //2.Use react-color(http://casesandberg.github.io/react-color/)
  const handleInputChange = (property, pixels, color) => {
    document.documentElement.style.setProperty(
      `--${property}`,
      `${color.hex}${pixels ? "px" : ""}`
    )
  }

  useEffect(() => {
    handleInputChange("background-color", false, color)
  }, [color])

  return (
    <>
      {/* <input
        type="color"
        id="background-color"
        value="#2eec96"
        onChange={event => handleInputChange("background-color", false, event)}
      /> */}
      <IconWrapper>
        <StyledPaintPalette onClick={() => setShowColorPicker(true)} />
        <span>
          {showColorPicker
            ? `パレットから好きな色をクリックしてね`
            : `パレットをクリックして色をかえてみよう`}
        </span>
      </IconWrapper>
      {showColorPicker && (
        <CirclePickerWrapper>
          <StyledCirclePicker
            width="100%"
            color={color}
            onChangeComplete={setColor}
          />
          <div
            style={{
              position: "absolute",
              right: "10px",
              bottom: "10px",
            }}
          >
            <IconWrapper>
              <StyledCutIcon onClick={() => setShowColorPicker(false)} />
            </IconWrapper>
          </div>
        </CirclePickerWrapper>
      )}
      {/* <input
        type="range"
        id="base-font-size"
        min="12"
        max="16"
        step="1"
        value="14"
        onChange={event => handleInputChange("base-font-size", true, event)}
      /> */}
    </>
  )
}

export default ThemeSelectionForm
