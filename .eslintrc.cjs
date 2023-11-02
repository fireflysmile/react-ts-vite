module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh'],
  rules: {
    "no-unused-vars": "off",
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": [0, { "allow": ["useSocket", "useStorage", "useCookie", "useHttpRequest"] }],
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-empty-interface": "off",
  },
}
