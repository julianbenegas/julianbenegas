import Logo from './Logo'
import Search from './Search'
import Pinned from './Pinned'
import Tags from './Tags'

export default () => {
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

        @media screen and (max-width: 620px) {
          nav {
            display: none;
          }
        }
      `}</style>
    </nav>
  )
}
