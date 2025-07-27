import { StaticImageData } from 'next/image';

export interface IExample {
	id: number;
	title: string;
	description?: string
	img: StaticImageData;
}