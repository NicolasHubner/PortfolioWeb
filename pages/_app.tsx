import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Portfólio Nicolas Hübner</title>
        <meta name="description" content="Portfólio Nicolas Hübner" />
        <link rel="icon" href="https://img.icons8.com/fluency/48/000000/mac-book-pro-m1.png" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
