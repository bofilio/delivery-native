import { isLoading } from 'expo-font'
import React, { useContext, useEffect } from 'react'
import { Pressable, View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { firebaseAuth } from '../../api/firebase'
import { AlertContext, AuthenticationContext, ThemeContext } from '../../contexts'
import { ModalProvider, ToggleModal } from '../../contexts/ModalContext'
import { useAuth } from '../../hooks'
import { MenuIcon, UserIcon } from '../icons'
import { SearchInput } from '../inputs'
import { MyModal } from '../modals'
import { TransitionScreen } from '../util'


export const TopBar = ({ navigation }: any) => {
    const { state,user, dispatch } = useAuth(firebaseAuth);

    async function logout() {
        await dispatch('signout');
    }
    const { setAlert } = useContext(AlertContext)
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    useEffect(() => {
        setAlert({ status: 'danger', message: state.errormsg })
    }, [state.errormsg != null])

    if (state.isloading) {
        return (
            <TransitionScreen />
        )
    }
    return (
        <View style={[tailwind('px-4 py-3 flex flex-row items-center justify-between'), { backgroundColor: colors.bg[mode] }]}>

            <Pressable onPress={() => navigation.toggleDrawer()}>
                <MenuIcon size={24} color={colors.text[mode]} />
            </Pressable>

            <SearchInput />

            <ModalProvider>
                <ToggleModal>
                    <UserIcon size={24} color={colors.text[mode]} />
                </ToggleModal>
                <MyModal>
                    <View style={[tailwind('absolute right-1 top-12 bg-white py-4 px-8 rounded-lg '), { backgroundColor: colors.bg[mode] }]} >
                        {
                            user != null &&
                            <View>
                                <Text style={typography.h6}>{user.displayName || user.email}</Text>
                                <Pressable style={[tailwind('py-2'),]} onPress={() => navigation.navigate('Profile')}>
                                    <Text style={{ color: colors.text[mode] }}>Profile</Text>
                                </Pressable>

                                <Pressable style={[tailwind('py-2'),]} onPress={() => logout()}>
                                    <Text style={{ color: colors.text[mode] }}>Sign out</Text>
                                </Pressable>
                            </View>

                        }
                        {
                            !user  &&
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

            </ModalProvider>


        </View>
    )
}

