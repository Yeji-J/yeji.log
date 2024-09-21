'use client'
import styled from '@emotion/styled'
import useMouseAnimation from '@hooks/useMouseAnimation'
import { Toolbar } from '@mui/material'
import { useRef } from 'react'

export default function Body({ children }) {
  const canvasRef = useRef(null)
  useMouseAnimation(canvasRef)
  return (
    <BodyWrapper>
      <canvas id="canvas" ref={canvasRef}></canvas>
      <Toolbar />
      {children}
    </BodyWrapper>
  )
}

const BodyWrapper = styled.div`
  max-width: 960px;
  height: 100%;
  display: flex;
  flex-direction: column;

  @media (min-width: 1024px) {
    width: 960px;
    padding: 1rem;
  }

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    padding: 0.5rem;
  }

  /* Mobile Landscape */
  @media (min-width: 480px) and (max-width: 767px) {
    padding: 0.5rem;
  }

  /* Mobile Portrait */
  @media (max-width: 479px) {
    padding: 0.5rem;
  }
`
