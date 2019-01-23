import React from "react"
import { Link } from "gatsby"
import Header from "../components/header"
import styled from "styled-components"
import EmotionButton from "../components/emotion-button"
import { StaticQuery, graphql } from "gatsby"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Sidebar = styled.div`
  width: 50px;
`

const Button = styled.button`
  width: 60px;
  margin-top: 50px;
`

const StyledLink = styled(Link)`
  list-style-type: none;
  width: 10px;
  text-decoration: none;
  color: black;
`

const IndexPage = () => (
  <StaticQuery
    query={graphql`
      query IndexPage {
        site {siteMetadata {
          title
        }}
      }
    `}
    render={data => (
      <Container>
        <Header headerText={data.site.siteMetadata.title} />
        <Sidebar>
          <EmotionButton emotion="happy" />
          <EmotionButton emotion="sad" />
          <EmotionButton emotion="neutral" />
          <EmotionButton emotion="angry" />
          <EmotionButton emotion="suprised" />
        </Sidebar>
        <Button>
          <StyledLink to="/about/">about</StyledLink>
        </Button>
      </Container>
    )}
  />
)

export default IndexPage;
