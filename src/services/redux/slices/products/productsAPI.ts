import { API_BASE_URL } from '@/constants/constants';
import { IProduct } from '@/types/Product.types';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

const fetchData = (url: string) => {
	return fetch(url, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then(checkRes);
};

export const fetchAllProducts = (type: string): Promise<IProduct[]> => {
	return fetchData(`${API_BASE_URL}/products/type/${type}`);
};

export const fetchProductById = (id: number): Promise<IProduct> => {
	return fetchData(`${API_BASE_URL}/products/${id}`);
};
