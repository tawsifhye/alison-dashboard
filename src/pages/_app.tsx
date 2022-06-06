import "../styles/globals.css";
import type { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import { theme } from "../theme/theme";
import { wrapper } from "redux/store";
import Navbar from "components/Navbar";
import Footer from "components/Footer";
import MobileNav from "components/MobileNav";
import { useEffect, useState } from "react";
function MyApp({ Component, pageProps }: AppProps) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  if (!showChild) {
    return null;
  }

  if (typeof window === "undefined") {
    return <></>;
  } else {
    return (
      <>
        <ThemeProvider theme={theme}>
          <Navbar />
          <MobileNav />
          <Component {...pageProps} />
          <Footer />
        </ThemeProvider>
      </>
    );
  }
}

export default wrapper.withRedux(MyApp);
