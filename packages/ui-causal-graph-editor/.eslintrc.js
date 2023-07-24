module.exports = {
    extends: ['@darajs/eslint-config'],
    parserOptions: {
        project: './tsconfig.eslint.json',
        tsconfigRootDir: __dirname,
    },
    rules: {
        'no-underscore-dangle': 'off',
        'max-classes-per-file': 'off',
        'no-useless-constructor': 'off',
        'import/order': [
            'error',
            {
                alphabetize: { order: 'asc' },
                groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
                'newlines-between': 'always',
                pathGroups: [
                    {
                        pattern: '@types',
                        group: 'internal',
                    },
                    {
                        pattern: '@shared/**',
                        group: 'internal',
                    },
                    {
                        group: 'internal',
                        pattern: '@darajs/**',
                        position: 'before',
                    },
                ],
            },
        ],
    },
};
