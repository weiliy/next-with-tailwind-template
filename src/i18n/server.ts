// i18n/server.ts
import { createI18nServer } from 'next-international/server'

export const { getI18n, getScopedI18n, getStaticParams } = createI18nServer({
    en: () => import('@/i18n/locales/en'),
    zh: () => import('@/i18n/locales/zh'),
})