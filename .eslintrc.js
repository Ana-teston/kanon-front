module.exports = {
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint'],
    ignorePatterns: ['build/**/*'],
    extends: [
        'prettier',
        'plugin:@typescript-eslint/recommended',
    ],
};
