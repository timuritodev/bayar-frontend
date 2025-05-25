export interface IProduct {
	id: number;
	title: string;
	description: string;
	picture: string;
	product_type: string;
}

export interface IProductsState {
	status: 'idle' | 'loading' | 'success' | 'error';
	error: string;
	products: IProduct[];
	product: IProduct;
}
