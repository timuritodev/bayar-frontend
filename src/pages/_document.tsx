import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				{/* <meta charSet="utf-8" /> */}
				{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
				<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
				<meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
			</Head>
			<body>
				<Main />
				<NextScript />
				<div>Verification: 358b0d3e9b0d657d</div>
			</body>
		</Html>
	);
}
