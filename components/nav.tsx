import Logo from './Logo'
import Search from './Search'
import Pinned from './Pinned'
import Tags from './Tags'
import { useState } from 'react'
import Social from './Social'
import { FullEvent } from '../interfaces/event'
import { Tag } from '../interfaces/tag'

interface NavProps {
  pinned: FullEvent[]
  tags: Tag[]
}

export function Nav({ pinned, tags }: NavProps) {
  return (
    <nav>
      <div className="logo">
        <Logo />
      </div>
      <div className="menu">
        <div>
          <Search />
          <Pinned pinned={pinned} />
          <Tags tags={tags} />
        </div>
        <div>
          <Social />
        </div>
      </div>
      <style jsx>{`
        nav {
          height: 100vh;
          min-width: 320px;
          width: 320px;
          background: var(--grey-1);
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px 0 0;
          z-index: var(--zi-nav);
        }
        .logo {
          padding: 0 40px 20px;
        }
        .menu {
          background: var(--grey-1);
          overflow: hidden;
          padding: 0 40px;
          height: calc(100vh - 64px);
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
      `}</style>
    </nav>
  )
}

export function MobileNav({ pinned, tags }: NavProps) {
  return (
    <nav>
      <Logo />
      <HamburgerMenu pinned={pinned} tags={tags} />
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

function HamburgerMenu({ pinned, tags }: { pinned: FullEvent[]; tags: Tag[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${isOpen && 'isOpen'}`}
      >
        <span />
        <span />
      </button>
      <div className={`menu ${isOpen && 'isOpen'}`}>
        <div>
          <Search />
          <Pinned pinned={pinned} />
          <Tags tags={tags} />
        </div>
        <div>
          <Social />
        </div>
      </div>
      <style jsx>{`
        nav {
          z-index: var(--zi-nav);
        }
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
          position: fixed;
          top: 64px;
          left: 0;
          right: 0;
          width: 100vw;
          background: var(--grey-1);
          padding: 0 20px;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }
        .menu.isOpen {
          height: calc(100vh - 64px);
          overflow-y: auto;
        }
      `}</style>
    </nav>
  )
}
