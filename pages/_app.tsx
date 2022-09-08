import type { AppProps } from 'next/app'
import { CssBaseline, ThemeProvider } from '@mui/material'
import theme from '../utils/theme'
import { DAppProvider } from '@usedapp/core'
import { config } from '../utils/dapp'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </DAppProvider>
  )
}

export default MyApp
