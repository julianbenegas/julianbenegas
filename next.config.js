/**
 * @type {import('next').NextConfig}
 */
module.exports = {
  // experimental: {
  //   ppr: true
  // }
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
    ]
  },
}
