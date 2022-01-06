
import React, { useReducer, createContext } from 'react'
import { theme1, ThemeType } from '../constants'
/******************************************************************Reducers */
type actionType = {
    type: "TOGGLE_MODE" | "CHANGE_THEME",
    payload?: any
}
type ThemereducerProps = {
    state: ThemeType,
    action: actionType
}

function themeReducer({ state, action }: ThemereducerProps) {
    switch (action.type) {
        case "TOGGLE_MODE":
            return { ...state, mode: state.mode == "dark" ? "light" : "dark" }
        case "CHANGE_THEME":
            return action.payload
    }

}
/*********************************************************************************Context */
export const ThemeContext = createContext<{ theme: ThemeType, dispatch: React.Dispatch<any> }>(
    {
        theme: theme1,
        dispatch: () => null
    }
);

export const ThemeProvider: React.FC<{}> = ({ children }) => {
    const [theme, dispatch] = useReducer(themeReducer, theme1)
    return (
        <ThemeContext.Provider value={{ theme, dispatch }}>
            {children}
        </ThemeContext.Provider>
    )
}





