module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    // TypeScript specific rules
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    '@typescript-eslint/no-explicit-any': 'on',
    '@typescript-eslint/no-empty-function': 'off',

    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.tsx', '.ts'] },
    ], // Allow jsx syntax in .jsx and .tsx files
    'react/jsx-props-no-spreading': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // General JavaScript/ESLint rules
    'no-console': 'warn',
    eqeqeq: ['error', 'always'],
    curly: 'error',
    'no-trailing-spaces': 'error',
    'eol-last': ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['error', 'single'],
    semi: ['error', 'always'], // Require
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
