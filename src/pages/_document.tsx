import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="ru">
			<Head>
				{/* <meta charSet="utf-8" /> */}
				{/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
				<meta name="yandex-verification" content="358b0d3e9b0d657d" />
				<script src="https://api-maps.yandex.ru/2.1/?lang=ru_RU" type="text/javascript"></script>

				{/* Yandex.Metrika counter */}
				<script type="text/javascript" dangerouslySetInnerHTML={{
					__html: `
						(function(m,e,t,r,i,k,a){
							m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
							m[i].l=1*new Date();
							for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
							k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
						})(window, document,'script','https://mc.yandex.ru/metrika/tag.js', 'ym');

						ym(102523104, 'init', {
							defer: true,
							webvisor: true, 
							clickmap: true, 
							ecommerce: "dataLayer", 
							accurateTrackBounce: true, 
							trackLinks: true
						});
					`
				}} />
				<noscript><div><img src="https://mc.yandex.ru/watch/102523104" style={{ position: 'absolute', left: '-9999px' }} alt="" /></div></noscript>
				{/* /Yandex.Metrika counter */}
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
