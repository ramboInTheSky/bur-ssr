module.exports = {
    extends: [
        'airbnb',
        'prettier',
        'prettier/react',
        'plugin:import/errors',
        'plugin:import/warnings',
        'plugin:jsx-a11y/recommended',
        'plugin:jest/recommended',
        'plugin:react/recommended'
    ],
    env: {
        browser: true,
        node: true,
        jest: true
    },
    parser: 'babel-eslint',
    plugins: ['babel', 'filenames', 'import', 'jest', 'jsx-a11y', 'react'],
    rules: {
        'react/jsx-filename-extension': 'off',
    },
    globals: {
        PRODUCTION: false,
        PERF: false,
        LOG: false,
        SSR: false
    }
};
