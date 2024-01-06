const isDev = process.env.NODE_ENV === 'development'

export const vercelEnv = (process.env.NEXT_PUBLIC_VERCEL_ENV ??
  (isDev ? 'development' : 'production')) as
  | 'development'
  | 'preview'
  | 'production'

if (!process.env.NEXT_PUBLIC_SITE_URL) {
  throw new Error('NEXT_PUBLIC_SITE_URL is a required enviroment variable.')
}

if (!process.env.NEXT_PUBLIC_SITE_URL.startsWith('http')) {
  throw new Error(
    'NEXT_PUBLIC_SITE_URL must start with http or https (it must be an absolute URL).'
  )
}

const urls = {
  development: 'http://localhost:3000',
  preview: process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL}`
    : process.env.NEXT_PUBLIC_SITE_URL,
  production: process.env.NEXT_PUBLIC_SITE_URL,
} as const

export const siteURL = new URL(urls[vercelEnv])
export const siteOrigin = siteURL.origin
