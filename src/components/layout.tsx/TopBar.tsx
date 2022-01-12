import { isLoading } from 'expo-font'
import React, { useContext, useEffect } from 'react'
import { Pressable, View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { firebaseAuth } from '../../api/firebase'
import { AlertContext, AuthenticationContext, ThemeContext } from '../../contexts'
import { ModalProvider, OpenModal, CloseModal } from '../../contexts/ModalContext'
import { useAuth } from '../../hooks'
import { MenuIcon, SigninIcon, SignoutIcon, SignupIcon, UserIcon } from '../icons'
import { SearchInput } from '../inputs'
import { MyModal } from '../modals'
import { MyPressable, Space, TransitionScreen } from '../util'
import { Circle } from '../util/Circle'


export const TopBar = ({ navigation }: any) => {
    const { state, user, dispatch } = useAuth(firebaseAuth);

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
                <OpenModal>
                    <View style={tailwind('flex flex-row items-center')}>
                        <UserIcon size={24} color={colors.text[mode]} />
                        <Space direction='v' size={2} />
                        {user != null && <Circle color={colors.success[mode]} size={8} />}
                    </View>
                </OpenModal>
                <MyModal>

                    <View style={[tailwind('absolute right-1 top-12 px-4 bg-white py-4  w-44  rounded-lg '), { backgroundColor: colors.bg[mode] }]} >
                        {
                            user != null &&
                            <View>
                                <Text style={[typography.h6, { color: colors.text[mode] }]}>{user.displayName || user.email}</Text>
                                <CloseModal onPress={() => navigation.navigate('Profile')}>
                                    <View style={[tailwind('py-2 flex w-full'),]} >
                                        <Text style={{ color: colors.text[mode] }}>Profile</Text>
                                    </View>
                                </CloseModal>

                                <Pressable style={[tailwind('py-2'),]} >
                                    <Text style={{ color: colors.text[mode] }}>Sign out</Text>
                                </Pressable>
                                <CloseModal onPress={() => logout()} >
                                    <View style={[tailwind('py-3 flex w-full flex-row items-center '),]} >
                                        <SignoutIcon />
                                        <Text style={[tailwind('ml-4'), typography.inputLabel, { color: colors.text[mode] }]}>Sign out</Text>
                                    </View>
                                </CloseModal>
                            </View>

                        }
                        {
                            !user &&
                            <View>
                                <CloseModal onPress={() => navigation.navigate('Signin')} >
                                    <View style={[tailwind('py-3 flex w-full flex-row items-center '),]} >
                                        <SigninIcon />
                                        <Text style={[tailwind('ml-4'), typography.inputLabel, { color: colors.text[mode] }]}>Sign in</Text>
                                    </View>
                                </CloseModal>
                                <CloseModal onPress={() => navigation.navigate('Signup')}>
                                    <View style={[tailwind('py-3 flex w-full flex-row items-center'), {}]} >
                                        <SignupIcon />
                                        <Text style={[tailwind('ml-4'), typography.inputLabel, { color: colors.text[mode] }]}>Sign up</Text>
                                    </View>
                                </CloseModal>
                            </View>
                        }

                    </View>


                </MyModal>

            </ModalProvider>


        </View>
    )
}

