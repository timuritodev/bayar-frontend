import { StaticImageData } from 'next/image';

export interface IUniCard {
	id: number;
	title: string;
	img: StaticImageData;
	width?: number;
	height?: number;
	link?: string;
}
