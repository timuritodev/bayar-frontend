import { IBenefit } from '@/types/Benefit.types';
import design from '../../images/benefits/design.svg';
import house from '../../images/benefits/house.svg';
import leaf from '../../images/benefits/leaf.svg';
import star from '../../images/benefits/star.svg';
import sun from '../../images/benefits/sun.svg';

export const data: IBenefit[] = [
	{
		id: 1,
		title: 'Тепло-эффективность',
		img: sun
	},
	{
		id: 2,
		title: 'Легкость и прочность',
		img: star
	},
	{
		id: 3,
		title: 'Широта применения',
		img: house
	},
	{
		id: 4,
		title: 'Разнообразие дизайна',
		img: design
	},
	{
		id: 5,
		title: 'Экологичность',
		img: leaf
	},
]