import React from "react"
import Header from "./header"

export default function Layout({ children }) {
  return (
      <div>
      <Header />
    <div style={{ margin: `2rem auto`, maxWidth: 900, padding: `0 1rem` }}>
      {children}
    </div>
    </div>
  )
}