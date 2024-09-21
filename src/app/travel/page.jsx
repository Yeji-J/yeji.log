'use client'
import React from 'react'
import { useState } from 'react'
import TravelCard from '@components/TravelCard'
import styled from '@emotion/styled'
import { useRouter } from 'next/navigation'
import data from './data'
import Fade from '@animations/Fade'
import urlFormatter from 'utils/urlFormatter'

export default function Page() {
  const router = useRouter()
  const [travelList, _] = useState(() => {
    return data.sort((a, b) => new Date(b.date) - new Date(a.date))
  })

  const handleClick = (travel) => {
    const { country, city, date } = travel
    const url = `/travel/${urlFormatter(country, city, date)}`
    router.push(url)
  }

  return (
    <PageWrapper>
      {travelList.map((travel, index) => (
        <Fade key={travel.img} index={index}>
          <TravelCard travel={travel} onClick={() => handleClick(travel)} />
        </Fade>
      ))}
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: grid;
  gap: 0.5rem;
  grid-template-columns: repeat(3, 1fr);

  /* Tablet */
  @media (min-width: 768px) and (max-width: 1023px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile Landscape */
  @media (min-width: 480px) and (max-width: 767px) {
    grid-template-columns: repeat(2, 1fr);
  }

  /* Mobile Portrait */
  @media (max-width: 479px) {
    grid-template-columns: 1fr;
  }
`
