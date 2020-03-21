import SyntaxHighlighter from 'react-syntax-highlighter'
import {
  atomOneDark,
  atomOneLight
} from 'react-syntax-highlighter/dist/cjs/styles/hljs'
import { ReactNode } from 'react'
import { useColorMode } from '../../context/colorModeContext'
import { FiCopy } from 'react-icons/fi'
import toast from '../toast/toast'

export const Code = ({
  children,
  className
}: {
  children: ReactNode
  className: string
}) => {
  const { colorMode } = useColorMode()

  function fallbackCopyTextToClipboard(text: string) {
    const textArea = document.createElement('textarea')
    textArea.value = text
    textArea.style.position = 'fixed' //avoid scrolling to bottom
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    document.execCommand('copy')
    document.body.removeChild(textArea)
  }

  function copyToClipboard() {
    const text = children as string
    if (!navigator.clipboard) {
      return fallbackCopyTextToClipboard(text)
    }
    navigator.clipboard.writeText(text)
    toast('success', 'Copied')
  }

  return (
    <div>
      <button title="Copy to clipboard" onClick={copyToClipboard}>
        <FiCopy />
      </button>
      <SyntaxHighlighter
        language={className.split('language-')[1]}
        style={colorMode === 'dark' ? atomOneDark : atomOneLight}
        customStyle={{
          margin: '20px 0',
          padding: '20px',
          background: 'var(--grey-1)',
          borderRadius: '8px',
          fontFamily: 'var(--ff-mono)',
          fontSize: 'var(--fs-sm)'
        }}
      >
        {children}
      </SyntaxHighlighter>
      <style jsx>{`
        div {
          position: relative;
        }
        button {
          position: absolute;
          top: 10px;
          right: 10px;
          border: none;
          padding: 4px;
          background: transparent;
          color: var(--grey-9);
          font-size: var(--fs-sm);
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          border-radius: 4px;
        }
        button:hover {
          background: var(--grey-2);
        }
      `}</style>
    </div>
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
