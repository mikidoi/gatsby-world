import React from "react"

const ThemeSelectionForm = () => {
  //1.Store values of CSS Variables by usign useEffect on refresh
  //2.Use react-color(http://casesandberg.github.io/react-color/)
  const handleInputChange = (property, pixels, event) => {
    document.documentElement.style.setProperty(
      `--${property}`,
      `${event.target.value}${pixels ? "px" : ""}`
    )
  }

  return (
    <form>
      <input
        type="color"
        id="background-color"
        value="#2eec96"
        onChange={event => handleInputChange("background-color", false, event)}
      />
      <input
        type="range"
        id="base-font-size"
        min="12"
        max="16"
        step="1"
        value="14"
        onChange={event => handleInputChange("base-font-size", true, event)}
      />
    </form>
  )
}

export default ThemeSelectionForm
