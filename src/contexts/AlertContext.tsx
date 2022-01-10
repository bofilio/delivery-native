import React, { useReducer, createContext, useState, useEffect } from 'react'
import { AlertProps } from '../components/util';
import { theme1, ThemeType } from '../constants'


/*********************************************************************************Context */
export const AlertContext = createContext<{ alert: AlertProps, setAlert: React.Dispatch<React.SetStateAction<AlertProps>> }>(
    {
        alert:{status:undefined, message:undefined},
        setAlert : ()=> null
    }
);

export const AlertProvider: React.FC<{}> = ({ children }) => {
    const [alert, setAlert] = useState({status:undefined, message:undefined} as AlertProps)
    
    
    return (
        <AlertContext.Provider value={{ alert, setAlert }}>
            {children}
        </AlertContext.Provider>
    )
}
