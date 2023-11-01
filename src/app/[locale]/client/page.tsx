'use client';

import {useChangeLocale, useCurrentLocale, useI18n, useScopedI18n} from "@/i18n/client";
import {Button} from "@/components/ui/button";
import {i18n} from "@/i18n/i18n-config";

export default function Page() {
    const t = useI18n();
    const changeLocale = useChangeLocale();
    const t2 = useScopedI18n('client');
    const currentLocale = useCurrentLocale();

    return <div className="w-full min-h-screen flex flex-col items-center justify-center">
        <p>{t('home.description')}</p>
        <p>{t2('hello', {name: 'world'})}</p>
        <p>Current locale: {currentLocale}</p>
        <div>
            {i18n.locales.map((locale) => (
                <Button key={locale} disabled={currentLocale === locale}
                        onClick={() => changeLocale(locale)}>{locale}</Button>
            ))}
        </div>
    </div>
}