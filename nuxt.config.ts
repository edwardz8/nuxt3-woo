// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: [
        '@nuxtjs/tailwindcss',
        '@pinia/nuxt',
    ],
    runtimeConfig: {
        public: {
            wpUri: process.env.WP_URI,
            wpUriHttps: process.env.WP_URI_HTTPS,
            wpCP: process.env.WP_CONSUMER_PUBLIC,
            wpCS: process.env.WP_CONSUMER_SECRET,
        }
    }
})
