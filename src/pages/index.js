import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"

export default () => (
  <div style={{ color: `blue` }}>
    <Link to="/contact/">Contact</Link>
    <Header headerText="Hello Gatsby" />
    <p>what a world</p>
    <img src="http://leedoughty.io/img/lee.jpg" alt="pic of lee"/>
  </div>
)
