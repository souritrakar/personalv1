import '../styles/globals.css'
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { ThemeProvider } from "next-themes";

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider defaultTheme='dark' attribute="class">
    <Component {...pageProps} />
  </ThemeProvider>
  )
}

export default MyApp
