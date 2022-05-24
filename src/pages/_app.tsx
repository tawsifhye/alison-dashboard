import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material/styles'
import { theme } from '../theme/theme'
import { wrapper } from 'redux/store'
import Navbar from 'components/Navbar'
import Footer from 'components/Footer'
import MobileNav from 'components/MobileNav'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <Navbar /> */}
        <MobileNav />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )

}

export default wrapper.withRedux(MyApp);
