import './global.css'
import { basehub } from 'basehub'
import { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'

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
      <body>{children}</body>
    </html>
  )
}
