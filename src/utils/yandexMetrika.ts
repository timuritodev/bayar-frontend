// Утилиты для работы с Яндекс.Метрикой

declare global {
	interface Window {
		ym: (counterId: number, method: string, ...args: any[]) => void;
	}
}

const COUNTER_ID = 102523104;

// Функция для отправки hit (просмотра страницы)
export const sendHit = (url?: string, options?: any) => {
	if (typeof window !== 'undefined' && window.ym) {
		window.ym(COUNTER_ID, 'hit', url || window.location.href, options);
	}
};

// Функция для достижения цели
export const reachGoal = (targetName: string) => {
	if (typeof window !== 'undefined' && window.ym) {
		window.ym(COUNTER_ID, 'reachGoal', targetName);
	}
};

// Функция для передачи параметров визита
export const setParams = (params: Record<string, any>) => {
	if (typeof window !== 'undefined' && window.ym) {
		window.ym(COUNTER_ID, 'params', params);
	}
};

// Примеры целей для вашего сайта
export const GOALS = {
	FORM_SUBMIT: 'form_submit',
	PHONE_CLICK: 'phone_click',
	CALCULATOR_USE: 'calculator_use',
	PRODUCT_VIEW: 'product_view',
	CONTACT_FORM: 'contact_form',
	CATALOG_VIEW: 'catalog_view',
} as const;
