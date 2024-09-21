import styled from '@emotion/styled'

export default function Title({ icon, text }) {
  return (
    <TitleWrapper>
      {icon} {text}
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 0;
  text-transform: uppercase;
`
