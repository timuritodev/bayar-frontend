import { IFirstScreen } from '@/types/FirstScreen.types';
// import first_img from '../../images/first_screen/first.jpg'
// import second_img from '../../images/first_screen/second.jpg'
import fifth_img from '../../images/first_screen/fifth.jpg';
import forth_img from '../../images/first_screen/forth.jpg';
import third_img from '../../images/first_screen/third.jpg';

export const data: IFirstScreen[] = [
	{
		id: 1,
		title: '1',
		img: third_img
	},
	{
		id: 2,
		title: '+7-960-000-00-00',
		img: third_img
	},
	{
		id: 3,
		title: 'Адрес: ул. Тверская, здание',
		img: third_img
	},
	{
		id: 4,
		title: 'Производительность линии более 2000 тн в день',
		img: forth_img
	},
	{
		id: 5,
		title: 'Отвечаем за качество и сроки!',
		img: fifth_img
	},
]