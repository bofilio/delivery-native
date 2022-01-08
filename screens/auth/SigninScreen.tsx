import React, { useContext } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import tailwind from 'tailwind-rn';
import { Banner, Logo, MyStatusBar, Space } from '../../components/util';
import { ThemeContext } from '../../contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthInput, Button } from '../../components/inputs';

import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../Navigator';

type Props = NativeStackScreenProps<RootStackParamList, 'Signin'>;

export const SigninScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    return (
        <Pressable onLongPress={() => setTheme({ ...theme, mode: mode === "dark" ? 'light' : 'dark' })}>
            <MyStatusBar/>
            <KeyboardAvoidingView style={[{ backgroundColor: colors.bg[mode] }, tailwind('h-full')]} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled  >
                <ScrollView>
                    <Banner />

                    <View style={tailwind('flex px-8 py-2')}>
                        <Text style={[typography.h2, { color: colors.text[mode] }]}>Welcome! </Text>
                        <Text style={[typography.h5, { color: colors.text['gray'] }]}>Sign in to your account to continue</Text>
                        <View style={tailwind("mt-6")}>
                            <AuthInput label='Email adress' icon_name='email-outline' placeHolder='Enter your Email Adress' />
                            <Space direction='h' size={16} />
                            <AuthInput type='password' label='Password' icon_name='email-outline' placeHolder='Enter your Password' />
                        </View>
                        <Space direction='h' size={32} />
                        <View >
                            <Button text='Sign in' text_color={colors.primary[mode]} bg_color={colors.primary.transparent} />
                            <Space direction='h' size={8} />
                            <Button text='forget password?' text_color={colors.text.gray} onPress={() => navigation.navigate('ForgotPass')} />
                            <Space direction='h' size={8} />
                            <Button text='Create an account' text_color={colors.text.dark} bg_color={colors.primary[mode]}
                                onPress={() => navigation.navigate('Signup')} />
                        </View>
                    </View>
                    <Space direction='h' size={50} />
                </ScrollView>
            </KeyboardAvoidingView>


        </Pressable>

    )


}

////// Nb: longPRes any screen to toggle theme mode to (dark | light )


