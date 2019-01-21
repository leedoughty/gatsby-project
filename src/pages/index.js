import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"

export default () => (
  <div style={{ color: `blue` }}>
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <Header headerText="cool ascii art" />
    <p>what a world</p>
    <img src="http://leedoughty.io/img/lee.jpg" alt="pic of lee"/>
  </div>
)
