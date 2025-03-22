export const jsonld = {
	'@context': 'https://schema.org',
	'@type': 'Store',
	name: 'BAYAR',
	url: 'https://bayar.ru',
	logo: 'https://bayar.ru/api/logo.png',
	image: ['https://bayar.ru/api/logo.png'], // TODO добавить фото завода
	description: 'Завод-изготовитель сэндвич-панелей по лучшим ценам в РФ',
	address: {
		'@type': 'PostalAddress',
		streetAddress: 'Промышленная площадка АЛАБУГА, ул. 20, 1',
		addressLocality: 'Елабуга',
		postalCode: '423800',
		addressCountry: 'RU',
	},
	contactPoint: {
		'@type': 'ContactPoint',
		telephone: '+7-800-550-31-90',
		contactType: 'customer service',
		email: 'info@bayar.ru',
		availableLanguage: ['Russian', 'English'],
	},
	openingHours: 'Mo-Fr 09:00-18:00', // TODO уточнить время работы и соцсети
	sameAs: ['https://vk.com/bayar', 'https://t.me/bayar'],
};
