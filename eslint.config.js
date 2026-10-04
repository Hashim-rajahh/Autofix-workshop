import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['script.js'],
    languageOptions: {
      sourceType: 'script',
      globals: { ...globals.browser }
    }
  },
  {
    files: ['eslint.config.js'],
    languageOptions: { sourceType: 'module' }
  },
  { ignores: ['node_modules/'] }
];
