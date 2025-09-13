import React from 'react';
import styles from './style.module.scss';

interface VKIframeProps {
	groupId: string;
	width?: number;
	height?: number;
}

const VKIframe: React.FC<VKIframeProps> = ({
	groupId,
	width = 600,
	height = 500
}) => {
	// Создаем URL для встраивания группы ВКонтакте
	const vkEmbedUrl = `https://vk.com/widget_community.php?app=0&_ver=1&gid=${groupId}&width=${width}&height=${height}&_ver=1`;

	return (
		<div className={styles.vkIframeContainer}>
			<div className={styles.header}>
				<h3>Посты из группы ВКонтакте</h3>
				<p>Прямое встраивание контента группы</p>
			</div>

			<div className={styles.iframeWrapper}>
				<iframe
					src={vkEmbedUrl}
					width={width}
					height={height}
					frameBorder="0"
					scrolling="yes"
					allowTransparency={true}
					className={styles.iframe}
					title={`VK Group ${groupId}`}
				/>
			</div>

			<div className={styles.footer}>
				<p>
					<a
						href={`https://vk.com/${groupId}`}
						target="_blank"
						rel="noopener noreferrer"
						className={styles.link}
					>
						Открыть группу в ВКонтакте →
					</a>
				</p>
			</div>
		</div>
	);
};

export default VKIframe;
