import { MDXProvider } from '@mdx-js/react'
import P from './P'
import { H1, H2, H3 } from './headings'
import Logo from '../Logo'
import { UL, OL, LI } from './list'
import SEO from '../SEO'
import { A, NextLink, LinkProps as _LinkProps } from './links'
import Screenshot from './Screenshot'
import CodeSandbox from './CodeSandbox'
import { Code, InlineCode } from './code'
import Quote from './Quote'
import Footer from './Footer'
import Tweet from './Tweet'
import { useRouter } from 'next/router'

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
  pagetitle: string
  description: string
  image: string
}

interface LinkProps extends MDXProviderProps, _LinkProps {}

interface NextLinkProps extends MDXProviderProps {
  href: string
  hrefAs: string
}

interface ScreenshotProps extends MDXProviderProps {
  src: string
  alt: string
  caption: string
}

interface CodeSandboxProps extends MDXProviderProps {
  src: string
  height: string
}

interface CodeProps extends MDXProviderProps {
  className: string
}

interface FooterProps extends MDXProviderProps {
  title: string
  message: string
}

interface TweetProps extends MDXProviderProps {
  src: string
}

const components = {
  h1: (props: MDXProviderProps) => <H1 {...props} />,
  h2: (props: MDXProviderProps) => <H2 {...props} />,
  h3: (props: MDXProviderProps) => <H3 {...props} />,
  p: (props: MDXProviderProps) => <P {...props} />,
  ul: (props: MDXProviderProps) => <UL {...props} />,
  ol: (props: MDXProviderProps) => <OL {...props} />,
  li: (props: MDXProviderProps) => <LI {...props} />,
  a: (props: LinkProps) => <A {...props} />,
  nextlink: (props: NextLinkProps) => <NextLink {...props} />,
  screenshot: (props: ScreenshotProps) => <Screenshot {...props} />,
  codesandbox: (props: CodeSandboxProps) => <CodeSandbox {...props} />,
  code: (props: CodeProps) => <Code {...props} />,
  ic: (props: MDXProviderProps) => <InlineCode {...props} />,
  blockquote: (props: MDXProviderProps) => <Quote {...props} />,
  footer: (props: FooterProps) => <Footer {...props} />,
  tweet: (props: TweetProps) => <Tweet {...props} />
}

export default (props: MDXProviderProps) => {
  const router = useRouter()
  const og = {
    title: props.pagetitle,
    description: props.description,
    image: `https://julianbenegas.now.sh${props.image}`,
    url: `https://julianbenegas.now.sh${router.asPath}`
  }

  return (
    <div className="container">
      <SEO title={props.pagetitle} openGraph={og} />
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
}
