import Image from 'next/image'
import React from "react";
import {ModeToggle} from "@/components/mode-toggle";
import {getI18n, getScopedI18n} from "@/i18n/server";
import {Counter} from "@/features/counter/Counter";

export default async function Home() {
    const t = await getI18n()
    const scopedT = await getScopedI18n('repo');

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <ModeToggle/>
            <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
                {scopedT('url')}
                {t('home.description')}
            </p>
            <div className={"flex flex-col justify-center items-start"}>
                <h2 className="text-2xl">Build-in Support:</h2>
                <ol className="list-disc pl-6">
                    <li>i18n</li>
                    <li>Dark mode</li>
                    <li>Git commit lint in pre-commit hook</li>
                    <li>Redux</li>
                </ol>
            </div>
            <Counter/>
        </main>
    )
}
