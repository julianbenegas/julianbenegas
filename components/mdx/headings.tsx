import { PropsWithChildren, MouseEvent } from 'react'
import Router, { useRouter } from 'next/router'
import _kebab from 'lodash/kebabCase'

export const H1 = ({ children }: PropsWithChildren<{}>) => {
  return (
    <h1>
      {children}
      <style jsx>{`
        h1 {
          font-size: var(--fs-4xl);
          color: var(--grey-9);
          margin: 5rem 0 2rem;
          display: inline-block;
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
          font-size: var(--fs-3xl);
          color: var(--grey-9);
          margin: 4rem 0 2rem;
          cursor: pointer;
          display: inline-block;
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
          font-size: var(--fs-2xl);
          color: var(--grey-9);
          margin: 3rem 0 1.25rem;
          cursor: pointer;
          display: inline-block;
        }
      `}</style>
    </h3>
  )
}
