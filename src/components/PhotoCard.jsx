'use clinet'
import { useRouter } from 'next/navigation'
import { Stack, ImageListItem, Typography } from '@mui/material'
import { grey } from '@mui/material/colors'

export default function PhotoCard({ photo, children }) {
  const { basePath } = useRouter()
  const imgSrc = basePath ? `${basePath}${photo.img}` : photo.img
  return (
    <Stack direction="row" spacing={2} sx={{ width: 900, height: 450 }}>
      <ImageListItem key={photo.img} sx={{ width: 600 }}>
        <img
          src={imgSrc}
          alt={photo.title}
          style={{
            objectFit: 'cover',
          }}
          loading="lazy"
        />
      </ImageListItem>

      <Stack direction="column" spacing={1} sx={{ width: 300 }}>
        <Typography fontWeight={500} sx={{ fontSize: 15 }}>
          {photo.title?.toUpperCase()}
        </Typography>
        <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
          {children}
        </Stack>
        <Typography sx={{ pt: 3, whiteSpace: 'pre-line', fontSize: 14 }}>
          {photo.desc}
        </Typography>
      </Stack>
    </Stack>
  )
}
