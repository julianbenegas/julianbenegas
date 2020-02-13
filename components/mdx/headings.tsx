import { PropsWithChildren, MouseEvent } from 'react'
import Router, { useRouter } from 'next/router'
import _kebab from 'lodash/kebabCase'

export const H1 = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const id = _kebab(typeof children === 'string' ? children : 'undefined')

  const handleClick = (e: MouseEvent<HTMLHeadingElement>) => {
    const { id } = e.currentTarget
    const asPath = `${router.asPath.split('#')[0]}#${id}`
    Router.replace(router.pathname, asPath)
  }

  return (
    <h1 id={id} onClick={handleClick}>
      {children}
      <style jsx>{`
        h1 {
          color: var(--grey-9);
          margin: 1.5rem 0 1rem;
          cursor: pointer;
        }
      `}</style>
    </h1>
  )
}

export const H2 = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const id = _kebab(typeof children === 'string' ? children : 'undefined')

  const handleClick = (e: MouseEvent<HTMLHeadingElement>) => {
    const { id } = e.currentTarget
    const asPath = `${router.asPath.split('#')[0]}#${id}`
    Router.replace(router.pathname, asPath)
  }

  return (
    <h2 id={id} onClick={handleClick}>
      {children}
      <style jsx>{`
        h2 {
          color: var(--grey-9);
          margin: 1rem 0 0.75rem;
          cursor: pointer;
        }
      `}</style>
    </h2>
  )
}

export const H3 = ({ children }: PropsWithChildren<{}>) => {
  const router = useRouter()
  const id = _kebab(typeof children === 'string' ? children : 'undefined')

  const handleClick = (e: MouseEvent<HTMLHeadingElement>) => {
    const { id } = e.currentTarget
    const asPath = `${router.asPath.split('#')[0]}#${id}`
    Router.replace(router.pathname, asPath)
  }

  return (
    <h3 id={id} onClick={handleClick}>
      {children}
      <style jsx>{`
        h3 {
          color: var(--grey-9);
          margin-bottom: 1rem;
          cursor: pointer;
        }
      `}</style>
    </h3>
  )
}
