import { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren<{}>) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          color: var(--grey-9);
          margin-bottom: 2rem;
          line-height: var(--lh-relaxed);
          font-size: 18px;
        }
      `}</style>
    </p>
  )
}
