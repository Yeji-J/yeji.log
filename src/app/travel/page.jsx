'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import TravelCard from '@components/TravelCard'
import data from './data'
import '@styles/travelDetail.css'
import fadeInUp from '@animations/fadeInUp'
import styled from '@emotion/styled'

export default function Travel() {
  const [travelList, setTravelList] = useState([])

  useEffect(() => {
    const sortedData = data.sort((a, b) => {
      return new Date(b.date) - new Date(a.date)
    })
    setTravelList(sortedData)
  }, [])

  return (
    <div className="travel-list">
      {travelList.map((travel, index) => (
        <StyledTravelCard key={travel.img} index={index}>
          <TravelCard photo={travel} />
        </StyledTravelCard>
      ))}
    </div>
  )
}

const StyledTravelCard = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 1.2s ease-out forwards;
  animation-delay: ${({ index }) => `${index * 0.2}s`};
`
