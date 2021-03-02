import PageHeader from '@/components/singletons/PageHeader'
import Head from 'next/head'
import React, { PropsWithChildren } from 'react'

interface Props {
  title: string
  description: string
}

const Layout = ({ title, description, children }: PropsWithChildren<Props>) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <PageHeader />
      {children}
    </>
  )
}

export default Layout
