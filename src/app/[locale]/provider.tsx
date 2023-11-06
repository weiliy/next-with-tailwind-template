import React, {PropsWithChildren} from "react";
import {ThemeProvider} from "@/components/theme-provider";
import {StoreProvider} from "@/components/store-provider";

export default function RootProvider({children}: PropsWithChildren) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <StoreProvider>
                {children}
            </StoreProvider>
        </ThemeProvider>
    )
}