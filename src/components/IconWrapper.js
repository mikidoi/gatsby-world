import React from "react"

const IconWrapper = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      paddingTop: "1.5rem",
    }}
  >
    {children}
  </div>
)

export default IconWrapper
