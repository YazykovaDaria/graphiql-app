/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { coverageConfigDefaults } from 'vitest/config';
import svgr from 'vite-plugin-svgr';
import checker from 'vite-plugin-checker';

export default defineConfig({
  plugins: [
    react(),
    svgr(),
    !process.env.VITEST &&
      checker({
        typescript: true,
        eslint: {
          lintCommand: 'eslint "*.{ts,tsx}"',
        },
      }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setupTests.ts',
    coverage: {
      provider: 'c8',
      all: true,
      skipFull: true,
      reporter: ['text'],
      exclude: [...coverageConfigDefaults.exclude, 'src/types/*'],
    },
  },
  server: {
    open: true,
  },
});
