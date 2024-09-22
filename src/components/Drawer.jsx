import styled from '@emotion/styled'
import { useEffect } from 'react'

export default function Drawer({ children, isOpen, onClose }) {
  useEffect(() => {
    if (isOpen) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'unset'
  }, [isOpen])

  return (
    <>
      {isOpen && <Backdrop onClick={onClose} />}
      <DrawerWrapper isOpen={isOpen}>{children}</DrawerWrapper>
    </>
  )
}

const DrawerWrapper = styled.div`
  min-width: 180px;
  height: 100vh;
  padding: 1rem 0;
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  background-color: black;

  gap: 1.5rem;
  text-align: center;
  box-shadow: 2px 0 10px rgba(0, 0, 0, 0.5);
  transform: ${({ isOpen }) =>
    isOpen ? 'translateX(0)' : 'translateX(-100%)'};
  transition: transform 0.3s ease-in-out;
  z-index: 1001;

  & > :first-child {
    padding-bottom: 1rem;
    border-bottom: 0.8px solid gray;
  }

  & > a {
    text-transform: uppercase;

    &:hover {
      -webkit-text-stroke: 1px white;
    }
  }
`

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`
