import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				{/* <meta charSet="utf-8" /> */}
				{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
				<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
