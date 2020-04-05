/** @jsx jsx */
import { jsx, Flex } from 'theme-ui'
import Logo from './Logo'
import Search from './Search'
import Tags from './Tags'
import { useState } from 'react'
import Social from './Social'

interface NavProps {
  tags: string[]
}

export function Nav({ tags }: NavProps) {
  return (
    <nav
      sx={{
        height: '100vh',
        bg: 'muted',
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
        flexDirection: 'column',
        pt: 4,
        variant: 'layout.sidebar'
      }}
    >
      <div sx={{ px: 4, pb: 3, width: '100%' }}>
        <Logo />
      </div>
      <Flex
        sx={{
          px: 4,
          overflow: 'hidden',
          height: 'calc(100vh - 64px)',
          overflowY: 'auto',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: '100%'
        }}
      >
        <div>
          <Search />
          <Tags tags={tags} />
        </div>
        <div>
          <Social />
        </div>
      </Flex>
    </nav>
  )
}

export function MobileNav({ tags }: NavProps) {
  return (
    <Flex
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        width: '100vw',
        height: 5,
        bg: 'muted',
        justifyContent: 'space-between',
        alignItems: 'center',
        p: 3,
        zIndex: 'nav'
      }}
    >
      <Logo />
      <HamburgerMenu tags={tags} />
    </Flex>
  )
}

function HamburgerMenu({ tags }: { tags: string[] }) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <nav>
      <button
        onClick={() => setIsOpen(!isOpen)}
        sx={{
          width: '24px',
          height: '24px',
          padding: '4px',
          position: 'relative',
          border: 'none',
          bg: 'muted'
        }}
      >
        <span
          sx={{
            height: '1px',
            width: '100%',
            position: 'absolute',
            bg: 'text',
            left: '0',
            transition: 'all 0.1s',
            top: isOpen ? '11px' : '8px',
            transform: (isOpen && 'rotate(45deg)') || ''
          }}
        />
        <span
          sx={{
            height: '1px',
            width: '100%',
            position: 'absolute',
            bg: 'text',
            left: '0',
            transition: 'all 0.1s',
            top: isOpen ? '11px' : '16px',
            transform: (isOpen && 'rotate(-45deg)') || ''
          }}
        />
      </button>
      <Flex
        className={`menu ${isOpen && 'isOpen'}`}
        sx={{
          transition: 'all 0.3s',
          position: 'fixed',
          top: 5,
          left: '0',
          right: '0',
          width: '100vw',
          maxHeight: (theme) => `calc(100vh - ${theme.space[5]}px)`,
          bg: 'muted',
          px: 3,
          overflowY: 'auto',
          flexDirection: 'column',
          justifyContent: 'space-between',
          zIndex: 'nav',
          bottom: (theme) =>
            isOpen ? '0' : `calc(100vh - ${theme.space[5]}px)`
        }}
      >
        <div>
          <Search />
          <Tags tags={tags} />
        </div>
        <div>
          <Social />
        </div>
      </Flex>
    </nav>
  )
}
