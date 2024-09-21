'use client'
import styled from '@emotion/styled'
import Symbol from '@components/Symbol'
import Quotes from '@components/Quotes'

export default function Page() {
  return (
    <PageWrapper>
      <Symbol />
      <Quotes>완벽하지 않아도 최선을 다하고 싶어요</Quotes>
      <Quotes> 일상에 지친 나를 위로하고자 만든 공간입니다</Quotes>
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: gray;
`
