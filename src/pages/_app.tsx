import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme/theme'
import { wrapper } from 'redux/store'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )

}

export default wrapper.withRedux(MyApp);
