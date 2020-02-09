import { MDXProvider } from '@mdx-js/react'
import P from './P'
import { H1, H2, H3 } from './headings'
import Logo from '../Logo'
import { UL, OL, LI } from './list'

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
  h1: (props: MDXProviderProps) => <H1 {...props} />,
  h2: (props: MDXProviderProps) => <H2 {...props} />,
  h3: (props: MDXProviderProps) => <H3 {...props} />,
  p: (props: MDXProviderProps) => <P {...props} />,
  ul: (props: MDXProviderProps) => <UL {...props} />,
  ol: (props: MDXProviderProps) => <OL {...props} />,
  li: (props: MDXProviderProps) => <LI {...props} />
}

export default (props: MDXProviderProps) => (
  <div className="container">
    <Logo />
    <div className="content">
      <MDXProvider components={components}>
        <main {...props}></main>
      </MDXProvider>
    </div>
    <style jsx>{`
      .container {
        padding: 40px;
        min-height: 100vh;
        background: var(--background-color);
      }
      .content {
        padding: 100px 0;
        max-width: 700px;
        margin: auto;
      }

      @media screen and (max-width: 620px) {
        .container {
          padding: 20px;
        }
      }
    `}</style>
  </div>
)
