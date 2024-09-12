import { Typography } from '@mui/material'
import '@styles/photoCard.css'
import styled from '@emotion/styled'

export default function PhotoCard({ photo, children }) {
  return (
    <div className="photo-card-container">
      <div className="photo-card__photo">
        <TravelImage src={photo.img} alt={photo.title} loading="lazy" />
      </div>

      <div className="photo-card__desc">
        <div fontWeight={500} sx={{ fontSize: 15 }}>
          {photo.title?.toUpperCase()}
        </div>
        <div className="tag-list">{children}</div>
        <Typography sx={{ pt: 3, whiteSpace: 'pre-line', fontSize: 14 }}>
          {photo.desc}
        </Typography>
      </div>
    </div>
  )
}

const TravelImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`
