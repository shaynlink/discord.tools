export default {
    head: {
        title: 'Discord tools',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: 'Unofficial discord tools for developers !' },
            { hid: 'application-name', name: 'application-name', content: 'Discord tools' },
        ],
        link: [
            { rel: 'manifest', href: '/manifest.webmanifest' },
        ],
        script: [
            { src: '/javascripts/main.js' },
        ]
    },
    css: [
        '~/assets/stylesheets/main.scss'
    ]
};