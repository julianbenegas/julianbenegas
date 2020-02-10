import Link from 'next/link'
import { ReactNode } from 'react'
import { FiExternalLink } from 'react-icons/fi'

export interface LinkProps {
  children: ReactNode
  href: string
}

export const A = (props: LinkProps) => (
  <a {...props} target="_blank" rel="noopener noreferrer">
    {props.children}
    <i>
      <FiExternalLink />
    </i>
    <style jsx>{`
      a {
        color: #0070f3;
      }
      a:hover {
        text-decoration: underline;
      }
      i {
        font-size: var(--fs-xs);
        margin-left: 2px;
      }
    `}</style>
  </a>
)

interface NextLinkProps {
  children: ReactNode
  href: string
  hrefAs: string
}

export const NextLink = ({ href, hrefAs = href, children }: NextLinkProps) => (
  <Link href={href} as={hrefAs}>
    <a>
      {children}
      <style jsx>{`
        a {
          color: #0070f3;
        }
        a:hover {
          text-decoration: underline;
        }
      `}</style>
    </a>
  </Link>
)
