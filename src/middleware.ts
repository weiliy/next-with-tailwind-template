import { createI18nMiddleware } from 'next-international/middleware'
import { NextRequest } from 'next/server'
import {i18n} from "@/i18n/i18n-config";

const I18nMiddleware = createI18nMiddleware(i18n)

export function middleware(request: NextRequest) {
    return I18nMiddleware(request)
}

export const config = {
    matcher: ['/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)']
}