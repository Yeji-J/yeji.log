'use client'
import { Box, Stack, Toolbar } from '@mui/material'

export default function MainContent({ children }) {
  return (
    <div className="main-content">
      <Toolbar />
      {children}
    </div>
  )
}
