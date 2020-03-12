import { PropsWithChildren } from 'react'

export const UL = ({ children }: PropsWithChildren<{}>) => (
  <ul>
    {children}
    <style jsx>{`
      ul {
        margin: 0 0 20px 0;
        padding: 0;
        position: relative;
        left: 22px;
      }
    `}</style>
  </ul>
)

export const OL = ({ children }: PropsWithChildren<{}>) => (
  <ol>
    {children}
    <style jsx>{`
      ol {
        margin: 0 0 20px 0;
        padding: 0;
        position: relative;
        left: 22px;
      }
    `}</style>
  </ol>
)

export const LI = ({ children }: PropsWithChildren<{}>) => (
  <li>
    {children}
    <style jsx>{`
      li {
        color: var(--grey-9);
        margin-bottom: 0.5rem;
        line-height: 1.5;
        font-size: 18px;
      }
    `}</style>
  </li>
)
