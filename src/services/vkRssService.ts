// Альтернативный сервис для получения постов через RSS фид ВКонтакте
// Некоторые группы ВКонтакте поддерживают RSS экспорт

export interface VKRSSPost {
	id: string;
	title: string;
	description: string;
	link: string;
	pubDate: string;
	author?: string;
	category?: string;
}

class VKRSSService {
	private readonly RSS_URL = 'https://vk.com/rss';

	/**
	 * Получить посты группы через RSS фид
	 * RSS URL для группы: https://vk.com/rss?group_id=GROUP_ID
	 */
	async getGroupPostsRSS(groupId: string, count: number = 10): Promise<VKRSSPost[]> {
		try {
			// Пробуем получить RSS фид группы
			const rssUrl = `https://vk.com/rss?group_id=${groupId}`;

			// Используем CORS прокси для обхода ограничений
			const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

			const response = await fetch(proxyUrl);
			const data = await response.json();

			if (!data.contents) {
				throw new Error('RSS фид недоступен');
			}

			// Парсим XML
			const parser = new DOMParser();
			const xmlDoc = parser.parseFromString(data.contents, 'text/xml');

			// Проверяем на ошибки парсинга
			const parseError = xmlDoc.querySelector('parsererror');
			if (parseError) {
				throw new Error('Ошибка парсинга RSS');
			}

			const items = xmlDoc.querySelectorAll('item');
			const posts: VKRSSPost[] = [];

			for (let i = 0; i < Math.min(items.length, count); i++) {
				const item = items[i];
				const post: VKRSSPost = {
					id: item.querySelector('guid')?.textContent || `rss-${i}`,
					title: item.querySelector('title')?.textContent || '',
					description: item.querySelector('description')?.textContent || '',
					link: item.querySelector('link')?.textContent || '',
					pubDate: item.querySelector('pubDate')?.textContent || '',
					author: item.querySelector('author')?.textContent || undefined,
					category: item.querySelector('category')?.textContent || undefined
				};
				posts.push(post);
			}

			return posts;
		} catch (error) {
			console.error('RSS Error:', error);
			throw new Error('Не удалось загрузить RSS фид группы');
		}
	}

	/**
	 * Проверить доступность RSS фида для группы
	 */
	async checkRSSAvailability(groupId: string): Promise<boolean> {
		try {
			const rssUrl = `https://vk.com/rss?group_id=${groupId}`;
			const proxyUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(rssUrl)}`;

			const response = await fetch(proxyUrl);
			const data = await response.json();

			return !!data.contents;
		} catch (error) {
			return false;
		}
	}

	/**
	 * Получить посты с fallback на моковые данные
	 */
	async getPostsWithFallback(groupId: string, count: number = 10): Promise<VKRSSPost[]> {
		try {
			const isAvailable = await this.checkRSSAvailability(groupId);
			if (!isAvailable) {
				throw new Error('RSS фид недоступен для этой группы');
			}

			return await this.getGroupPostsRSS(groupId, count);
		} catch (error) {
			console.error('RSS fallback error:', error);
			throw error;
		}
	}
}

export const vkRssService = new VKRSSService();
