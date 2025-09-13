import React, { useState, useEffect } from 'react';
import { vkApiService, VKPost } from '../../services/vkApi';
import styles from './style.module.scss';

interface VKPostsProps {
	groupId: string;
	count?: number;
	showGroupInfo?: boolean;
}

const VKPosts: React.FC<VKPostsProps> = ({
	groupId,
	count = 10,
	showGroupInfo = true
}) => {
	const [posts, setPosts] = useState<VKPost[]>([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);
	const [groupName, setGroupName] = useState<string>('');

	useEffect(() => {
		loadPosts();
	}, [groupId, count]);

	const loadPosts = async () => {
		try {
			setLoading(true);
			setError(null);

			// Сначала получаем информацию о группе
			let groupInfo = null;
			if (showGroupInfo) {
				groupInfo = await vkApiService.getGroupInfo(groupId);
				if (groupInfo) {
					setGroupName(groupInfo.name);
				}
			}

			// Затем получаем посты
			const postsData = await vkApiService.getPostsWithFallback(groupId, count);
			setPosts(postsData);

		} catch (err) {
			console.error('Error loading posts:', err);
			setError(err instanceof Error ? err.message : 'Ошибка загрузки постов');
			setPosts([]); // Очищаем посты при ошибке
		} finally {
			setLoading(false);
		}
	};

	const formatDate = (timestamp: number) => {
		return new Date(timestamp * 1000).toLocaleDateString('ru-RU', {
			year: 'numeric',
			month: 'long',
			day: 'numeric',
			hour: '2-digit',
			minute: '2-digit'
		});
	};

	const formatText = (text: string) => {
		if (!text) return '';

		// Обработка ссылок
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		const processedText = text.replace(urlRegex, '<a href="$1" target="_blank" rel="noopener noreferrer">$1</a>');

		// Обработка хештегов
		const hashtagRegex = /#([а-яё\w]+)/gi;
		const finalText = processedText.replace(hashtagRegex, '<span class="hashtag">#$1</span>');

		return finalText;
	};

	const getImageUrl = (post: VKPost) => {
		if (!post.attachments) return null;

		const photoAttachment = post.attachments.find(att => att.type === 'photo');
		if (photoAttachment?.photo?.sizes) {
			// Ищем изображение среднего размера
			const mediumSize = photoAttachment.photo.sizes.find(size => size.type === 'm') ||
				photoAttachment.photo.sizes.find(size => size.type === 's') ||
				photoAttachment.photo.sizes[photoAttachment.photo.sizes.length - 1];

			return mediumSize?.url || null;
		}

		return null;
	};

	if (loading) {
		return (
			<div className={styles.loading}>
				<div className={styles.spinner}></div>
				<p>Загружаем посты...</p>
			</div>
		);
	}

	if (error) {
		return (
			<div className={styles.error}>
				<p>Ошибка загрузки постов: {error}</p>
				<button onClick={loadPosts} className={styles.retryButton}>
					Попробовать снова
				</button>
			</div>
		);
	}

	return (
		<div className={styles.vkPosts}>
			{showGroupInfo && groupName && (
				<div className={styles.groupInfo}>
					<h3>Посты из группы: {groupName}</h3>
				</div>
			)}

			<div className={styles.postsList}>
				{posts.length === 0 ? (
					<div className={styles.emptyState}>
						<p>Посты не найдены</p>
						<p>Возможно, группа не публична или произошла ошибка</p>
					</div>
				) : (
					posts.map((post) => (
						<div key={post.id} className={styles.post}>
							<div className={styles.postHeader}>
								<span className={styles.postDate}>
									{formatDate(post.date)}
								</span>
								{post.views && (
									<span className={styles.views}>
										👁️ {post.views.count}
									</span>
								)}
							</div>

							{getImageUrl(post) && (
								<div className={styles.postImage}>
									<img
										src={getImageUrl(post)!}
										alt="Изображение поста"
										loading="lazy"
									/>
								</div>
							)}

							<div className={styles.postContent}>
								<div
									className={styles.postText}
									dangerouslySetInnerHTML={{ __html: formatText(post.text) }}
								/>
							</div>

							<div className={styles.postStats}>
								{post.likes && (
									<span className={styles.stat}>
										❤️ {post.likes.count}
									</span>
								)}
								{post.reposts && (
									<span className={styles.stat}>
										🔄 {post.reposts.count}
									</span>
								)}
								{post.comments && (
									<span className={styles.stat}>
										💬 {post.comments.count}
									</span>
								)}
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
};

export default VKPosts;
