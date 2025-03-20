import Head from "next/head";
import { FC } from 'react';

interface SEOProps {
	title: string;
	description: string;
	keywords: string;
}

const SEO: FC<SEOProps> = ({ title, description, keywords }) => {
	const og_image = "https://tatbayar.ru/api/images/open_graph.jpeg";

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta name="keywords" content={keywords} />
			<meta name="robots" content="index, follow" />
			<meta name="googlebot" content="index, follow" />
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			<meta charSet="utf-8" />

			<link rel="canonical" href="https://tatbayar.ru" />

			<meta property="og:site_name" content="BAYAR" />
			<meta property="og:locale" content="ru" />
			<meta property="og:title" content={title} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
			<meta property="og:url" content="https://tatbayar.ru" />
			<meta property="og:image" content={og_image} />
			<meta property="og:image:secure_url" content={og_image} />
			<meta property="og:image:alt" content="Сэндвич-панели" />
			<meta property="og:image:type" content="image/jpeg" />
			<meta property="og:image:width" content="1200" />
			<meta property="og:image:height" content="630" />

			<meta name="twitter:card" content="summary_large_image" />
			<meta name="twitter:site" content="@tiwithblood" />
			<meta name="twitter:creator" content="@tiwithblood" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={og_image} />
		</Head>
	);
};

export default SEO;
