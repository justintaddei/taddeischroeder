import PageHeader from '@/components/singletons/PageHeader'
import { AppProps } from 'next/app'
import React from 'react'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <PageHeader />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
