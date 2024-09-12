'use client'
import styled from '@emotion/styled'
import IntroCard from '@components/IntroCard'

export default function Home() {
  return (
    <HomeContainer>
      <CircleWrapper>
        <Circle>yeji.log</Circle>
      </CircleWrapper>
      <Quotes>
        완벽하지 않아도 최선을 다하고 싶어요
        <br />
        일상에 지친 나를 위로하고자 만든 공간입니다
      </Quotes>

      {/* <IntroCard /> */}

      <Footer>© 2024 Yeji Jung. All rights reserved.</Footer>
    </HomeContainer>
  )
}

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`

const CircleWrapper = styled.div`
  width: 100%;
  padding-top: 5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Circle = styled.div`
  width: 18rem;
  height: 6rem;
  background-color: transparent;
  border-radius: 50%;
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;
  text-align: center;
`
const Quotes = styled.div`
  font-size: 0.8rem;
  text-align: center;
  padding: 3rem;
`
const Footer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  text-align: center;
  width: 100%;
  padding: 2rem 0 2rem 0;
`
