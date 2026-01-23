import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['**/*.test.{js,ts}'],     // 只執行 .test.js
    exclude: ['**/*.spec.{js,ts}'],     // 排除 .spec.js
  },
})
