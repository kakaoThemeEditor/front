import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { resolve } from "path";
import tailwindcss from "@tailwindcss/vite";
import CompressionPlugin from "vite-plugin-compression";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    CompressionPlugin({
      algorithm: "gzip", // 'gzip' 또는 'brotliCompress' 선택
      threshold: 10240, // 압축할 최소 파일 크기 (바이트 단위)
      deleteOriginFile: false, // 압축된 파일을 만들고 원본 파일을 삭제할지 여부
    }),
  ],
  base: "./",
  build: {
    minify: "terser", // 'terser'를 사용하여 minify
    terserOptions: {
      compress: {
        drop_console: true,
      },
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
