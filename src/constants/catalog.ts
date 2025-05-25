import { IBenefit } from '@/types/Benefit.types';
import { IUniCard } from '@/types/UniCard.types';
import design from '../images/benefits/design.svg';
import house from '../images/benefits/house.svg';
import leaf from '../images/benefits/leaf.svg';
import star from '../images/benefits/star.svg';
import sun from '../images/benefits/sun.svg';
import mineral from '../images/catalog/mineral.jpeg';
import polystyrene from '../images/catalog/polystyrene.jpeg';
import roof_panel from '../images/catalog/roof_panel.png';
import wall_panel from '../images/catalog/wall_panel.jpeg';
import fasteners from '../images/components/fasteners.jpeg';
import profiled_sheeting from '../images/components/profiled_sheeting.jpg';
import shaped_elements from '../images/components/shaped_elements.jpg';
import thermal_insulation from '../images/components/thermal_insulation.jpg';

export const benefits: IBenefit[] = [
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

export const panels: IUniCard[] = [
	{
		id: 1,
		title: 'Кровельные сэндвич-панели',
		img: roof_panel
	},
	{
		id: 2,
		title: 'Стеновые сэндивич-панели',
		img: wall_panel
	},
]

export const roof: IUniCard[] = [
	{
		id: 1,
		title: 'Минеральная вата',
		img: mineral
	},
	{
		id: 2,
		title: 'Пенополистирол',
		img: polystyrene
	},
]

export const components: IUniCard[] = [
	{
		id: 1,
		title: 'Теплоизоляция',
		img: thermal_insulation,
		width: 460,
		height: 440,
		link: 'components/thermal_insulation'
	},
	{
		id: 2,
		title: 'Крепёжные элементы',
		img: fasteners,
		width: 460,
		height: 440,
		link: 'components/fasteners'
	},
	{
		id: 3,
		title: 'Фасонные элементы',
		img: shaped_elements,
		width: 460,
		height: 440,
		link: 'components/profiled_sheeting'
	},
	{
		id: 3,
		title: 'Профнастил',
		img: profiled_sheeting,
		width: 460,
		height: 440,
		link: 'components/shaped_elements'
	},
]