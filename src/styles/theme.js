'use client'
import { Roboto_Slab } from 'next/font/google'
import { createTheme } from '@mui/material/styles'
import { grey } from '@mui/material/colors'

const roboto = Roboto_Slab({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    mode: 'dark',
    // background: {
    //   default: grey[900],
    // },
    // text: {
    //   primary: '#fffff',
    // },
    // secondary: {
    //   light: '#ff7961',
    //   main: '#f44336',
    //   dark: '#ba000d',
    //   contrastText: '#000',
    // },
  },
})

export default theme
