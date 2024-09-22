'use client'
import { useState } from 'react'
import styled from '@emotion/styled'
import Link from 'next/link'
import Drawer from '@components/Drawer'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <HeaderWrapper>
      <Drawer isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerLogo href="/">yeji.log</DrawerLogo>
        <Link href="/daily" onClick={() => setIsOpen(false)}>
          daily
        </Link>
        <Link href="/travel" onClick={() => setIsOpen(false)}>
          Travel
        </Link>
      </Drawer>
      <NavIcon onClick={() => setIsOpen(true)}>
        <MenuRoundedIcon />
      </NavIcon>
      <Logo href="/">yeji.log</Logo>
      <LinkWrapper>
        <Link href="/daily">daily</Link>
        <Link href="/travel">travel</Link>
      </LinkWrapper>
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 3.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.5rem;
  z-index: 999;
  backdrop-filter: blur(1rem);
`

const NavIcon = styled.div`
  display: none;

  /* mobile */
  @media (max-width: 479px) {
    display: block;
  }
`
const DrawerLogo = styled.a`
  color: gray;
  font-size: 1.2rem;
  font-weight: 500;
`

const Logo = styled.a`
  color: gray;
  font-size: 1.2rem;
  font-weight: 500;

  /* mobile */
  @media (max-width: 479px) {
    display: none;
  }
`

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  text-transform: uppercase;

  & > a {
    &:hover {
      -webkit-text-stroke: 1px white;
    }
  }

  /* mobile */
  @media (max-width: 479px) {
    display: none;
  }
  
}
`
