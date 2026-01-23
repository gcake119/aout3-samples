import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,           // 啟用全域 API (describe, it, expect)
    environment: 'jsdom',    // 支援 DOM 測試
    setupFiles: [],          // 測試前執行的檔案
  },
})
