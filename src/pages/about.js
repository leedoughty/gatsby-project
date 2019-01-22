import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div>
    <Link to="/">Home</Link>
    <Header headerText="About" />
    <p>welcome to the world of japanese ascii art</p>
    <p>created by </p><a href="https://www.leedoughty.com">leedoughty</a>
  </div>
)
