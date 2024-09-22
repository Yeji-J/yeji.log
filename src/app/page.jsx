'use client'
import styled from '@emotion/styled'
import Symbol from '@components/Symbol'
import Quotes from '@components/Quotes'
import IntroCard from '@components/IntroCard'
import { keyframes } from '@emotion/react'

export default function Page() {
  return (
    <PageWrapper>
      <Symbol />
      <Quotes>완벽하지 않아도 최선을 다하고 싶어요</Quotes>
      <Quotes> 일상에 지친 나를 위로하고자 만든 공간입니다</Quotes>
      {/* <Box>
        <Title># concept</Title>
        <div>
         
          <IntroCard />
        </div>
      </Box> */}
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`
const Box = styled.div`
  // background-color: salmon;
  width: 100%;
  display: flex;
  padding-top: 2rem;
`

const Title = styled.div`
  width: 50%;
  // color: white;
  font-size: 1.3rem;
  font-weight: bold;
  // text-align: center;
  -webkit-text-stroke: 1px white;
  color: transparent;
  text-transform: uppercase;
`
