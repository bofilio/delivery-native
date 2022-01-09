import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useContext, useState } from 'react'
import { Pressable, TextInput, View, Text, Modal } from 'react-native'
import tailwind from 'tailwind-rn'
import { AuthenticationContext, ThemeContext } from '../../contexts'
import { ModalProvider, ToggleModal } from '../../contexts/ModalContext'
import { useFireBaseAuth } from '../../hooks'
import { Navigation } from '../../navigation'
import { MenuIcon, SearchIcon, UserIcon } from '../icons'
import { Button, SearchInput } from '../inputs'
import { MyModal } from '../modals'
import { Space } from '../util'


export const TopBar = ({ navigation }: any) => {
    const { state, performAction } = useFireBaseAuth();
    async function logout() {
        try {
            await performAction('signout');
        } catch (err) {
            console.log(err)
        }

    }
    const { uid } = useContext(AuthenticationContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={[tailwind('px-4 py-3 flex flex-row items-center justify-between'), { backgroundColor: colors.bg[mode] }]}>

            <Pressable onPress={() => navigation.toggleDrawer()}>
                <MenuIcon size={24} color={colors.text[mode]} />
            </Pressable>

            <SearchInput />

            <ModalProvider>
                <ToggleModal>
                    <UserIcon size={24} color={colors.text[mode]} />

                    <MyModal>
                        <View style={[tailwind('absolute right-1 top-12 bg-white py-4 px-8 rounded-lg '), { backgroundColor: colors.bg[mode] }]} >
                            {
                                uid != null &&
                                <View>
                                    <Text style={typography.h6}>{uid}</Text>
                                    <Pressable style={[tailwind('py-2'),]} onPress={() => navigation.navigate('Profile')}>
                                        <Text style={{ color: colors.text[mode] }}>Profile</Text>
                                    </Pressable>

                                    <Pressable style={[tailwind('py-2'),]} onPress={() => logout()}>
                                        <Text style={{ color: colors.text[mode] }}>Sign out</Text>
                                    </Pressable>
                                </View>

                            }
                            {
                                uid === null &&
                                <View>
                                    <Pressable style={[tailwind('py-2'),]} onPress={() => navigation.navigate('Signin')}>
                                        <Text style={{ color: colors.text[mode] }}>Sign in</Text>
                                    </Pressable>

                                    <Pressable style={[tailwind('py-2'), {}]} onPress={() => navigation.navigate('Signup')}>
                                        <Text style={{ color: colors.text[mode] }}>Sign up</Text>
                                    </Pressable>
                                </View>
                            }

                        </View>
                    </MyModal>
                </ToggleModal>
            </ModalProvider>


        </View>
    )
}

