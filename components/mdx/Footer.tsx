import { useRouter } from 'next/router'
import { twitterUsername } from '../../lib/constants'

export default ({
  message = 'Thanks for reading. Julián.',
  title
}: {
  message: string
  title: string
}) => {
  const router = useRouter()

  return (
    <footer>
      <p>{message}</p>
      <a
        className="twitter-share-button"
        href={`https://twitter.com/intent/tweet?text=${title}&url=https://julianbenegas.now.sh${router.route}&via=${twitterUsername}`}
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <style jsx>{`
        p {
          color: var(--grey-9);
          margin: 40px 0 20px;
          font-size: 18px;
        }
        a {
          padding: 6px 12px;
          border-radius: 6px;
          background: hsl(203, 89%, 53%);
          color: white;
        }
        @media screen and (max-width: 700px) {
          p {
            font-size: 16px;
          }
        }
      `}</style>
    </footer>
  )
}
