module.exports = {
    extends: [
        './eslint.js',
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
    ],
    parserOptions: {
        project: './tsconfig.json',
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    rules: {
        '@typescript-eslint/camelcase': ['off'],
        '@typescript-eslint/explicit-function-return-type': ['off'],
        '@typescript-eslint/no-unused-vars': ['error', { ignoreRestSiblings: true }],
        '@typescript-eslint/no-misused-promises': [
            'error',
            {
                checksVoidReturn: false,
            },
        ],
        '@typescript-eslint/no-explicit-any': ['off'],
        'no-control-regex': ['off'],
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/interface-name-prefix': 1,
        'react/jsx-filename-extension': 1,
        'react/no-array-index-key': 1,
    },
};
