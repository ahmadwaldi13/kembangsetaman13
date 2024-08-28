/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'admin.kembangsetaman.store',
        port: '',
        pathname: '/storage/**',
      },
    ],
  },
}

export default nextConfig
