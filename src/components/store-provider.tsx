"use client"

import React, {PropsWithChildren} from 'react'
import {Provider} from "react-redux";
import {store} from "@/app/store";

export function StoreProvider({ children }: PropsWithChildren) {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}
