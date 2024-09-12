'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import '@styles/travelDetail.css'
import styled from '@emotion/styled'

export default function TravelLayout({ children }) {
  const params = useParams()
  const date = params.date
  const country = params.country?.toUpperCase()
  const city = params.city?.toUpperCase()

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { country, city, date: params.date })
  )

  return (
    <div>
      <div className="title-container">
        <Title className="main">
          <AirplaneTicketOutlinedIcon />
          <div>TRAVEL LOG</div>
        </Title>
        {country && (
          <Title>
            <PlayArrowIcon /> <div>{country}</div>
          </Title>
        )}
        {city && (
          <Title>
            <PlayArrowIcon /> <div>{decodeURI(city)}</div>
          </Title>
        )}
        {date && (
          <Title>
            <PlayArrowIcon /> <div>{date}</div>
          </Title>
        )}
      </div>
      {childrenWithProps}
    </div>
  )
}
const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
