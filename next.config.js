/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  logging: {
    fetches: { fullUrl: true },
  },
  reactStrictMode: true,
  experimental: {
    // dynamicIO: true,
  },
  images: {
    remotePatterns: [
      { hostname: 'basehub.earth' },
      { hostname: 'assets.basehub.com' },
    ],
  },
  redirects: async () => {
    return [
      {
        source: '/posts',
        destination: '/',
        permanent: true,
      },
      {
        source: '/2020/la-derecha-diario',
        destination: 'https://old.julianbenegas.com/2020/la-derecha-diario',
        permanent: false,
      },
    ]
  },
}
