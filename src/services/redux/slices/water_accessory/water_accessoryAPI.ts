import { API_BASE_URL } from '@/constants/constants';
import { IWaterAcc } from '@/types/WaterAcc.types';

const checkRes = (res: Response) => {
	if (res.ok) {
		return res.json();
	} else {
		return Promise.reject(res);
	}
};

const fetchData = (url: string) => {
	return fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
	}).then((res) => checkRes(res));
};

export const fetchAllWater_accessory = (): Promise<Array<IWaterAcc>> => {
	return fetchData(`${API_BASE_URL}/water_accessory`);
};
