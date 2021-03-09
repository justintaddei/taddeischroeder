import PageFooter from '@/components/singletons/PageFooter'
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
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />

        <title>{title}</title>
        <meta name="description" content={description} />

        <meta name="og:image" content="https://taddeischroeder.com/og-image.jpg" />
        <meta name="og:description" content={description} />

        <link rel="canonical" href="https://taddeischroeder.com" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#dc3d4b" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#dc3d4b" />

        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500;700&display=swap"
          rel="stylesheet"
        />
      </Head>

      <div className="fade-in">{children}</div>
      <PageFooter />
    </>
  )
}

export default Layout
