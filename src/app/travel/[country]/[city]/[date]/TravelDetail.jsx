'use client'
import '@styles/travelDetail.css'
import { useEffect, useState } from 'react'
import PhotoCard from '@components/PhotoCard'
import {
  Stack,
  Box,
  ImageListItem,
  ListSubheader,
  Typography,
} from '@mui/material'
import Tag from '@components/Tag'
import data from './data'

export default function TravelDetail({ params: { country, city, date } }) {
  const [travelTitle, setTravelTitle] = useState('')
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    const { titleData, photoData } = data
    setTravelTitle(titleData[country][city][date].title)
    setPhotoList(photoData[country][city][date])
  }, [country, city, date, travelTitle])

  return (
    <div className="travel-detail-container">
      <div className="sub-title">{travelTitle}</div>
      {photoList.map((item) => {
        return (
          <PhotoCard key={item.img} photo={item}>
            {item.tags.map((tag, idx) => {
              return <Tag key={idx} tag={tag} />
            })}
          </PhotoCard>
        )
      })}
    </div>
  )
}
