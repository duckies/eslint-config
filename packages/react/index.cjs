module.exports = {
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    '@duckies/eslint-config-ts',
  ],
  rules: {
    'jsx-quotes': ['error', 'prefer-double'],
  },
}
