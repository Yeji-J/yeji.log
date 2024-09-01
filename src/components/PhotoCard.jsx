import { Stack, ImageListItem, Typography } from '@mui/material'

export default function PhotoCard({ photo, children }) {
  return (
    <Stack direction="row" spacing={2} sx={{ width: 900, height: 450 }}>
      <ImageListItem key={photo.img} sx={{ width: 600 }}>
        <img
          src={photo.img}
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
