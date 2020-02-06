import Logo from './Logo'
import Search from './Search'
import Pinned from './Pinned'
import Tags from './Tags'
import { useState } from 'react'

export function Nav() {
  return (
    <nav>
      <Logo />
      <Search />
      <Pinned />
      <Tags />
      <style jsx>{`
        nav {
          height: 100vh;
          min-width: 320px;
          width: 320px;
          background: var(--grey-1);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px;
        }
      `}</style>
    </nav>
  )
}

export function MobileNav() {
  return (
    <nav>
      <Logo />
      <HamburgerMenu />
      <style jsx>{`
        nav {
          z-index: var(--zi-nav);
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          width: 100vw;
          height: 64px;
          background: var(--grey-1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px;
        }
      `}</style>
    </nav>
  )
}

function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen && 'isOpen'}`}
      >
        <span />
        <span />
      </button>
      <div className={`menu ${isOpen && 'isOpen'}`}>
        <Search />
        <Pinned />
        <Tags />
      </div>
      <style jsx>{`
        button {
          width: 24px;
          height: 24px;
          padding: 4px;
          position: relative;
          border: none;
          background: var(--grey-1);
        }
        button span {
          height: 1px;
          width: 100%;
          position: absolute;
          background: var(--grey-9);
          left: 0;
          transition: all 0.1s;
        }
        button span:nth-child(1) {
          top: 8px;
        }
        button span:nth-child(2) {
          top: 16px;
        }
        button.isOpen span:nth-child(1) {
          top: 11px;
          transform: rotate(45deg);
        }
        button.isOpen span:nth-child(2) {
          top: 11px;
          transform: rotate(-45deg);
        }
        .menu {
          transition: all 0.3s;
          z-index: var(--zi-nav);
          height: 0;
          padding: 0 20px;
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          width: 100vw;
          background: var(--grey-1);
          overflow: hidden;
        }
        .menu.isOpen {
          height: calc(100vh - 64px);
        }
      `}</style>
    </div>
  )
}
