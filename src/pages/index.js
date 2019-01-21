import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
import EmotionButton from "../components/emotion-button"

const Container = styled.div`
  display: flex;
  /* align-items: center; */
  justify-content: left;
`

export default () => (
  <Container>
    <Header headerText="cool ascii art" />
    <Link to="/contact/">Contact</Link>
    <Link to="/about/">About</Link>
    <EmotionButton emotion="happy" />
    <EmotionButton emotion="sad" />
    <EmotionButton emotion="neutral" />
    <EmotionButton emotion="angry" />
    <EmotionButton emotion="suprised" />
  </Container>
)
