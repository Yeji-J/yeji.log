'use client'
import React from 'react'
import { Typography, Stack, Box } from '@mui/material'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined'

export default function DailyLayout({ children }) {
  const params = useParams()
  const date = params.date ? params.date : ''
  const country = params.country ? params.country : ''

  return (
    <Stack direction="column">
      <Stack
        direction="row"
        spacing={1}
        sx={{
          pb: 1,
          alignItems: 'center',
        }}
      >
        <DateRangeOutlinedIcon />
        <Typography>DAILY LOG</Typography>
      </Stack>
      {children}
    </Stack>
  )
}
