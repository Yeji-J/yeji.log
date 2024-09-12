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
import styled from '@emotion/styled'
import fadeInUp from '@animations/fadeInUp'

export default function TravelDetail({ params: { country, city, date } }) {
  const [travelTitle, setTravelTitle] = useState('')
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    const { titleData, photoData } = data
    setTravelTitle(titleData[country][city][date].title)
    setPhotoList(photoData[country][city][date])
  }, [country, city, date, travelTitle])

  return (
    <TravelDetailContainer>
      <div className="sub-title">{travelTitle}</div>
      {photoList.map((item, index) => {
        return (
          <PhotoCardWrapper index={index}>
            <PhotoCard key={item.img} photo={item}>
              {item.tags.map((tag, idx) => {
                return <Tag key={idx} tag={tag} />
              })}
            </PhotoCard>
          </PhotoCardWrapper>
        )
      })}
    </TravelDetailContainer>
  )
}

const TravelDetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
const PhotoCardWrapper = styled.div`
  opacity: 0;
  animation: ${fadeInUp} 1.2s ease-out forwards;
  animation-delay: ${({ index }) => `${index * 0.2}s`};
`
