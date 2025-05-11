import { IExample } from '@/types/Example.types';
import europa_tower from '../images/examples/europa_tower.webp';
import indsustrial_park_chelny from '../images/examples/indsustrial_park_chelny.webp';
import omskiy_npz from '../images/examples/omskiy_npz.webp';
import sunrise_city from '../images/examples/sunrise_city.webp';
import taneko from '../images/examples/taneko.webp';
import tempo from '../images/examples/tempo.webp';
import transneft from '../images/examples/transneft.webp';
import ts_perviy from '../images/examples/ts_perviy.webp';

export const examples: IExample[] = [
	{ id: 2, title: 'Индустриальный парк "CHELNY" г.Набережные Челны', img: indsustrial_park_chelny },
	{ id: 5, title: 'Нефтеперерабатывающий Комплекс "ТАНЕКО" г.Нижнекамск', img: taneko },
	{ id: 7, title: 'Производственные объекты «Транснефть Поволжье»', img: transneft },
	{ id: 8, title: 'ТЦ «Первый», г.Набережные Челны', img: ts_perviy },
	{ id: 6, title: 'Производственный корпус металлургического комбината "ТЭМПО»', img: tempo },
	{ id: 1, title: 'Жилой комплекс «EUROPA TOWER», г. Набережные Челны', img: europa_tower },
	{ id: 3, title: '«Омский НПЗ», г.Омск', img: omskiy_npz },
	{ id: 4, title: 'Жилой комплекс «SUNRISE CITY" г.Набережные Челны', img: sunrise_city },
];