export const VALIDATION_SETTINGS = {
	email: {
		pattern:
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
		maxLength: 64,
		messages: {
			noEmail: "Необходимо ввести email",
			invalid: "Необходимо ввести email в правильном формате",
			tooLong: "Слишком длинный email",
		},
	},
	password: {
		// pattern: /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]+$/,
		// minLength: 8,
		pattern: /^[\s\S]*$/,
		minLength: 1,
		maxLength: 32,
		messages: {
			noPassword: "Необходимо ввести пароль",
			noRepeatPassword: "Необходимо повторно ввести пароль",
			invalid: "Необходимо ввести пароль в правильном формате",
			tooShort: "Слишком короткий пароль",
			tooLong: "Слишком длинный пароль",
			noMatch: "Пароли не совпадают",
		},
	},
	name: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 25,
		messages: {
			noName: "Необходимо ввести имя",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинное имя",
		},
	},
	surname: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 42,
		messages: {
			noSurname: "Необходимо ввести фамилию",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинная фамилия",
		},
	},
	phone: {
		// pattern: /^[0-9]+$/iu,
		pattern: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/iu,
		minLength: 2,
		maxLength: 42,
		messages: {
			noPhone: "Необходимо ввести номер телефона",
			invalid: "Только цифры",
			tooLong: "Слишком длинный номер телефона",
		},
	},
	address: {
		pattern: /^[a-zа-яё\s\0-9]+$/iu,
		minLength: 2,
		maxLength: 42,
		messages: {
			noAddress: "Необходимо ввести адрес",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинный адрес",
		},
	},
	city: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 60,
		messages: {
			noCity: "Необходимо ввести название города",
			invalid: "Только цифры",
			tooLong: "Слишком длинное название города",
		},
	},
	title: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 42,
		messages: {
			noTitle: "Необходимо ввести название организации",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинной название",
		},
	},
	inn: {
		pattern: /^[0-9]+$/iu,
		minLength: 8,
		maxLength: 15,
		messages: {
			noInn: "Необходимо ввести ИНН",
			invalid: "Только цифры",
			tooShort: "Слишком короткий ИНН",
			tooLong: "Слишком длинный ИНН",
		},
	},
	fio: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 100,
		messages: {
			noFio: "Необходимо ввести ФИО",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинная ФИО",
		},
	},
	promo: {
		pattern: /^[a-zа-яё\s\0-9]+$/iu,
		minLength: 2,
		maxLength: 42,
		messages: {
			noPromo: "Такого промокода не существует",
			invalid: "Такого промокода не существует",
			tooLong: "Слишком длинный промкод",
		},
	},
	building_length: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 10,
		messages: {
			noBuilding_length: "Необходимо длину здания",
			invalid: "Только цифры",
			tooShort: "Слишком короткая длина здания",
			tooLong: "Слишком большая длина здания ",
		},
	},
	building_width: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noBuilding_width: "Необходимо ввести ширину здания",
			invalid: "Только цифры",
			tooShort: "Слишком короткая ширина здания",
			tooLong: "Слишком длинная ширина здания",
		},
	},
	ceiling_height: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noCeiling_height: "Необходимо ввести высоту здания",
			invalid: "Только цифры",
			tooShort: "Слишком короткая высота здания",
			tooLong: "Слишком длинная высота здания",
		},
	},
	door_area: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noDoor_area: "Необходимо ввести площадь проёмов ворот, дверей",
			invalid: "Только цифры",
			tooShort: "Слишком короткий площадь",
			tooLong: "Слишком длинная площадь",
		},
	},
	window_area: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noWindow_area: "Необходимо ввести площадь оконных проёмов",
			invalid: "Только цифры",
			tooShort: "Слишком короткая площадь",
			tooLong: "Слишком длинная площадь",
		},
	},
	wall_panel_thickness: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noWall_panel_thickness: "Необходимо ввести толщина стеновых панелей",
			invalid: "Только цифры",
			tooShort: "Слишком короткая толщина",
			tooLong: "Слишком длинная толщина",
		},
	},
	roof_panel_thickness: {
		pattern: /^[0-9]+$/iu,
		minLength: 1,
		maxLength: 15,
		messages: {
			noRoof_panel_thickness: "Необходимо ввести толщина кровельных панелей",
			invalid: "Только цифры",
			tooShort: "Слишком короткая толщина",
			tooLong: "Слишком длинная толщина",
		},
	},
	insulation_type: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 100,
		messages: {
			noInsulation_type: "Необходимо ввести тип наполнителя",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинный тип наполнителя",
		},
	},
	region: {
		pattern: /^[a-zа-яё\s]+$/iu,
		minLength: 2,
		maxLength: 100,
		messages: {
			noRegion: "Необходимо ввести регион",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком длинный регион",
		},
	},
	user_type: {
		pattern: /^[a-zа-яё\s\0-9]+$/iu,
		minLength: 1,
		maxLength: 42,
		messages: {
			noUser_type: "Необходимо ввести тип",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком много текста",
		},
	},
	organization_name: {
		pattern: /^[a-zа-яё\s\0-9]+$/iu,
		minLength: 1,
		maxLength: 42,
		messages: {
			noOrganization_name: "Необходимо ввести название организации",
			invalid: "Только кириллица или латинские буквы",
			tooLong: "Слишком много текста",
		},
	},
};

export const EMAIL_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.email.messages.noEmail,
	},
	pattern: {
		value: VALIDATION_SETTINGS.email.pattern,
		message: VALIDATION_SETTINGS.email.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.email.maxLength,
		message: VALIDATION_SETTINGS.email.messages.tooLong,
	},
};

export const PASSWORD_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.password.messages.noPassword,
	},
	pattern: {
		value: VALIDATION_SETTINGS.password.pattern,
		message: VALIDATION_SETTINGS.password.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.password.minLength,
		message: VALIDATION_SETTINGS.password.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.password.maxLength,
		message: VALIDATION_SETTINGS.password.messages.tooLong,
	},
};

export const NAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.name.messages.noName,
	},
	pattern: {
		value: VALIDATION_SETTINGS.name.pattern,
		message: VALIDATION_SETTINGS.name.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.name.maxLength,
		message: VALIDATION_SETTINGS.name.messages.tooLong,
	},
};

export const SURNAME_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.surname.messages.noSurname,
	},
	pattern: {
		value: VALIDATION_SETTINGS.surname.pattern,
		message: VALIDATION_SETTINGS.surname.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.surname.maxLength,
		message: VALIDATION_SETTINGS.surname.messages.tooLong,
	},
};

export const PHONE_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.phone.messages.noPhone,
	},
	pattern: {
		value: VALIDATION_SETTINGS.phone.pattern,
		message: VALIDATION_SETTINGS.phone.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.phone.maxLength,
		message: VALIDATION_SETTINGS.phone.messages.tooLong,
	},
};

export const ADDRESS_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.address.messages.noAddress,
	},
	pattern: {
		value: VALIDATION_SETTINGS.address.pattern,
		message: VALIDATION_SETTINGS.address.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.address.maxLength,
		message: VALIDATION_SETTINGS.address.messages.tooLong,
	},
};

export const CITY_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.city.messages.noCity,
	},
	pattern: {
		value: VALIDATION_SETTINGS.city.pattern,
		message: VALIDATION_SETTINGS.city.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.city.maxLength,
		message: VALIDATION_SETTINGS.city.messages.tooLong,
	},
};

export const TITLE_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.title.messages.noTitle,
	},
	pattern: {
		value: VALIDATION_SETTINGS.title.pattern,
		message: VALIDATION_SETTINGS.title.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.title.maxLength,
		message: VALIDATION_SETTINGS.title.messages.tooLong,
	},
};

export const INN_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.inn.messages.noInn,
	},
	pattern: {
		value: VALIDATION_SETTINGS.inn.pattern,
		message: VALIDATION_SETTINGS.inn.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.inn.minLength,
		message: VALIDATION_SETTINGS.inn.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.inn.maxLength,
		message: VALIDATION_SETTINGS.inn.messages.tooLong,
	},
};

export const FIO_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.fio.messages.noFio,
	},
	pattern: {
		value: VALIDATION_SETTINGS.fio.pattern,
		message: VALIDATION_SETTINGS.fio.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.fio.maxLength,
		message: VALIDATION_SETTINGS.fio.messages.tooLong,
	},
};

export const PROMO_VALIDATION_CONFIG = {
	pattern: {
		value: VALIDATION_SETTINGS.promo.pattern,
		message: VALIDATION_SETTINGS.promo.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.promo.maxLength,
		message: VALIDATION_SETTINGS.promo.messages.tooLong,
	},
};

export const BUILDING_LENGTH_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.building_length.messages.noBuilding_length,
	},
	pattern: {
		value: VALIDATION_SETTINGS.building_length.pattern,
		message: VALIDATION_SETTINGS.building_length.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.building_length.minLength,
		message: VALIDATION_SETTINGS.building_length.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.building_length.maxLength,
		message: VALIDATION_SETTINGS.building_length.messages.tooLong,
	},
};

export const BUILDING_WIDTH_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.building_width.messages.noBuilding_width,
	},
	pattern: {
		value: VALIDATION_SETTINGS.building_width.pattern,
		message: VALIDATION_SETTINGS.building_width.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.building_width.minLength,
		message: VALIDATION_SETTINGS.building_width.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.building_width.maxLength,
		message: VALIDATION_SETTINGS.building_width.messages.tooLong,
	},
};

export const CEILING_HEIGHT_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.ceiling_height.messages.noCeiling_height,
	},
	pattern: {
		value: VALIDATION_SETTINGS.ceiling_height.pattern,
		message: VALIDATION_SETTINGS.ceiling_height.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.ceiling_height.minLength,
		message: VALIDATION_SETTINGS.ceiling_height.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.ceiling_height.maxLength,
		message: VALIDATION_SETTINGS.ceiling_height.messages.tooLong,
	},
};

export const DOOR_AREA_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.door_area.messages.noDoor_area,
	},
	pattern: {
		value: VALIDATION_SETTINGS.door_area.pattern,
		message: VALIDATION_SETTINGS.door_area.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.door_area.minLength,
		message: VALIDATION_SETTINGS.door_area.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.door_area.maxLength,
		message: VALIDATION_SETTINGS.door_area.messages.tooLong,
	},
};

export const WINDOW_AREA_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.window_area.messages.noWindow_area,
	},
	pattern: {
		value: VALIDATION_SETTINGS.window_area.pattern,
		message: VALIDATION_SETTINGS.window_area.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.window_area.minLength,
		message: VALIDATION_SETTINGS.window_area.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.window_area.maxLength,
		message: VALIDATION_SETTINGS.window_area.messages.tooLong,
	},
};

export const WALL_PANEL_THICKNESS_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.wall_panel_thickness.messages.noWall_panel_thickness,
	},
	pattern: {
		value: VALIDATION_SETTINGS.wall_panel_thickness.pattern,
		message: VALIDATION_SETTINGS.wall_panel_thickness.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.wall_panel_thickness.minLength,
		message: VALIDATION_SETTINGS.wall_panel_thickness.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.wall_panel_thickness.maxLength,
		message: VALIDATION_SETTINGS.wall_panel_thickness.messages.tooLong,
	},
};

export const ROOF_PANEL_THICKNESS_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.roof_panel_thickness.messages.noRoof_panel_thickness,
	},
	pattern: {
		value: VALIDATION_SETTINGS.roof_panel_thickness.pattern,
		message: VALIDATION_SETTINGS.roof_panel_thickness.messages.invalid,
	},
	minLength: {
		value: VALIDATION_SETTINGS.roof_panel_thickness.minLength,
		message: VALIDATION_SETTINGS.roof_panel_thickness.messages.tooShort,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.roof_panel_thickness.maxLength,
		message: VALIDATION_SETTINGS.roof_panel_thickness.messages.tooLong,
	},
};

export const INSULATION_TYPE_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.insulation_type.messages.noInsulation_type,
	},
	pattern: {
		value: VALIDATION_SETTINGS.insulation_type.pattern,
		message: VALIDATION_SETTINGS.insulation_type.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.insulation_type.maxLength,
		message: VALIDATION_SETTINGS.insulation_type.messages.tooLong,
	},
};

export const REGION_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.region.messages.noRegion,
	},
	pattern: {
		value: VALIDATION_SETTINGS.region.pattern,
		message: VALIDATION_SETTINGS.region.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.region.maxLength,
		message: VALIDATION_SETTINGS.region.messages.tooLong,
	},
};

export const USER_TYPE_VALIDATION_CONFIG = {
	required: {
		value: true,
		message: VALIDATION_SETTINGS.user_type.messages.noUser_type,
	},
	pattern: {
		value: VALIDATION_SETTINGS.user_type.pattern,
		message: VALIDATION_SETTINGS.user_type.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.user_type.maxLength,
		message: VALIDATION_SETTINGS.user_type.messages.tooLong,
	},
};

export const ORGANIZATION_NAME_VALIDATION_CONFIG = {
	pattern: {
		value: VALIDATION_SETTINGS.organization_name.pattern,
		message: VALIDATION_SETTINGS.organization_name.messages.invalid,
	},
	maxLength: {
		value: VALIDATION_SETTINGS.organization_name.maxLength,
		message: VALIDATION_SETTINGS.organization_name.messages.tooLong,
	},
};