import Head from 'next/head'

interface OpenGraph {
  title: string
  description: string
  url: string
  image: string
}

interface Props {
  title?: string
  description?: string
  favicon?: string
  openGraph?: OpenGraph
}

export default ({
  title,
  description = 'This is my personal site, where I share my thoughts and my work.',
  favicon = '/images/favicon.png',
  openGraph
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
          <meta name="twitter:card" content={openGraph.description}></meta>
          <meta name="twitter:site" content="@julianbenegas8"></meta>
        </>
      )}
    </Head>
  )
}
