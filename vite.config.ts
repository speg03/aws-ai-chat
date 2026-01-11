/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  // Vitestの設定を追加
  test: {
    globals: true, // describe, it, expect などをグローバルで使用可能に
    environment: "jsdom", // React コンポーネントのテストのため
    // setupFiles: "./src/setupTests.ts", // テスト実行前のセットアップファイル（オプション）
  },
});
