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
}