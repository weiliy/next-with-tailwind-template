export const i18n = {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    urlMappingStrategy: 'rewriteDefault'
} as const

export type Locale = (typeof i18n)['locales'][number]