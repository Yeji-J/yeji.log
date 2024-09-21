import { Typography } from '@mui/material'

import styled from '@emotion/styled'
import Tag from '@components/Tag'

export default function PhotoCard({ photo, children }) {
  return (
    <CardWrapper>
      <ImageWrapper>
        <Image src={photo.img} alt={photo.title} loading="lazy" />
      </ImageWrapper>

      <DescWrapper>
        <Title>{photo.title?.toUpperCase()}</Title>
        <TagWrapper>
          {photo.tags.map((tag, idx) => {
            return <Tag key={idx} tag={tag} />
          })}
        </TagWrapper>
        <Desc>{photo.desc}</Desc>
      </DescWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  max-width: 900px;
  height: 450px;
  display: flex;
  gap: 1rem;

  /* Mobile Landscape */
  @media (min-width: 480px) and (max-width: 767px) {
    max-width: 767px;
  }

  /* Mobile Portrait */
  @media (max-width: 479px) {
    max-width: 479px;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 0;
  }
`
const ImageWrapper = styled.div`
  width: 600px;

  /* Mobile Landscape */
  @media (min-width: 480px) and (max-width: 767px) {
    width: 500px;
  }

  /* Mobile Portrait */
  @media (max-width: 479px) {
    width: 100%;
  }
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 2px;
`

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

const Title = styled.div`
  font-weight: bold;
`

const Desc = styled.div`
  font-size: 0.9rem;
  white-space: pre-line;
  padding: 0.5rem 0;
`

const TagWrapper = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  /* Mobile Portrait */
  @media (max-width: 479px) {
    gap: 0.2rem;
  }
`
