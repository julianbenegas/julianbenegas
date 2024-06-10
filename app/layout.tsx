import './global.css'
import { basehub } from 'basehub'
import { Toolbar } from 'basehub/next-toolbar'
import { Metadata } from 'next'
import { Header } from './_components/header'
import localFont from 'next/font/local'
import { siteURL } from './constants'

const geistSans = localFont({
  src: '../public/geist-sans/GeistVariableVF.woff2',
  variable: '--font-geist-sans',
  preload: true,
  fallback: ['sans-serif'],
})

export const generateMetadata = async (): Promise<Metadata> => {
  const { settings } = await basehub({ next: { tags: ['basehub'] } }).query({
    settings: {
      meta: {
        title: true,
        description: true,
        xUsername: true,
        ogImage: {
          url: true,
        },
      },
    },
  })

  const xUsername = settings.meta.xUsername?.startsWith('@')
    ? settings.meta.xUsername
    : `@${settings.meta.xUsername}`

  return {
    title: {
      template: `%s | ${settings.meta.title}`,
      default: settings.meta.title,
    },
    description: settings.meta.description,
    metadataBase: siteURL,
    twitter: {
      card: 'summary_large_image',
      site: xUsername,
      creator: xUsername,
      images: [{ url: settings.meta.ogImage.url }],
    },
    openGraph: {
      images: [{ url: settings.meta.ogImage.url }],
    },
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${geistSans.variable}`}>
      <head>
        <link rel="icon" href="/icon" sizes="any" />
      </head>
      <body className="flex flex-col min-h-screen bg-[inherit] text-[inherit]">
        <Header />
        {children}
        <Toolbar />
      </body>
    </html>
  )
}
