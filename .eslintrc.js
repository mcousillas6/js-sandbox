module.exports = {
  env: {
    commonjs: true,
    es6: true,
    "jest/globals": true
  },
  extends: [
    'airbnb-base',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  rules: {
    "class-methods-use-this": [0],
  },
  plugins: ['jest']
};
