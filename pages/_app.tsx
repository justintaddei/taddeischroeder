import PageHeader from '@/components/singletons/PageHeader'
import { AppProps } from 'next/app'
import Head from 'next/head'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
