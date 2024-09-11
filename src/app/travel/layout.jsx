'use client'
import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'
import '@styles/travelDetail.css'

export default function TravelLayout({ children }) {
  const params = useParams()
  const date = params.date
  const country = params.country?.toUpperCase()
  const city = params.city?.toUpperCase()

  // children에 country, date, city 값 전달
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { country, city, date: params.date })
  )

  return (
    <div>
      <div className="title-container">
        <div className="page-title main">
          <AirplaneTicketOutlinedIcon />
          <div>TRAVEL LOG</div>
        </div>
        {country && (
          <div className="page-title">
            <PlayArrowIcon /> <div>{country}</div>
          </div>
        )}
        {city && (
          <div className="page-title">
            <PlayArrowIcon /> <div>{decodeURI(city)}</div>
          </div>
        )}
        {date && (
          <div className="page-title">
            <PlayArrowIcon /> <div>{date}</div>
          </div>
        )}
      </div>
      {childrenWithProps}
    </div>
  )
}
