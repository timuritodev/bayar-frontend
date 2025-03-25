import { StaticImageData } from 'next/image';

export interface IBenefit {
	id: number;
	title: string;
	img: StaticImageData;
}