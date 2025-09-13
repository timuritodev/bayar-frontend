import React from 'react';
import Head from 'next/head';
import VKPosts from '../../components/VKPosts/VKPosts';
import VKWidget from '../../components/VKWidget/VKWidget';
import VKIframe from '../../components/VKIframe/VKIframe';
import styles from './style.module.scss';

const VKPostsPage: React.FC = () => {
	return (
		<>
			<Head>
				<title>Новости из ВКонтакте | BAYAR</title>
				<meta name="description" content="Последние новости и посты из нашей группы ВКонтакте" />
				<meta name="keywords" content="новости, вконтакте, посты, BAYAR" />
			</Head>

			<div className={styles.container}>
				<div className={styles.header}>
					<h1 className={styles.title}>Новости из ВКонтакте</h1>
					<p className={styles.subtitle}>
						Следите за нашими последними новостями и обновлениями в группе{' '}
						<a
							href="https://vk.com/tatbayar"
							target="_blank"
							rel="noopener noreferrer"
							className={styles.vkLink}
						>
							ВКонтакте
						</a>
					</p>
				</div>

				{/* Информация о проблемах с API */}
				<div className={styles.infoBox}>
					<h3>⚠️ Важная информация</h3>
					<p>
						Из-за ограничений CORS политики ВКонтакте, прямое получение постов через API
						с localhost может не работать. Для полной функциональности рекомендуется:
					</p>
					<ul>
						<li>Использовать официальный виджет ВКонтакте (ниже)</li>
						<li>Настроить прокси для production версии</li>
						<li>Получить access_token для VK API</li>
					</ul>
				</div>

				{/* Основной компонент для отображения постов */}
				<VKPosts
					groupId="tatbayar"
					count={20}
					showGroupInfo={true}
				/>

				{/* Iframe с группой ВКонтакте */}
				<VKIframe
					groupId="tatbayar"
					width={600}
					height={500}
				/>

				{/* Виджет ВКонтакте как альтернатива */}
				<div className={styles.widgetContainer}>
					<h2>Официальный виджет ВКонтакте</h2>
					<p className={styles.widgetDescription}>
						Этот виджет напрямую подключен к группе ВКонтакте и обновляется автоматически
					</p>
					<VKWidget
						groupId="tatbayar"
						type="news"
						width={600}
						height={500}
						color1="#FFFFFF"
						color2="#4a76a8"
						color3="#2c5aa0"
					/>
				</div>
			</div>
		</>
	);
};

export default VKPostsPage;
