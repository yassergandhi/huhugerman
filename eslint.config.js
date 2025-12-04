import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettierConfig from 'eslint-config-prettier';
import prettierPlugin from 'eslint-plugin-prettier';
import { defineConfig, globalIgnores } from 'eslint/config';

export default defineConfig([
  globalIgnores(['dist', 'node_modules', 'public']), // Ignorar archivos comunes en Vite-PWA
  {
    files: ['**/*.{ts,tsx,js,jsx}'], // Extender a JS si usas ambos
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
      prettierConfig, // Desactiva reglas de ESLint que chocan con Prettier
    ],
    plugins: {
      prettier: prettierPlugin, // Agregar plugin de Prettier
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    rules: {
      // Reglas comunes para React/Vite-PWA
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
      'prettier/prettier': 'error', // Ejecutar Prettier como regla de ESLint
      '@typescript-eslint/no-unused-vars': [
        'error',
        { argsIgnorePattern: '^_' },
      ],
      '@typescript-eslint/explicit-function-return-type': 'off', // Opcional, dependiendo de tu estilo
      'no-console': 'off', // Poner off, ya que es útil para debugging en PWA (console.log puede afectar rendimiento en prod, pero es tolerable en dev)
      'react-refresh/only-export-components': 'off', // Desactivar para permitir exportar hooks junto con componentes sin afectar fast refresh
    },
  },
]);
