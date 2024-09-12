import { keyframes } from '@emotion/react'

const fadeInUp = keyframes`
  from {
    transform: translateY(2rem);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`

export default fadeInUp
