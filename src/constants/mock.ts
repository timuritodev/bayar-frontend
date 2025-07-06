import { IFeaturesItem } from '@/components/Features/FeaturesItem/FeaturesItem';
import { IMainItem } from '@/components/MainWrapper/MainItem/MainItem';
import first from '../images/features/first.svg'
import sec from '../images/features/sec.svg'
import third from '../images/features/third.svg'
import forth from '../images/features/forth.svg'
import fifth from '../images/features/fifth.svg'
import sixth from '../images/features/sixth.svg'
import seventh from '../images/features/seventh.svg'
import eight from '../images/features/eight.svg'
import nine from '../images/features/nine.svg'

export const mainItems: IMainItem[] = [
	{
		id: 1,
		value: '1',
		unit: 'день',
		description: 'Отгрузка готовых панелей'
	},
	{
		id: 2,
		value: '3',
		beforeUnit: 'от',
		unit: 'дней',
		description: 'Производство под заказ'
	},
	{
		id: 3,
		value: '20',
		unit: 'лет',
		description: 'Отгрузка готовых панелей'
	},
	{
		id: 4,
		value: '89',
		smallUnit: 'субъектов России',
		description: 'География работы'
	},
]

export const features: IFeaturesItem[] = [
	{
		id: 1,
		img: first,
		description: 'Работаем быстро — отгрузка со склада за 1 день, производство от 3 рабочих дней'
	},
	{
		id: 2,
		img: sec,
		description: 'Точная геометрия — панели собираются без подрезки и подгонки'
	},
	{
		id: 3,
		img: third,
		description: 'Работаем по ГОСТу, на материалы есть сертификаты и паспорта'
	},
	{
		id: 4,
		img: forth,
		description: 'Нарезка автоматическая, под заказ: от 2 до 15 метров'
	},
	{
		id: 5,
		img: fifth,
		description: 'Утеплитель Rockwool® экологичный, огнестойкий, плотность — от 105 кг/м³'
	},
	{
		id: 6,
		img: sixth,
		description: 'Гарантия до 20 лет, срок службы ― от 50 лет'
	},
	{
		id: 7,
		img: seventh,
		description: 'Все в одном месте: докупите панели, доборы, метизы'
	},
	{
		id: 8,
		img: eight,
		description: 'Авторский надзор от производителя ― бесплатно!'
	},
	{
		id: 9,
		img: nine,
		description: 'Мы - реальные производители: закажите у нас и не переплачивайте посредникам!'
	},
]