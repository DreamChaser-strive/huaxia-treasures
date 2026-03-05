import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    open: '/src/AR.html',
    proxy: {
      // 代理 OSS 模型请求，绕过 CORS 限制
      '/oss-model': {
        target: 'https://heritage-flow-flow-picture.oss-cn-beijing.aliyuncs.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/oss-model/, '/ar/model'),
      },
    },
  },
});
