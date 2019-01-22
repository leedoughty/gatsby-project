import React from "react"
import styled from "styled-components"

const Item = styled.button`
  list-style-type: none;
`

export default props => <Item><li>{props.emotion}</li></Item>
