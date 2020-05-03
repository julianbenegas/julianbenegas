/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
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
    <Styled.h1 id={id} onClick={handleClick} sx={{ cursor: 'pointer' }}>
      {children}
    </Styled.h1>
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
    <Styled.h2 id={id} onClick={handleClick} sx={{ cursor: 'pointer' }}>
      {children}
    </Styled.h2>
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
    <Styled.h3 id={id} onClick={handleClick} sx={{ cursor: 'pointer' }}>
      {children}
    </Styled.h3>
  )
}
