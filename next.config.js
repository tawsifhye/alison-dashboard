/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/topic',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
