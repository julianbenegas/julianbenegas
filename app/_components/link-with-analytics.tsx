'use client'
import Link, { LinkProps } from 'next/link'
import { sendEvent } from 'basehub/analytics'

export const LinkWithAnalytics = ({
  _analyticsKey,
  onClick,
  href,
  ...props
}: { _analyticsKey: string } & LinkProps &
  Omit<JSX.IntrinsicElements['a'], 'href' | 'ref'>) => {
  return (
    <Link
      {...props}
      href={href}
      onClick={(e) => {
        sendEvent({ name: 'click', _analyticsKey })
        onClick?.(e)
      }}
    />
  )
}
