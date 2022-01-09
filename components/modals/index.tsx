import React, { useContext } from 'react'
import { Modal, View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { ModalContext } from '../../contexts/ModalContext'
import { CloseIcon } from '../icons'
import { Space } from '../util'
const ProfileMenuModal = () => {
    const { isOpen, setOpen } = useContext(ModalContext)
    return (

        <Modal
            style={{ backgroundColor: '#503e9d' }}
            animationType="fade"
            transparent={true}
            visible={isOpen}
            onRequestClose={() => { setOpen(prev => !prev) }}
        >
            <Pressable style={tailwind('absolute w-full h-full bg-black bg-opacity-10')} onPress={() => setOpen(prev => !prev)}>
            </Pressable>
            <View style={tailwind('absolute right-1 top-12 bg-white py-4 px-8 rounded-lg ')} >
                <Text>Profile</Text>
                <Space size={8}/>
                <Text>Logout</Text>
                <Space size={8}/>
                <Text>Login</Text>

            </View>

        </Modal >


    )
}

export default ProfileMenuModal
