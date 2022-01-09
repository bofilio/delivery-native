import React, { createContext, useContext, useState } from 'react'
import { Pressable } from 'react-native';

export const ModalContext = createContext<{ isOpen: boolean, setOpen: React.Dispatch<React.SetStateAction<boolean>> }>(
    {
        isOpen: false,
        setOpen : ()=> false
    }
);

export const ModalProvider: React.FC<{}> = ({ children }) => {
    const [isOpen, setOpen] = useState(false)
    
    return (
        <ModalContext.Provider value={{ isOpen, setOpen }}>
            {children}
        </ModalContext.Provider>
    )
}

export const ToggleModal:React.FC<{}> =({children})=>{
    const { isOpen, setOpen } = useContext(ModalContext)
    console.log(isOpen)
    return(
        <Pressable onPress={()=>setOpen(!isOpen)}> 
            {children}
        </Pressable>
    )
}