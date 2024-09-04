'use client'
import { useEffect, useState } from 'react'
import PhotoCard from '@components/PhotoCard'
import { Stack, ImageListItem, ListSubheader } from '@mui/material'
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
    <Stack direction="column" spacing={2} sx={{ pt: 2 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader
          component="div"
          sx={{
            fontSize: 16,
          }}
        >
          {travelTitle}
        </ListSubheader>
      </ImageListItem>
      {photoList.map((item) => {
        return (
          <PhotoCard key={item.img} photo={item}>
            {item.tags.map((tag, idx) => {
              return <Tag key={idx} tag={tag} />
            })}
          </PhotoCard>
        )
      })}
    </Stack>
  )
}
