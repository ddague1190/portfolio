import "../styles/globals.css"
import { useRouter } from 'next/router'
import { ThemeProvider } from 'next-themes'
import Head from 'next/head'
import Analytics from "../components/analytics"
import siteMetadata from "../data/siteMetadata"
import LayoutWrapper from "../components/layout/LayoutWrapper"
import { proxy, useProxy, useSnapshot } from 'valtio'
import { useEffect } from "react"
import state from "../store"
const isDevelopment = process.env.NODE_ENV === 'development'
const isSocket = process.env.SOCKET

export function useStore() {
  return useSnapshot(store)
}

// const store = proxy({
//   sections: 3,
//   pages: 3, 
//   zoom: 75,
//   top: 0
// })

// export const set_TOP = (val) => {
//   store.top = val
// }

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
