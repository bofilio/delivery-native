
import React, { createContext, useState } from 'react'
import { theme1, ThemeType } from '../constants'


/*********************************************************************************Context */
export const ThemeContext = createContext<{ theme: ThemeType, setTheme: React.Dispatch<React.SetStateAction<ThemeType>> }>(
    {
        theme: theme1,
        setTheme : ()=> null
    }
);

export const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [theme, setTheme] = useState(theme1)
    
    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}





