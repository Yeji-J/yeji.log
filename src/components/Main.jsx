'use client'
import styled from '@emotion/styled'
import useMouseAnimation from '@hooks/useMouseAnimation'
import { useRef } from 'react'

export default function Main({ children }) {
  const canvasRef = useRef(null)
  useMouseAnimation(canvasRef)
  return (
    <MainWrapper>
      <canvas id="canvas" ref={canvasRef}></canvas>
      {children}
    </MainWrapper>
  )
}

const MainWrapper = styled.div`
  max-width: 960px;
  height: 100%;
  display: flex;
  flex-direction: column;

  // 수정 필요 (Header 높이)
  margin-top: 3.5rem;

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
