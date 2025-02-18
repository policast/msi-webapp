// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  ssr: false,
  devtools: { enabled: true },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: '@use "@/assets/styles/_variables.scss" as *;'  <--- Bsp
          additionalData: '@use "~/assets/styles/_mixins.scss" as mix;',
        }
      }
    }
  }
})
