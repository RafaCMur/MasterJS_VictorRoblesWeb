module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es2021': true,
        'jquery': true  // Add this to recognize jQuery globals
    },
    'extends': [
        'eslint:recommended',
        'plugin:jquery/recommended'  // Add this line to extend jQuery rules
    ],
    'plugins': [
        'jquery'  // Add this to load the jQuery plugin
    ],
    'overrides': [
        {
            'env': {
                'node': true
            },
            'files': [
                '.eslintrc.{js,cjs}'
            ],
            'parserOptions': {
                'sourceType': 'script'
            }
        }
    ],
    'parserOptions': {
        'ecmaVersion': 'latest'
    },
    'rules': {
        'indent': [
            'error',
            4
        ],
        'linebreak-style': 'off',
        'quotes': [
            'error',
            'single'
        ],
        'semi': [
            'error',
            'never'
        ]
    }
}
