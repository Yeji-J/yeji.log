import styled from '@emotion/styled'

export default function TravelCard({ travel, onClick }) {
  const title = `${travel?.city}, ${travel?.country}`

  return (
    <CardWrapper onClick={onClick}>
      <ImageWrapper>
        <Image src={travel?.img} alt={travel?.title} loading="lazy" />
      </ImageWrapper>
      <TitleWrapper>
        <span>{title}</span>
        <span>{travel?.date.replaceAll('-', '.')}</span>
      </TitleWrapper>
    </CardWrapper>
  )
}

const CardWrapper = styled.div`
  position: relative;
  border-radius: 3px;
  overflow: hidden;

  &:hover {
    -webkit-text-stroke: 0.8px white;
    img {
      transform: scale(1.08);
      transition: transform 0.5s ease, filter 0.5s ease;
      filter: grayscale(0);
    }
  }
`

const TitleWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: 0.6rem;
  display: flex;
  flex-direction: column;
  background-color: rgba(0, 0, 0, 0.491);
  text-decoration: none;
  color: white;

  & > *:nth-child(2) {
    font-size: 0.8rem;
  }
`

const ImageWrapper = styled.div`
  width: 100%;
  height: 300px;
`
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: grayscale(1);
  transition: transform 0.5s ease, filter 0.5s ease;
`
