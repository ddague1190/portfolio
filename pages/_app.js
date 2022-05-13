import "../styles/globals.css"
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from "../components/analytics"
import siteMetadata from "../data/siteMetadata"
import LayoutWrapper from "../components/layout/LayoutWrapper"


export default function App({ Component, pageProps }) {



  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <Analytics />

      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
