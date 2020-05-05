module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  plugins: ['prettier', 'react'],
  extends: ['naver', 'plugin:react/recommended', 'plugin:prettier/recommended'],
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true,
    },
  },
  rules: {
    'react/prop-types': 'off',
    'class-methods-use-this': 'off'
  }
}