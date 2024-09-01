'use client'
import { Box, ImageListItem, ImageListItemBar } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function PhotoCard({ photo }) {
  const { basePath } = useRouter()
  const imgSrc = basePath ? `${basePath}${photo.img}` : photo.img
  const cardTitle = `${photo.city}, ${photo.country}`

  return (
    <ImageListItem>
      <Box
        sx={{
          width: 300,
          height: 300,
          overflow: 'hidden',
        }}
      >
        <img
          src={imgSrc}
          alt={photo.title}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
          loading="lazy"
        />
      </Box>
      <ImageListItemBar
        title={cardTitle}
        subtitle={photo.date.replaceAll('-', '.')}
      />
    </ImageListItem>
  )
}
