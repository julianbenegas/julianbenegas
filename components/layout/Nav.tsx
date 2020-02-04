import Logo from '../Logo'

export default () => {
  return (
    <nav>
      <Logo />
      <style jsx>{`
        nav {
          height: 100vh;
          min-width: 320px;
          background: #f3f4f4;
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 40px;
        }
      `}</style>
    </nav>
  )
}
