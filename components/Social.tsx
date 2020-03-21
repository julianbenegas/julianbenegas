import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import { twitterUsername } from '../lib/constants'

export default () => {
  return (
    <div>
      <a
        href="mailto:julianbenegas99@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiMail />
      </a>
      <a
        href={`https://twitter.com/${twitterUsername}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href="https://github.com/julianbenegas/julianbenegas"
        target="_blank"
        rel="noopener noreferrer"
      >
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
          color: var(--grey-7);
          font-size: var(--fs-2xl);
        }
      `}</style>
    </div>
  )
}
