import { useState } from 'react'
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

  const menuIconHandler = () => {
    setClick((prevIcon) => !prevIcon)
  }
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
    <NavbarContainer>
      <NavbarWrapper>
        <NavLogo>
          <Link href="/">
            <Image src="/logo.svg" height={30} width={30} layout="fixed" />
          </Link>
          <span>Cubic Holdings</span>
        </NavLogo>
        <NavMenu>
          <NavMenuItem>
            {navItems1.map((item, index) => (
              <NavMenuLink key={index}>
                <Link href={item.href}>
                  <NavLink>{item.name}</NavLink>
                </Link>
              </NavMenuLink>
            ))}
          </NavMenuItem>
          <NavMenuItem>
            {navItems2.map((item, index) => (
              <NavMenuLink key={index}>
                <Link href={item.href}>
                  <NavLink>{item.name}</NavLink>
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
