export default () => ({

    'documentation': {
        enabled: process.env.NODE_ENV === 'development'
    },
    upload: {
        config: {
            breakpoints: {
                xlarge: 1440,
                large: 1024,
                medium: 700,
                small: 420,
                xsmall: 64
            },
        },
    },
    'webp-converter': {
        enabled: true,
        config: {
            // mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
            mimeTypes: ['image/png', 'image/jpeg', 'image/jpg'],
            options: {
                // WebP options: https://sharp.pixelplumbing.com/api-output#webp
                quality: 60
            }
        },
    },
    meilisearch: {
        config: {
            // Your meili host
            host: 'http://localhost:7700',
            // Your master key or private key
            apiKey: 'masterKey',
        },

    },
    'strapi-v5-plugin-populate-deep': {
        config: {
            defaultDepth: 4, // Default is 5
        }
    },
    seo: {
        enabled: true,
    },
});
