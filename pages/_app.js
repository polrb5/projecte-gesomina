import { ThemeProvider } from 'styled-components'
import GlobalStyle from '../styles/GlobalStyles';
import theme from '../styles/theme';
import { Assistant } from '@next/font/google'

const inter = Assistant({ subsets: ['latin'] })

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${inter.style.fontFamily};
        }
      `}</style>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
