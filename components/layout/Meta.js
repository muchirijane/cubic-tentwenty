import React from 'react'
import Head from 'next/head'
export default function Meta({ pageTitle }) {
  const author = 'Jane Muthoni Muchiri'
  const description =
    'Cubic is a investing company that provides you with the best investment opportunities in the world for your business and family.'
  const keywords = 'Invest, finance, money'
  const themeColor = '#ffffff'
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="theme-color" content={themeColor} />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon/favicon-16x16.png"
      />

      <link rel="icon" href="/favicon/favicon.ico" />
      <title key="title">{pageTitle}</title>
    </Head>
  )
}
