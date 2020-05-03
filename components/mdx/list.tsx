import { PropsWithChildren } from 'react'
import { Styled } from 'theme-ui'

export const UL = ({ children }: PropsWithChildren<{}>) => (
  <Styled.ul>{children}</Styled.ul>
)

export const OL = ({ children }: PropsWithChildren<{}>) => (
  <Styled.ol>{children}</Styled.ol>
)

export const LI = ({ children }: PropsWithChildren<{}>) => (
  <Styled.li>{children}</Styled.li>
)
