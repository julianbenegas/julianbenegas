import { PropsWithChildren } from 'react'

export const H1 = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          color: var(--grey-9);
          margin: 1.5rem 0 1rem;
        }
      `}</style>
    </h1>
  )
}

export const H2 = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h2>
      {children}
      <style jsx>{`
        h2 {
          color: var(--grey-9);
          margin: 1rem 0 0.75rem;
        }
      `}</style>
    </h2>
  )
}

export const H3 = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          color: var(--grey-9);
          margin-bottom: 1rem;
        }
      `}</style>
    </h3>
  )
}
