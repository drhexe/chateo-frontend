module.exports = {
    trailingComma: 'es5',
    semi: true,
    tabWidth: 4,
    singleQuote: true,
    plugins: [
        '@trivago/prettier-plugin-sort-imports',
        'prettier-plugin-tailwindcss',
    ],
    tailwindFunctions: ['cn'],
};
