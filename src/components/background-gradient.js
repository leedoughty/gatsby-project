import React from "react"
import styled, { keyframes } from 'styled-components'

const GradientKeyframes = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`
const Gradient = styled.div`
  background: linear-gradient(132deg, #e67e22, #f1c40f);
  width: 1500px;
  height: 1000px;
  background-size: auto;
  animation: ${GradientKeyframes} 30s ease infinite;
`

export default () => (
  <Gradient/>
)
