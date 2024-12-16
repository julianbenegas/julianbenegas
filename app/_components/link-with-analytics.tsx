'use client'
import { JSX } from 'react'
import Link, { LinkProps } from 'next/link'
import { sendEvent } from 'basehub/events'

export const LinkWithAnalytics = ({
  ingestKey,
  onClick,
  href,
  ...props
}: { ingestKey: `${any}:${string}` } & LinkProps &
  Omit<JSX.IntrinsicElements['a'], 'href' | 'ref'>) => {
  return (
    <Link
      {...props}
      href={href}
      onClick={(e) => {
        sendEvent(ingestKey)
        onClick?.(e)
      }}
    />
  )
}
