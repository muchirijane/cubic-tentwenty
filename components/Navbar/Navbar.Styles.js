import styled from 'styled-components'

export const NavbarContainer = styled.header`
  height: 80px;

  position: fixed;
  width: 100%;
  z-index: 1000;
  background-color: ${({ scrollNav }) =>
    scrollNav ? '#07424d' : 'transparent'};
`

export const NavbarWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 8rem;

  @media (max-width: 1200px) {
    padding: 2rem 5rem;
  }
  @media (max-width: 700px) {
    padding: 2rem;
  }
`

export const NavLogo = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;

  span {
    margin-left: 2rem;
    color: #fff;
    svg {
      color: inherit;
    }
  }
`

export const NavMenu = styled.menu`
  display: flex;
  align-items: center;
  transition: all 0.3s ease-in-out;

  @media (max-width: 1200px) {
    display: ${({ click }) => (click ? 'block' : 'none')};
    position: absolute;
    top: calc(80px - 1rem);
    background-color: #07424d;
    color: var(--colour-black);
    width: 100vw;
    left: ${({ click }) => (click ? '0' : '-100vw')};
    padding: 3rem 2rem;
  }
`

export const NavMenuItem = styled.div`
  display: flex;
  align-items: center;
  &:not(:last-child) {
    margin-right: 5rem;
  }
  @media (max-width: 1200px) {
    flex-direction: column;
    &:not(:last-child) {
      margin-right: 0rem;
    }
  }
`

export const NavMenuLink = styled.div``

export const NavLink = styled.a`
  text-decoration: none;
  color: var(--colour-white);
  cursor: pointer;

  margin-right: 3rem;
  @media (max-width: 1200px) {
    display: inline-block;
    margin-right: 0rem;
    margin-bottom: 3.4rem;
  }
`
export const NavIcon = styled.div`
  display: none;
  cursor: pointer;
  svg {
    font-size: clamp(1.5rem, 2.5vw, 2.5rem);
    color: var(--colour-white);
  }
  @media (max-width: 1200px) {
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

  &:hover {
    transition: all 0.2s ease;
    background-color: var(--colour-white);
    color: var(--colour-black);
  }
`
