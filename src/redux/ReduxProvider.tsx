"use client"
import { store } from "./store"
import { Provider as ReactReducProvider } from "react-redux"

export default function ReduxProvider({children}: {children: React.ReactNode}) {
    return (
        <ReactReducProvider store={store}>
            {children}
        </ReactReducProvider>
    )
}