'use client'
import styled from '@emotion/styled'

export default function IntroCard({ children }) {
  return (
    <IntroCardWrapper>
      <Title>꽃 / 김춘수</Title>
      <Paragraph></Paragraph>
      <TagContainer>
        <Tag># 꽃</Tag>
        <Tag># 김춘수</Tag>
      </TagContainer>
    </IntroCardWrapper>
  )
}

const IntroCardWrapper = styled.div`
  width: 100%;
  border-top: 1px solid gray;
  padding: 0.5em;
  color: rgb(226, 226, 226);
`
const Title = styled.div`
  font-size: 0.9rem;
  font-weight: bold;
`
const Paragraph = styled.p``

const TagContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

const Tag = styled.div`
  background-color: rgb(226, 226, 226);
  width: fit-content;
  padding: 0.3em 0.6em;
  border-radius: 20px;
  color: black;
  font-size: 0.9rem;
  font-weight: bold;
`
