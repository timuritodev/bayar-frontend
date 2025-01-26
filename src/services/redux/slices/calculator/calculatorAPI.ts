import { API_BASE_URL } from '@/constants/constants';
import { ICalculator } from '@/types/Auth.types';
import { fetchData } from '@/utils/constants';

export const fetchCalculate = (data: ICalculator): Promise<Response> => {
	return fetchData(`${API_BASE_URL}/calculate`, "POST", data);
};
