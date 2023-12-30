import './global.css'
import { basehub } from 'basehub'
import { Metadata } from 'next'
import { Header } from './_components/header'
import localFont from 'next/font/local'
import { siteURL } from './constants'
import { Analytics } from '@vercel/analytics/react'

const geistSans = localFont({
  src: '../public/geist-sans/GeistVariableVF.woff2',
  variable: '--font-geist-sans',
  preload: true,
  fallback: ['sans-serif'],
})

export const generateMetadata = async (): Promise<Metadata> => {
  const { settings } = await basehub({ next: { revalidate: 60 } }).query({
    settings: {
      meta: {
        title: true,
        description: true,
      },
    },
  })

  return {
    title: {
      template: `%s | ${settings.meta.title}`,
      default: settings.meta.title,
    },
    description: settings.meta.description,
    metadataBase: siteURL,
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
      <body className="flex flex-col min-h-screen">
        <Header />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
