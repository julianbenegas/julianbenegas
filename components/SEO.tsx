import Head from 'next/head'
import { twitterUsername } from '../lib/constants'

interface OpenGraph {
  title: string
  description: string
  url: string
  image: string
  twitterImage?: string
}

interface Props {
  title?: string
  description?: string
  favicon?: string
  openGraph?: OpenGraph
}

const defaultOpenGraph: OpenGraph = {
  title: 'Julián Benegas',
  description:
    'This is my personal site, where I share my thoughts and my work.',
  url: 'https://julianbenegas.now.sh/',
  image: 'https://julianbenegas.now.sh/images/logo@1x.png'
}

export default ({
  title,
  description = 'This is my personal site, where I share my thoughts and my work.',
  favicon = '/images/favicon.png',
  openGraph = defaultOpenGraph
}: Props) => {
  return (
    <Head>
      <title>{title ? `${title} | Julián Benegas` : 'Julián Benegas'}</title>
      <link rel="shortcut icon" type="image/x-icon" href={favicon} />
      <meta name="description" content={description} />
      {openGraph && (
        <>
          <meta property="og:title" content={openGraph.title} />
          <meta property="og:description" content={openGraph.description} />
          <meta property="og:url" content={openGraph.url} />
          <meta property="og:image" content={openGraph.image} />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content="Julián Benegas" />
          <meta name="twitter:card" content="summary_large_image"></meta>
          <meta name="twitter:site" content={`@${twitterUsername}`}></meta>
          <meta name="twitter:creator" content={`@${twitterUsername}`}></meta>
          {openGraph.twitterImage && (
            <meta name="twitter:image" content={openGraph.twitterImage}></meta>
          )}
        </>
      )}
    </Head>
  )
}
