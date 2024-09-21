'use client'
import styled from '@emotion/styled'

export default function Footer({ children }) {
  return <FooterWrapper>{children}</FooterWrapper>
}

const FooterWrapper = styled.footer`
  text-align: center;
  width: 100%;
  padding: 2rem 0 2rem 0;
  font-size: 0.9rem;
  color: gray;
`
