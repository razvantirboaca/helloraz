module.exports = {
  'parser': 'babel-eslint',
  'root': true,
  'env': {
    'browser': true,
    'node': true
  },
  'extends': [
    'eslint:recommended'
  ],
  'rules': {
    // overwrite eslint:recommended
    'semi': ['error', 'always'],
    'no-console': 'off',
    // other eslint
    'indent': ['error', 4],
    'quotes': ['error', 'single'],
    'space-before-blocks': 'error',
    'keyword-spacing': ['error'],
    'comma-dangle': ['error', 'never']
  },
  parserOptions: {
    ecmaVersion: 2020,
    ecmaFeatures: {
      jsx: true,
      modules: 'module'
    }
  }
};
