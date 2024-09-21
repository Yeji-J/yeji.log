'use client'
import { useEffect, useState } from 'react'
import PhotoCard from '@components/PhotoCard'
import Tag from '@components/Tag'
import data from './data'
import styled from '@emotion/styled'
import Fade from '@animations/Fade'
import Slogan from '@components/Slogan'

export default function Page({ params: { country, city, date } }) {
  const [travelTitle, setTravelTitle] = useState('')
  const [photoList, setPhotoList] = useState([])

  useEffect(() => {
    const { titleData, photoData } = data
    setTravelTitle(titleData[country][city][date].title)
    setPhotoList(photoData[country][city][date])
  }, [country, city, date, travelTitle])

  return (
    <PageWrapper>
      <Slogan text={travelTitle} />
      {photoList.map((item, index) => {
        return (
          <Fade index={index} key={item.img}>
            <PhotoCard key={item.img} photo={item} />
          </Fade>
        )
      })}
    </PageWrapper>
  )
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
