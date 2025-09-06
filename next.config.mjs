/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/chisato-hara' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/chisato-hara/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
