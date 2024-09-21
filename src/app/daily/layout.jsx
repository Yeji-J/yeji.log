'use client'
import React from 'react'
import { useParams } from 'next/navigation'
import FormatListBulletedRoundedIcon from '@mui/icons-material/FormatListBulletedRounded'
import Title from '@components/Title'
import styled from '@emotion/styled'

export default function Layout({ children }) {
  const params = useParams()

  return (
    <div>
      <TitleWrapper>
        <Title icon={<FormatListBulletedRoundedIcon />} text="daily log" />
      </TitleWrapper>
      {children}
    </div>
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
