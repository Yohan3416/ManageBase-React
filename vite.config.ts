// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // 将'@'映射到'src'目录
      '@': path.resolve(__dirname, './src')
    }
  },
  define: {
    'import.meta.env': process.env
  },
  // 插件配置
  plugins: [react()]
})
