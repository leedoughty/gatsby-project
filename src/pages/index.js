import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
import EmotionButton from "../components/emotion-button"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Sidebar = styled.div`
  width: 50px;
`

export default () => (
  <Container>
    <Header headerText="cool ascii art" />
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <Sidebar>
      <EmotionButton emotion="happy" />
      <EmotionButton emotion="sad" />
      <EmotionButton emotion="neutral" />
      <EmotionButton emotion="angry" />
      <EmotionButton emotion="suprised" />
    </Sidebar>
  </Container>
)
