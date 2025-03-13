export interface IWaterAcc {
	id: number;
	title: string;
	description: string;
	h_picture: string;
}

export interface IWaterAccState {
	status: "idle" | "success" | "loading" | "failed";
	error: string | undefined;
	products: Array<IWaterAcc>;
	product: IWaterAccFull;
}

export interface IWaterAccFull {
	id: number;
	title: string;
	description: string;
	picture: string;
	characteristics: ICharacteristic[];
}

export interface ICharacteristic {
	name: string;
	value: string;
}