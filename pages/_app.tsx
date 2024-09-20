import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
        <Head>
            <title>Nicolas Hübner</title>
            <meta name="description" content="Nicolas Hübner"/>
            <link rel="icon" href="https://img.icons8.com/fluency/48/000000/mac-book-pro-m1.png"/>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400..900&display=swap"
                  rel="stylesheet"/>
        </Head>
        <Component {...pageProps} />
    </>
  )
}

export default MyApp
