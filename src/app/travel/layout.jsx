'use client'
import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined'

export default function TravelLayout({ children }) {
  const params = useParams()
  const date = params.date ? params.date.replaceAll('-', '.') : ''
  const country = params.country ? params.country : ''
  const city = params.city ? params.city : ''

  // children에 country, date, city 값 전달
  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, { country, city, date: params.date })
  )

  return (
    <Stack direction="column" sx={{ justifyContent: 'flex-start' }}>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          minWidth: 900,
          alignItems: 'center',
          justifyContent: 'flex-start',
        }}
      >
        <AirplaneTicketOutlinedIcon />
        <Typography>TRAVEL LOG</Typography>
        {country && (
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <PlayArrowIcon /> <Typography>{country}</Typography>
          </Stack>
        )}
        {city && (
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <PlayArrowIcon /> <Typography>{decodeURI(city)}</Typography>
          </Stack>
        )}
        {date && (
          <Stack direction="row" spacing={1} sx={{ alignItems: 'center' }}>
            <PlayArrowIcon /> <Typography>{date}</Typography>
          </Stack>
        )}
      </Stack>
      {childrenWithProps}
    </Stack>
  )
}
