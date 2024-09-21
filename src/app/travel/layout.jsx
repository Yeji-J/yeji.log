'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import Title from '@components/Title'
import styled from '@emotion/styled'

export default function Layout({ children }) {
  const { date, country, city } = useParams()

  return (
    <React.Fragment>
      <TitleWrapper>
        <Title icon={<AirplaneTicketOutlinedIcon />} text="travel log" />
        {country && <Title icon={<PlayArrowIcon />} text={country} />}
        {city && <Title icon={<PlayArrowIcon />} text={decodeURI(city)} />}
        {date && <Title icon={<PlayArrowIcon />} text={date} />}
      </TitleWrapper>
      {children}
    </React.Fragment>
  )
}

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  /* mobile : page title width 100% */
  @media (max-width: 479px) {
    flex-wrap: wrap;

    & > *:first-child {
      width: 100%;
    }
  }
`
