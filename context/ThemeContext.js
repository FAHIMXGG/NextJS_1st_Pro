"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("black")

    const toggle = () => {
        setMode((prev) => (prev === "black" ? "cupcake" : "black"))
    }

    return(<ThemeContext.Provider value={{ toggle, mode }}>
        <div data-theme={`${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>)
}
