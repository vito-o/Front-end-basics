// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  runtimeConfig: {
    //  the private keys which are only available server-side
    apiSecret: '123',

    // keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },

  vite: {
    server: {
      proxy: {
        '/authApi': {
          target: "http://localhost:3080",
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/authApi/, ''),
        },
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "@/assets/css/_colors.scss" as *;'

        }
      }
    }
  }
})
