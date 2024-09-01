'use client'
import { Box, Stack, Toolbar } from '@mui/material'

export default function MainContent({ children }) {
  return (
    <Box sx={{ p: 3 }}>
      <Toolbar />
      <Stack
        direction="column"
        spacing={1}
        sx={{
          alignItems: 'center',
        }}
      >
        {children}
      </Stack>
    </Box>
  )
}
