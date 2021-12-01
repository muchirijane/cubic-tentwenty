import React from 'react'
import GlobalStyles from '../../GlobalStyles/GlobalStyles'
import Navbar from '../Navbar/Navbar'
import Meta from './Meta'

export default function Layout({ pageTitle, children }) {
  return (
    <>
      <GlobalStyles />
      <Meta pageTitle={pageTitle} />
      <Navbar />
      <main>{children}</main>
    </>
  )
}
