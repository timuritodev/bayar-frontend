/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      domains: ['bayarswp.ru'], 
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'bayarswp.ru',
          pathname: '/api/images/**', 
        },
      ],
    },
  };
  
  export default nextConfig;
  