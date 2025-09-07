/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: process.env.NODE_ENV === 'production' ? '/agrise-web' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/agrise-web/' : '',
  images: {
    unoptimized: true
  }
};

export default nextConfig;
