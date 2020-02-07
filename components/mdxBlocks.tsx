import { PropsWithChildren } from 'react'

type Props = PropsWithChildren<{}>

export const H1 = ({ children }: Props) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          color: green;
        }
      `}</style>
    </h1>
  )
}

export const H2 = ({ children }: Props) => {
  return (
    <h2>
      {children}
      <style jsx>{`
        h2 {
          color: green;
        }
      `}</style>
    </h2>
  )
}

export const H3 = ({ children }: Props) => {
  return (
    <h3>
      {children}
      <style jsx>{`
        h3 {
          color: green;
        }
      `}</style>
    </h3>
  )
}

export const P = ({ children }: Props) => {
  return (
    <p>
      {children}
      <style jsx>{`
        p {
          color: green;
        }
      `}</style>
    </p>
  )
}
