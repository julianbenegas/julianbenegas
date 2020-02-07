import { MDXProvider } from '@mdx-js/react'
import { P } from '../mdxBlocks'
import Logo from '../Logo'

type ComponentType =
  | 'p'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'thematicBreak'
  | 'blockquote'
  | 'ul'
  | 'ol'
  | 'li'
  | 'table'
  | 'tr'
  | 'td'
  | 'pre'
  | 'code'
  | 'em'
  | 'strong'
  | 'delete'
  | 'inlineCode'
  | 'hr'
  | 'a'
  | 'img'
export type Components = {
  [key in ComponentType]?: React.ComponentType<{ children: React.ReactNode }>
}
export interface MDXProviderProps {
  children: React.ReactNode
  components: Components
}

const components = {
  p: (props: MDXProviderProps) => <P {...props} />
}

export default (props: MDXProviderProps) => (
  <div>
    <Logo />
    <MDXProvider components={components}>
      <main {...props}></main>
    </MDXProvider>
    <style jsx>{`
      div {
        padding: 40px;
        min-height: 100vh;
        background: var(--background-color);
      }
    `}</style>
  </div>
)
