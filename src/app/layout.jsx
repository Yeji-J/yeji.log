import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import Header from '@components/Header'
import Main from '@components/Main'
import Footer from '@components/Footer'
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import theme from '@styles/theme'
import '@styles/global.css'

export const metadata = {
  title: 'yeji.log',
  description: 'self-made web',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <Main>{children}</Main>
            <Footer>© 2024 Yeji Jung. All rights reserved.</Footer>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  )
}
