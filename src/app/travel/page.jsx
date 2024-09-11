'use client'
import React from 'react'
import { useEffect, useState } from 'react'
import TravelCard from '@components/TravelCard'
import data from './data'
import '@styles/travelDetail.css'

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
      {travelList.map((travel) => (
        <TravelCard photo={travel} key={travel.img} />
      ))}
    </div>
  )
}
