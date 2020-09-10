module.exports = {
    purge: [],
    theme: {
        extend: {},
        screens: {
            dark: { raw: '(prefers-color-scheme: dark)' },
        },
    },
    variants: {
        backgroundColor: [
            'dark',
            'dark-hover',
            'dark-group-hover',
            'dark-even',
            'dark-odd',
        ],
        borderColor: [
            'dark',
            'dark-disabled',
            'dark-focus',
            'dark-focus-within',
        ],
        textColor: ['dark', 'dark-hover', 'dark-active', 'dark-placeholder'],
    },
    plugins: [
        // eslint-disable-next-line global-require
        require('tailwindcss-dark-mode')(),
    ],
};
