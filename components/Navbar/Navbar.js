import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { NavbarContainer, NavLogo } from './Navbar.Styles'

export default function Navbar() {
  return (
    <nav>
      <NavbarContainer>
        <NavLogo>
          <Link href="/">
            <Image src="/logo.svg" height={30} width={30} layout="fixed" />
          </Link>
        </NavLogo>
      </NavbarContainer>
    </nav>
  )
}
