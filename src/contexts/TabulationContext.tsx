import React, { createContext, useState } from 'react'

export const TabulationContext = createContext<{ active_id: number, setActiveId: React.Dispatch<React.SetStateAction<number>> }>(
    {
        active_id: 1,
        setActiveId: () => {}
    }
);

export const TabulationProvider: React.FC<{}> = ({ children }) => {
    const [active_id, setActiveId] = useState(1)

    return (
        <TabulationContext.Provider value={{ active_id, setActiveId }}>
            {children}
        </TabulationContext.Provider>
    )
}