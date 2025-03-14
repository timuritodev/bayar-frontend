import { StaticImageData } from 'next/image';

export interface IComponentCard {
	id: number;
	title: string;
	img: StaticImageData;
	link?: string;
}
