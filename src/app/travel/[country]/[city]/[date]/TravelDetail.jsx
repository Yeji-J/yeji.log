'use client'
import { useEffect, useState } from 'react'
import PhotoCard from '@components/PhotoCard'
import { Stack, ImageListItem, ListSubheader } from '@mui/material'
import Tag from '@components/Tag'

export default function TravelDetail({ params: { country, city, date } }) {
  const [travelTitle, setTravelTitle] = useState('')
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    const queryParams = new URLSearchParams({
      country,
      city,
      date,
    })

    // 동적 사이트 배포 시 수정 필요
    let url = ''

    if (city === 'bangkok') url = 'bangkok'
    if (city === 'taichung') url = 'taichung'
    if (city === 'nhatrang') url = 'nhatrang'
    if (city === 'kaohsiung') url = 'kaohsiung'
    if (city === 'taipei' && date === '20221129') url = 'taipei'
    if (city === 'hochiminh') url = 'hochiminh'

    if (!url.length) {
      setTravelTitle(`${city?.toUpperCase()}, ${country?.toUpperCase()}`)
      setPhotoList([])
      return
    }

    fetch(`/api/v1/travel/${url}`)
      .then((response) => response.json())
      .then((res) => {
        const { title, photoList } = res.data
        setTravelTitle(title)
        setPhotoList(photoList)
      })
      .catch((error) => console.error('API 호출 실패:', error))
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
