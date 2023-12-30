import './global.css'
import { basehub } from 'basehub'
import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { InnerPageHeader } from './_components/header'

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
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${GeistSans.variable} bg-black text-white`}>
      <head>
        <link rel="icon" href="/icon" sizes="any" />
      </head>
      <body>
        <InnerPageHeader />
        <main className="pt-16 pb-10 px-5 flex flex-col gap-12 items-center">
          {children}
        </main>
      </body>
    </html>
  )
}
