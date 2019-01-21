import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export default () => (
  <Container>
    <div style={{ color: `blue` }}>
      <Header headerText="cool ascii art" />
      <Link to="/contact/">Contact</Link>
      <Link to="/about/">About</Link>
    </div>
  </Container>
)
