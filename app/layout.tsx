
'use client'
import './globals.css'
import Navbar from "@/components/global/navbar";
import {Provider} from "react-redux";
import {store} from "@/store";


export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Provider store={store}>
            <Navbar/>
            {children}
        </Provider>
        </body>
        </html>
    )
}
