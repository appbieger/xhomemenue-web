module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: ['eslint:recommended'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'script',
    },
    rules: {
        indent: ['error', 4],
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single'],
        semi: ['error', 'always'],
        'no-console': 'warn',
        'no-unused-vars': 'warn',
    },
    globals: {
        gsap: 'readonly',
        ScrollTrigger: 'readonly',
    },
};
