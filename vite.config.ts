/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'path'

const fileBaseName = 'vue-easy-lightbox';

export default defineConfig({
  server: {
    port: 8888
  },
  resolve: {
    alias: {
      src: path.resolve(__dirname, './src')
    }
  },
  test: {
    globals: true,
    environment: 'happy-dom',
    testTransformMode: {
      web: [/\.[jt]sx$/]
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler'
      }
    }
  },
  build: {
    lib: {
      entry: {
        main: path.resolve(__dirname, 'src/index.ts')
      },
      name: "VueEasyLightbox",
      formats: ['es', 'cjs', 'umd'],
      fileName: (format, entryName) => {
        if (entryName === 'umd') return `${fileBaseName}.umd.js`
        if (format === 'es') return `${fileBaseName}.esm.js`
        if (format === 'cjs') return `${fileBaseName}.cjs.js`
        return `${fileBaseName}.${format}.js`
      }
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue'
        },
        exports: 'named'
      }
    }
  },
  plugins: [vue(), vueJsx()]
})
