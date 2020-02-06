import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'

export default () => {
  return (
    <div>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FiMail />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FiTwitter />
      </a>
      <a href="http://" target="_blank" rel="noopener noreferrer">
        <FiGithub />
      </a>
      <style jsx>{`
        div {
          padding: 20px;
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        a {
          color: var(--grey-9);
          font-size: var(--fs-2xl);
        }
      `}</style>
    </div>
  )
}
