import styled from '@emotion/styled'

export default function Quotes({ children }) {
  return <QuotesWrapper>{children}</QuotesWrapper>
}

const QuotesWrapper = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 0.2rem 0 0.2rem 0;
`
