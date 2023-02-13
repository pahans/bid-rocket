module.exports = {
  env: {
    es6: true,
    browser: true,
    node: true
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'airbnb-typescript',
    'plugin:react-hooks/recommended'
  ],
  plugins: ['import', 'react', '@typescript-eslint', 'prettier'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json'
  },
  rules: {}
};
