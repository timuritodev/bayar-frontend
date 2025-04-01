module.exports = {
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
		'\\.(css|scss|sass)$': 'identity-obj-proxy',
	},
	transform: {
		'^.+\\.(ts|tsx)$': 'ts-jest',
		'^.+\\.(js|jsx)$': 'babel-jest',
	},
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	globals: {
		'ts-jest': {
			tsconfig: 'tsconfig.jest.json',
		},
	},
};
