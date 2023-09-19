"use client"

import { createContext, useState } from "react"

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [mode, setMode] = useState("synthwave")

    const toggle = () => {
        setMode((prev) => (prev === "synthwave" ? "cupcake" : "synthwave"))
    }

    return(<ThemeContext.Provider value={{ toggle, mode }}>
        <div className="theme" data-theme={`${mode}`}>
            {children}
        </div>
    </ThemeContext.Provider>)
}
