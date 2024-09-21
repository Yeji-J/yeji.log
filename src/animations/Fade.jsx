import styled from '@emotion/styled'
import { keyframes } from '@emotion/react'

// in : appear
// out : disappear
// + up / down / left / right

export default function Fade({ children, dir, index = 0 }) {
  return <FadeInUp index={index}>{children}</FadeInUp>
}

const inUp = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

const FadeInUp = styled.div`
  opacity: 0;
  animation: ${inUp} 0.8s ease-out forwards;
  animation-delay: ${({ index }) => `${index * 0.2}s`};
`
