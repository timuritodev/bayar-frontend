/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		domains: ['localhost'],
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'tatbayar.ru',
				pathname: '/api/images/**',
			},
		],
	},
};

export default nextConfig;
