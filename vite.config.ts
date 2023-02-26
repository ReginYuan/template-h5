import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import Components from 'unplugin-vue-components/vite';
import { VantResolver } from 'unplugin-vue-components/resolvers';
// 使用postcss-pxtorem将px转为rem
import postCssPxToRem from 'postcss-pxtorem';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      resolvers: [VantResolver()],
    })],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src')
    }
  },
  css: {
    postcss: {
      plugins: [
        postCssPxToRem({
          // 1rem的大小
          rootValue({ file }) {
            return file.indexOf('vant') !== -1 ? 37.5 : 75;
          },
          // 需要转换的属性，这里选择全部都进行转换
          propList: ['*'],
        })
      ]
    }
  }
})
