// i18n/client.ts
"use client"
import {createI18nClient} from 'next-international/client'

const i18nClient = createI18nClient({
    en: () => import('@/i18n/locales/en'),
    zh: () => import('@/i18n/locales/zh'),
})

export const {
    useI18n,
    useScopedI18n,
    I18nProviderClient,
    useChangeLocale,
    useCurrentLocale
} = i18nClient;