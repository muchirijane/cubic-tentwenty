import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { BiSearch, BiMenuAltRight, BiX } from 'react-icons/bi'
import {
  NavbarContainer,
  NavbarWrapper,
  NavLogo,
  NavMenu,
  NavLink,
  NavMenuItem,
  NavButton,
  NavSearchWrapper,
  NavIcon,
  NavMenuLink,
} from './Navbar.Styles'

export default function Navbar() {
  const [click, setClick] = useState(false)
  const [scrollNav, setScrollNav] = useState(false)

  const menuIconHandler = () => {
    setClick((prevIcon) => !prevIcon)
  }
  const closeMenuHandler = () => {
    setClick(false)
  }
  const changeScrollHandler = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeScrollHandler)
  }, [])
  const navItems1 = [
    { name: 'Private Clients', href: '/' },
    { name: 'Corporate', href: '/' },
    { name: 'Insights', href: '/' },
    { name: 'Contact', href: '/' },
  ]
  const navItems2 = [
    { name: 'About', href: '/' },
    { name: 'Careers', href: '/' },
  ]
  return (
    <NavbarContainer scrollNav={scrollNav}>
      <NavbarWrapper>
        <NavLogo>
          <Link href="/">
            <Image src="/logo.svg" height={30} width={30} layout="fixed" />
          </Link>
          <span>Cubic LTD</span>
        </NavLogo>

        {/* navbar Menu */}
        <NavMenu click={click}>
          <NavMenuItem>
            {navItems1.map((item, index) => (
              <NavMenuLink key={index}>
                <Link href={item.href}>
                  <NavLink onClick={closeMenuHandler}>{item.name}</NavLink>
                </Link>
              </NavMenuLink>
            ))}
          </NavMenuItem>
          <NavMenuItem>
            {navItems2.map((item, index) => (
              <NavMenuLink key={index}>
                <Link href={item.href}>
                  <NavLink onClick={closeMenuHandler}>{item.name}</NavLink>
                </Link>
              </NavMenuLink>
            ))}
          </NavMenuItem>
        </NavMenu>
        <NavSearchWrapper>
          <BiSearch />
        </NavSearchWrapper>
        <NavButton>Book A Meeting</NavButton>
        <NavIcon onClick={menuIconHandler}>
          {click ? <BiX /> : <BiMenuAltRight />}
        </NavIcon>
      </NavbarWrapper>
    </NavbarContainer>
  )
}
