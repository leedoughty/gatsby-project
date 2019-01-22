import React from "react"
import styled from "styled-components"

const Button = styled.button`
  list-style-type: none;
  &:hover {
    cursor: pointer;
  }
`



export default props => <Button><li>{props.emotion}</li></Button>
