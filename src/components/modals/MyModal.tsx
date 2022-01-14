import React, { useContext } from 'react'
import { Modal, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import {  ModalContext } from '../../contexts'



export const MyModal:React.FC<{}> =  ({children}) => {
    const { isOpen, setOpen } = useContext(ModalContext)
    return (
        <Modal
            style={{ backgroundColor: '#000' }}
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => { setOpen(prev => !prev) }}
        >
            <Pressable style={tailwind('absolute w-full h-full bg-black bg-opacity-10')} onPress={() => setOpen(false)}>
            </Pressable>
            {children}
        </Modal >


    )
}

