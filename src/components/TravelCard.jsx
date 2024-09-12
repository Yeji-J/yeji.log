import { ImageListItem, ImageListItemBar } from '@mui/material'
import Link from 'next/link'
import styled from '@emotion/styled'

export default function TravelCard({ photo }) {
  const cardTitle = `${photo.city}, ${photo.country}`

  const reg = (val) => {
    return val.replace(/\s+/g, '')?.toLowerCase()
  }

  return (
    <Link
      href={`/travel/${reg(photo.country)}/${reg(
        photo.city
      )}/${photo.date.replaceAll('-', '')}`}
    >
      <ImageListItem>
        <TravelImageWrapper>
          <TravelImage src={photo.img} alt={photo.title} loading="lazy" />
        </TravelImageWrapper>
        <ImageListItemBar
          title={cardTitle}
          subtitle={photo.date.replaceAll('-', '.')}
        />
      </ImageListItem>
    </Link>
  )
}

const TravelImageWrapper = styled.div`
  width: 100%;
  height: 300px;
  overflow: hidden;

  &:hover {
    img {
      transform: scale(1.07);
      transition: transform 0.5s ease, filter 0.5s ease;
      filter: grayscale(0);
    }
  }
`
const TravelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 3px;
  filter: grayscale(100%);
  transition: transform 0.5s ease, filter 0.5s ease;
`
