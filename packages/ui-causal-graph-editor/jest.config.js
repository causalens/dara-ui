// For a detailed explanation regarding each configuration property, visit:
// https://jestjs.io/docs/en/configuration.html

module.exports = {
    // Automatically clear mock calls and instances between every test
    clearMocks: true,
    // The directory where Jest should output its coverage files
    coverageDirectory: 'coverage',
    // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
    moduleNameMapper: {
        '\\.(css|less)$': '<rootDir>/node_modules/jest-css-modules',
        // see https://github.com/ai/nanoid/issues/363
        '^nanoid(/(.*)|$)': 'nanoid$1',
    },
    setupFilesAfterEnv: ['<rootDir>/src/jest-setup.ts'],
    testEnvironment: 'jest-environment-jsdom',
    // The glob patterns Jest uses to detect test files
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    // A map from regular expressions to paths to transformers
    transform: {
        '\\.[jt]sx?$': 'babel-jest',
    },
    transformIgnorePatterns: ['/node_modules/(?!(nanoid))'],
};
