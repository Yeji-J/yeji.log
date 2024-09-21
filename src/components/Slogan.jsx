import styled from '@emotion/styled'

export default function Slogan({ text }) {
  return <SloganWrapper>{text}</SloganWrapper>
}

const SloganWrapper = styled.div`
  width: 100%;
  padding-top: 1rem;
  color: rgb(166, 165, 165);
`
