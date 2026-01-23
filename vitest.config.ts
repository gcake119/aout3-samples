import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['ch*/**/*.test.{js,ts}'],      // 只執行新的 .test.js
    exclude: [
      '**/node_modules/**',
      '**/_original-jest/**',                 // 排除參考資料夾
      '**/*.spec.{js,ts}'                     // 排除 .spec.js
    ],
  },
})
