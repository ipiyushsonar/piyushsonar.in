import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import nextPlugin from '@next/eslint-plugin-next';

// eslint-plugin-react does not support ESLint 10 yet (crashes on removed context.getFilename), so it is left out.
// typescript-eslint does not support TypeScript 7 yet, so .ts/.tsx files are not
// parsed by ESLint; `pnpm run typecheck` (tsc --noEmit) covers them instead.
export default [
  { ignores: ['.next/', 'out/', 'node_modules/', '**/*.ts', '**/*.tsx'] },
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,mjs,cjs}'],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: 'module',
      globals: { ...globals.browser, ...globals.es2021 },
      parserOptions: { ecmaFeatures: { jsx: true } },
    },
    plugins: { 'react-hooks': reactHooks, '@next/next': nextPlugin },
    rules: {
      ...reactHooks.configs.recommended.rules,
      ...nextPlugin.configs['core-web-vitals'].rules,
    },
  },
  {
    files: ['**/*.{js,cjs}'],
    languageOptions: { sourceType: 'commonjs', globals: globals.node },
  },
];
