import { Box, ImageListItem, ImageListItemBar } from '@mui/material'
import { useRouter } from 'next/router'
import Link from 'next/link'

export default function PhotoCard({ photo }) {
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
        <div className="travel-card">
          <img
            src={photo.img}
            alt={photo.title}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
            loading="lazy"
          />
        </div>
        <ImageListItemBar
          title={cardTitle}
          subtitle={photo.date.replaceAll('-', '.')}
        />
      </ImageListItem>
    </Link>
  )
}
