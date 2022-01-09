import React, { useContext } from 'react'
import { Modal, View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { AuthenticationContext, ModalContext } from '../../contexts'
import { Space } from '../util'
import AsyncStorage from '@react-native-async-storage/async-storage'

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
            <Pressable style={tailwind('absolute w-full h-full bg-black bg-opacity-10')} onPress={() => setOpen(prev => !prev)}>
            </Pressable>
            {children}
            

        </Modal >


    )
}

