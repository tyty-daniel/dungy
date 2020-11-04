import React from "react"
import Header from "./header"
import { Helmet } from "react-helmet"

export default function Layout({ children }) {
  return (
      <div>
      <Header />
    <div style={{ margin: `3rem auto`, maxWidth: 750, padding: `0 1rem` }}>
      {children}
    </div>
    </div>
  )
}