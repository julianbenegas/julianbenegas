import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  atomOneLight
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { ReactNode } from 'react'
import { useColorMode } from '../../context/colorModeContext'

export const Code = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => {
  const { colorMode } = useColorMode()
  return (
    <SyntaxHighlighter
      language={className.split('language-')[1]}
      style={colorMode === 'dark' ? atomOneDark : atomOneLight}
      customStyle={{
        margin: '20px 0',
        padding: '20px',
        boxShadow: 'var(--bs-lg)',
        fontFamily: 'var(--ff-mono)',
        fontSize: 'var(--fs-sm)'
      }}
    >
      {children}
    </SyntaxHighlighter>
  )
}

export const InlineCode = ({ children }: { children: ReactNode }) => (
  <span>
    {children}
    <style jsx>{`
      span {
        font-family: var(--ff-mono);
        font-size: var(--fs-sm);
        padding: 2px 6px;
        margin: 0 2px;
        border-radius: 4px;
        background: var(--grey-1);
        color: var(--teal-3);
      }
    `}</style>
  </span>
)
