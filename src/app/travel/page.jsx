'use client'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import TravelCard from '@components/TravelCard'
import { ImageList } from '@mui/material'

export default function Travel() {
  const [travelList, setTravelList] = useState([])

  useEffect(() => {
    fetch(`/api/v1/travel`)
      .then((response) => response.json())
      .then((res) => {
        const sortedTraveList = res.data.sort((a, b) => {
          return new Date(b.date) - new Date(a.date)
        })
        setTravelList(sortedTraveList)
      })
      .catch((error) => console.error('API 호출 실패:', error))
  }, [])

  const reg = (val) => {
    return val.replace(/\s+/g, '')?.toLowerCase()
  }

  return (
    <ImageList cols={3} gap={10}>
      {travelList.map((travel) => (
        <Link
          key={travel.img}
          href={`/travel/${reg(travel.country)}/${reg(
            travel.city
          )}/${travel.date.replaceAll('-', '')}`}
        >
          <TravelCard photo={travel} />
        </Link>
      ))}
    </ImageList>
  )
}
