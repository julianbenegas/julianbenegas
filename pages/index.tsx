import * as React from 'react'
import { Nav, MobileNav } from '../components/nav'
import Tree from '../components/Tree'

export default () => {
  return (
    <div>
      <div className="desktop-nav">
        <Nav />
      </div>
      <div className="mobile-nav">
        <MobileNav />
      </div>
      <Tree />
      <style jsx>{`
        div {
          display: flex;
        }
        .mobile-nav {
          display: none;
        }

        @media screen and (max-width: 620px) {
          .desktop-nav {
            display: none;
          }
          .mobile-nav {
            display: block;
          }
        }
      `}</style>
    </div>
  )
}
