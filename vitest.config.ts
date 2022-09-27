/// <reference types="vitest" />

import { fileURLToPath } from 'url'

import { defineConfig } from 'vitest/config'
import Vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    Vue(),
    AutoImport({
      imports: ['vue', 'vue-router'],
      dts: '.nuxt/imports.d.ts',
    }),
  ],
  resolve: {
    alias: {
      '~': fileURLToPath(new URL('./', import.meta.url)),
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'setup-tests.ts',
    deps: {
      inline: ['vuetify'],
    },
    coverage: {
      reporter: ['text', 'json', 'html'],
    },
    exclude: ['**/tests/**', '**/tests-examples/**', '**/node_modules/**'],
  },
})
