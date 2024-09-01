import '@styles/globals.css'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import NavigationBar from '@components/NavigationBar'
import MainContent from '@components/MainContent'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

import theme from '@styles/theme'

export const metadata = {
  title: 'yeji.log',
  description: 'self made web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <NavigationBar />
            <MainContent>{children}</MainContent>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
