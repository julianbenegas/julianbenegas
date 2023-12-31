const isDev = process.env.NODE_ENV === 'development'

export const vercelEnv = (process.env.NEXT_PUBLIC_VERCEL_ENV ??
  (isDev ? 'development' : 'production')) as
  | 'development'
  | 'preview'
  | 'production'

const urls = {
  development: 'http://localhost:3000',
  preview: `https://${
    process.env.NEXT_PUBLIC_VERCEL_BRANCH_URL ?? 'www.julianbenegas.com'
  }`,
  production: 'https://www.julianbenegas.com',
} as const

export const siteURL = new URL(urls[vercelEnv])
export const siteOrigin = siteURL.origin
