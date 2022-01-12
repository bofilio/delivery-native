import React, { createContext, useContext, useState } from 'react'
import { GestureResponderEvent, Pressable } from 'react-native';
import { MyPressable } from '../components/util';

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

export const OpenModal:React.FC<{}> =({children})=>{
    const { isOpen, setOpen } = useContext(ModalContext)
    return(
        <Pressable onPress={()=>setOpen(true)}> 
            {children}
        </Pressable>
    )
}


export const CloseModal:React.FC<{onPress?: ((event: GestureResponderEvent) => void) | null | undefined}> =({onPress,children})=>{
    const { isOpen, setOpen } = useContext(ModalContext)
    return(
        <MyPressable onPress={onPress} onPressOut={()=>{setOpen(false)}}> 
            {children}
        </MyPressable>
    )
}