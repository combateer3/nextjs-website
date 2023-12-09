'use client'

import { createContext, useState } from 'react'

//create type for context
type themeContextType = {
    theme: string;
    toggleTheme: () => void;
}

//default values
const themeContextDefaults: themeContextType = {
    theme: 'dark',
    toggleTheme: () => {}
}

const ThemeContext = createContext(themeContextDefaults);

export function ThemeProvider({children}: {children: React.ReactNode}) {
    const [theme, setTheme] = useState(themeContextDefaults.theme);

    //toggles between light and dark themes
    function toggleTheme() {
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            <div className={theme}>{children}</div>
        </ThemeContext.Provider>
    )
}