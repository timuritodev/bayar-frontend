import React, { useEffect, useRef } from 'react';
import styles from './style.module.scss';

interface VKWidgetProps {
	groupId: string;
	type?: 'news' | 'comments' | 'recommendations';
	width?: number;
	height?: number;
	color1?: string;
	color2?: string;
	color3?: string;
}

declare global {
	interface Window {
		VK: any;
	}
}

const VKWidget: React.FC<VKWidgetProps> = ({
	groupId,
	type = 'news',
	width = 300,
	height = 400,
	color1 = '#FFFFFF',
	color2 = '#2B587A',
	color3 = '#5B7FA6'
}) => {
	const widgetRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		// Загружаем VK API если его еще нет
		if (!window.VK) {
			const script = document.createElement('script');
			script.src = 'https://vk.com/js/api/openapi.js?169';
			script.async = true;
			script.onload = () => {
				// Небольшая задержка для инициализации
				setTimeout(initWidget, 100);
			};
			script.onerror = () => {
				console.error('Failed to load VK API');
				if (widgetRef.current) {
					widgetRef.current.innerHTML = `
            <div class="${styles.error}">
              <p>Не удалось загрузить VK API</p>
              <p>Проверьте подключение к интернету</p>
            </div>
          `;
				}
			};
			document.head.appendChild(script);
		} else {
			initWidget();
		}

		return () => {
			// Очистка при размонтировании
			if (widgetRef.current) {
				widgetRef.current.innerHTML = '';
			}
		};
	}, [groupId, type, width, height, color1, color2, color3]);

	const initWidget = () => {
		if (!window.VK || !widgetRef.current) return;

		try {
			// Инициализируем VK API
			window.VK.init({
				apiId: 0, // Для публичных виджетов не нужен API ID
				onlyWidgets: true
			});

			// Очищаем предыдущий контент
			widgetRef.current.innerHTML = '';

			// Создаем виджет в зависимости от типа
			switch (type) {
				case 'news':
					window.VK.Widgets.Group(
						widgetRef.current,
						{
							mode: 0, // 0 - последние новости, 1 - рекомендуемые
							width: width,
							height: height,
							color1: color1,
							color2: color2,
							color3: color3,
							no_cover: 0,
							wide: 1
						},
						groupId
					);
					break;

				case 'comments':
					window.VK.Widgets.Comments(
						widgetRef.current,
						{
							width: width,
							limit: 10,
							attach: '*'
						},
						groupId
					);
					break;

				case 'recommendations':
					window.VK.Widgets.Recommended(
						widgetRef.current,
						{
							limit: 10,
							period: 'week'
						},
						groupId
					);
					break;

				default:
					// По умолчанию показываем новости
					window.VK.Widgets.Group(
						widgetRef.current,
						{
							mode: 0,
							width: width,
							height: height,
							color1: color1,
							color2: color2,
							color3: color3,
							no_cover: 0,
							wide: 1
						},
						groupId
					);
			}
		} catch (error) {
			console.error('Ошибка инициализации VK виджета:', error);
			if (widgetRef.current) {
				widgetRef.current.innerHTML = `
          <div class="${styles.error}">
            <p>Не удалось загрузить виджет ВКонтакте</p>
            <p>Попробуйте обновить страницу</p>
          </div>
        `;
			}
		}
	};

	return (
		<div className={styles.vkWidgetContainer}>
			<div
				ref={widgetRef}
				className={styles.vkWidget}
				style={{ width: `${width}px`, minHeight: `${height}px` }}
			/>
		</div>
	);
};

export default VKWidget;
