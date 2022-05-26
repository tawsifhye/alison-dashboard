/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      {
        source: '/',
        destination: '/topic/module/1/topic-a',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
