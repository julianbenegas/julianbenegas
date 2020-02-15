import { useRouter } from 'next/router'

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
        href={`https://twitter.com/intent/tweet?text=${title}&url=https://julianbenegas.now.sh${router.route}&via=julianbenegas8`}
        data-size="large"
        target="_blank"
        rel="noopener noreferrer"
      >
        Share on Twitter
      </a>
      <style jsx>{`
        footer {
        }
        p {
          color: var(--grey-9);
          margin: 40px 0 20px;
        }
        a {
          padding: 6px 12px;
          border-radius: 6px;
          background: hsl(203, 89%, 53%);
          color: white;
        }
      `}</style>
    </footer>
  )
}
