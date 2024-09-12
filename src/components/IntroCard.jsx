'use client'
import styled from '@emotion/styled'

export default function IntroCard({ children }) {
  return (
    <IntroCardWrapper>
      <Title>Title</Title>
      <Paragraph>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur et
        saepe eligendi adipisci mollitia ex, quisquam accusantium facilis eum
        recusandae iste laboriosam dignissimos porro reprehenderit aliquid, est
        minima modi libero?
      </Paragraph>
      <TagContainer>
        <Tag># THIS IS TAG</Tag>
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

const TagContainer = styled.div``

const Tag = styled.div`
  background-color: rgb(226, 226, 226);
  width: fit-content;
  padding: 0.4em 0.6em;
  border-radius: 20px;
  color: black;
  font-size: 0.8rem;
`
