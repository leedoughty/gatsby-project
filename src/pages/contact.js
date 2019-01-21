import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `blue` }}>
    <Link to="/">Home</Link>
    <Header headerText="Contact" />
    <p>leedoughty.com</p>
  </div>
)
