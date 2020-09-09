module.exports = {
    extends: ['stylelint-config-airbnb', 'stylelint-config-rational-order'],
    plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
    ignoreFiles: [],
    rules: {
        indentation: 4,
        'number-leading-zero': 'always',
        'length-zero-no-unit': true,
        'string-quotes': 'single',
        'color-hex-case': 'lower',
        'block-opening-brace-newline-after': ['always'],
        'block-closing-brace-newline-before': ['always'],
        'rule-empty-line-before': [
            'always',
            {
                except: ['first-nested'],
            },
        ],
        'block-closing-brace-empty-line-before': 'never',
        'max-empty-lines': 1,
        'order/properties-order': [],
        'plugin/rational-order': [
            true,
            {
                'border-in-box-model': true,
                'empty-line-between-groups': true,
            },
        ],
    },
};
