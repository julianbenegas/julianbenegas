import { FiGithub, FiTwitter, FiMail } from 'react-icons/fi'
import { FaDribbble } from 'react-icons/fa'
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
      <a
        href="https://dribbble.com/julianbenegas"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaDribbble />
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
