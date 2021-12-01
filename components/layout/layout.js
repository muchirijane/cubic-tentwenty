import React from 'react'
import Navbar from '../Navbar/Navbar'
import Meta from './Meta'

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <Meta pageTitle={pageTitle} />
      <Navbar />
      <main>{children}</main>
    </>
  )
}
