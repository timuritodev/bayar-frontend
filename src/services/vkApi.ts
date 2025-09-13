// VK API сервис для получения постов группы
// Документация: https://vk.com/dev/api_requests

export interface VKPost {
	id: number;
	from_id: number;
	owner_id: number;
	date: number;
	text: string;
	attachments?: VKAttachment[];
	likes?: {
		count: number;
		user_likes: number;
		can_like: number;
		can_publish: number;
	};
	reposts?: {
		count: number;
		user_reposted: number;
	};
	comments?: {
		count: number;
		can_post: number;
		groups_can_post: boolean;
		can_close: boolean;
		can_open: boolean;
	};
	views?: {
		count: number;
	};
}

export interface VKAttachment {
	type: string;
	photo?: {
		id: number;
		album_id: number;
		owner_id: number;
		sizes: Array<{
			type: string;
			url: string;
			width: number;
			height: number;
		}>;
		text: string;
		date: number;
	};
	video?: {
		id: number;
		owner_id: number;
		title: string;
		description: string;
		duration: number;
		image: Array<{
			url: string;
			width: number;
			height: number;
		}>;
		first_frame: Array<{
			url: string;
			width: number;
			height: number;
		}>;
		date: number;
		views: number;
		comments: number;
	};
	link?: {
		url: string;
		title: string;
		description: string;
		target: string;
	};
}

export interface VKGroupInfo {
	id: number;
	name: string;
	screen_name: string;
	type: string;
	photo_50: string;
	photo_100: string;
	photo_200: string;
}

class VKApiService {
	private readonly API_VERSION = '5.131';
	private readonly BASE_URL = 'https://api.vk.com/method';

	// Для публичных групп можно использовать без токена, но с ограничениями
	// Для полного доступа нужен access_token
	private accessToken: string | null = null;

	constructor(accessToken?: string) {
		this.accessToken = accessToken || null;
	}

	/**
	 * Получить информацию о группе
	 */
	async getGroupInfo(groupId: string): Promise<VKGroupInfo | null> {
		try {
			const params = new URLSearchParams({
				group_id: groupId,
				v: this.API_VERSION,
				...(this.accessToken && { access_token: this.accessToken })
			});

			const response = await fetch(`${this.BASE_URL}/groups.getById?${params}`);
			const data = await response.json();

			if (data.error) {
				console.error('VK API Error:', data.error);
				return null;
			}

			return data.response?.[0] || null;
		} catch (error) {
			console.error('Error fetching group info:', error);
			return null;
		}
	}

	/**
	 * Получить посты группы
	 */
	async getGroupPosts(
		groupId: string,
		count: number = 10,
		offset: number = 0
	): Promise<VKPost[]> {
		try {
			const params = new URLSearchParams({
				owner_id: `-${groupId}`, // Отрицательный ID для группы
				count: count.toString(),
				offset: offset.toString(),
				extended: '1',
				v: this.API_VERSION,
				...(this.accessToken && { access_token: this.accessToken })
			});

			const response = await fetch(`${this.BASE_URL}/wall.get?${params}`);
			const data = await response.json();

			if (data.error) {
				console.error('VK API Error:', data.error);
				throw new Error(data.error.error_msg || 'Ошибка получения постов');
			}

			return data.response?.items || [];
		} catch (error) {
			console.error('Error fetching posts:', error);
			throw error;
		}
	}

	/**
	 * Получить посты с обработкой ошибок и fallback
	 */
	async getPostsWithFallback(groupId: string, count: number = 10): Promise<VKPost[]> {
		try {
			// Сначала пробуем получить ID группы по короткому имени
			const groupInfo = await this.getGroupInfo(groupId);
			if (!groupInfo) {
				throw new Error('Группа не найдена');
			}

			// Используем числовой ID группы
			const numericGroupId = groupInfo.id.toString();

			// Пробуем получить посты
			const posts = await this.getGroupPosts(numericGroupId, count);

			if (posts.length === 0) {
				console.warn('В группе нет постов или они недоступны');
				return [];
			}

			return posts;
		} catch (error) {
			console.error('Failed to fetch posts:', error);

			// Показываем сообщение об ошибке вместо моковых данных
			throw new Error('Не удалось загрузить посты из группы ВКонтакте. Возможно, группа не публична или произошла ошибка подключения.');
		}
	}

	/**
	 * Моковые данные для демонстрации
	 */
	private getMockPosts(): VKPost[] {
		return [
			{
				id: 1,
				from_id: -123456789,
				owner_id: -123456789,
				date: Math.floor(Date.now() / 1000) - 86400,
				text: 'Добро пожаловать в нашу группу! Здесь вы найдете последние новости о наших продуктах и услугах.',
				likes: { count: 15, user_likes: 0, can_like: 1, can_publish: 1 },
				reposts: { count: 3, user_reposted: 0 },
				comments: { count: 5, can_post: 1, groups_can_post: true, can_close: false, can_open: false },
				views: { count: 120 }
			},
			{
				id: 2,
				from_id: -123456789,
				owner_id: -123456789,
				date: Math.floor(Date.now() / 1000) - 172800,
				text: 'Новое поступление материалов! Спешите заказать качественные строительные материалы по выгодным ценам.',
				likes: { count: 8, user_likes: 0, can_like: 1, can_publish: 1 },
				reposts: { count: 2, user_reposted: 0 },
				comments: { count: 3, can_post: 1, groups_can_post: true, can_close: false, can_open: false },
				views: { count: 89 }
			}
		];
	}

	/**
	 * Получить URL для авторизации VK
	 */
	getAuthUrl(clientId: string, redirectUri: string): string {
		const params = new URLSearchParams({
			client_id: clientId,
			redirect_uri: redirectUri,
			scope: 'wall,groups',
			response_type: 'code',
			v: this.API_VERSION
		});

		return `https://oauth.vk.com/authorize?${params}`;
	}

	/**
	 * Обновить токен доступа
	 */
	setAccessToken(token: string): void {
		this.accessToken = token;
	}
}

// Экспортируем экземпляр сервиса
export const vkApiService = new VKApiService();

// Для использования с токеном:
// export const vkApiService = new VKApiService('your_access_token_here');
