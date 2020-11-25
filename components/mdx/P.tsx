import { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren<{}>) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          color: var(--grey-9);
          margin-bottom: 1rem;
          line-height: var(--lh-relaxed);
          font-size: 16px;
        }
        @media screen and (max-width: 700px) {
          p {
            font-size: 14px;
          }
        }
      `}</style>
    </p>
  )
}
