import styled from 'styled-components'

export const NavbarContainer = styled.Header`
  height: 80px;
  background-color: transparent;
`

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 2rem;
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;

  span {
    margin-left: 1rem;
  }
`

export const NavMenu = styled.menu`
  display: flex;
  align-items: center;
`

export const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 5rem;
  }
`

export const NavMenuLink = styled.div``

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--colour-white);
  cursor: pointer;

  margin-right: 3rem;
`
export const NavIcon = styled.div`
  display: none;
  svg {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    color: var(--colour-white);
  }
  @media (man-width: 768px) {
    display: block;
  }
`

export const NavSearchWrapper = styled.div`
  height: 3rem;
  width: 3rem;
  border-radius: 50%;
  border: 1px solid var(--colour-white);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  svg {
    color: var(--colour-white);
  }
`

export const NavButton = styled.button`
  padding: 1rem 1.5rem;
  border: 1px solid var(--colour-white);
  border-radius: 0.5rem;
  background-color: transparent;
  color: var(--colour-white);
  cursor: pointer;
`
