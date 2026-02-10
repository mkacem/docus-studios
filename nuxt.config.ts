// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["nuxt-studio"],
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'mkacem',
      repo: 'docus-studio',
      branch: 'main'
    }
  }
})