/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from 'react';

const SCREENBREAKPOINT = 1320;

export const useResize = () => {
	// Всегда инициализируем width = 0, чтобы SSR и первая фаза CSR совпадали
	const [width, setWidth] = useState<number>(0);

	useEffect(() => {
		// В useEffect window уже определён, код выполнится только в браузере
		const handleResize = () => {
			setWidth(window.innerWidth);
		};

		// При маунте сразу выставляем реальную ширину
		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return {
		width,
		isBreakpoint: width > SCREENBREAKPOINT,
	};
};
