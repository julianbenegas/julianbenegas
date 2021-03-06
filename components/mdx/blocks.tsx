import { PropsWithChildren } from 'react'

export const P = ({ children }: PropsWithChildren<{}>) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          color: var(--grey-9);
          margin-bottom: 1.5rem;
          line-height: var(--lh-normal);
        }
      `}</style>
    </p>
  )
}
