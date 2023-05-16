// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/tailwindcss'],
    app: {
        head: {
            title: 'Nuxt Jojo',
            meta: [
                { name: 'description', content: 'Everything about Nuxt.js' }
            ]
        }
    }
})
