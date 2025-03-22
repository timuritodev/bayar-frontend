/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://tatbayar.ru',
	generateRobotsTxt: true,
	exclude: [
		'/profile',
		'/sign-in',
		'/sign-up',
		'/reset-password',
		'/recover-password',
		'/change-password',
		'/calculator/_constants',
		'/catalog/_constants',
		'/_constants',
	],
	additionalPaths: async (config) => [
		{ loc: '/about', changefreq: 'weekly', priority: 0.7 },
		{ loc: '/calculator', changefreq: 'weekly', priority: 0.7 },
		{ loc: '/catalog/accessories', changefreq: 'daily', priority: 0.7 },
		{
			loc: '/catalog/accessories/water-wind-proofing',
			changefreq: 'daily',
			priority: 0.7,
		},
		{ loc: '/catalog/roof-panels', changefreq: 'daily', priority: 0.7 },
		{ loc: '/catalog/three-layer-panels', changefreq: 'daily', priority: 0.7 },
		{ loc: '/catalog/wall-panels', changefreq: 'daily', priority: 0.7 },
		{ loc: '/product/water-wind-proofing', changefreq: 'daily', priority: 0.7 },
	],
};
