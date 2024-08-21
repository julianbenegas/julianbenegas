/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  experimental: {
    ppr: true,
  },
  logging: {
    fetches: { fullUrl: true },
  },
  images: {
    remotePatterns: [{ hostname: 'basehub.earth' }],
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
