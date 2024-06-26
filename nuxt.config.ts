// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    baseURL: "/mood-commerce",
  },
  devtools: { enabled: true },
  css: ["@/assets/scss/main.scss"],
  modules: ["@nuxtjs/eslint-module", "@nuxtjs/tailwindcss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "/assets/scss/global.scss" as *;',
        },
      },
    },
  },
  runtimeConfig: {
    public: {
      apiBaseUrl: "/",
    },
  },
});
