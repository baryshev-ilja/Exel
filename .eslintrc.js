module.exports = {
  parser: 'babel-eslint',
  env: {
    es6: true,
    browser: true,
    node: true,
  },
  extends: ['google'],
  plugins: ['babel', 'jsx-a11y'],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  rules: {
    'linebreak-style': 'off',
    'object-curly-spacing': 'off',
    'require-jsdoc': 'off',
    'max-len': ['error', { code: 80 }],
    'operator-linebreak': 'off',
  },
};
