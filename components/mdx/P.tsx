/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren<{}>) => {
  return <Styled.p>{children}</Styled.p>
}
