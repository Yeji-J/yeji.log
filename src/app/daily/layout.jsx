'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import PlayArrowIcon from '@mui/icons-material/PlayArrow'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import styled from '@emotion/styled'
import '@styles/travelDetail.css'

export default function DailyLayout({ children }) {
  const params = useParams()
  const date = params.date ? params.date : ''

  return (
    <div>
      <div className="title-container">
        <Title className="main">
          <FormatListBulletedRoundedIcon />
          <div>DAILY LOG</div>
        </Title>
      </div>
      {children}
    </div>
  )
}

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`
