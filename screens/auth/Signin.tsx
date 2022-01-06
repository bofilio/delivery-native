import React, { useContext } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import tailwind from 'tailwind-rn';
import { Logo, Space } from '../../components/util';
import { ThemeContext } from '../../contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthInput, Button } from '../../components/inputs';
const banner_img = require('../../assets/img/banner.png')


export const Signin = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    return (
        <Pressable onLongPress={() => setTheme({ ...theme, mode: mode === "dark" ? 'light' : 'dark' })}>
            <KeyboardAvoidingView  style={[{ backgroundColor: colors.bg[mode] }, tailwind('h-full')]} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled  >
                <ScrollView>
                    <ImageBackground style={tailwind('h-72 rounded-full flex items-center justify-center ')}
                        imageStyle={{ borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}
                        source={(banner_img)}
                    >
                        <Logo variant='lg' includeText />
                    </ImageBackground>

                    <View style={tailwind('flex px-8 py-2')}>
                        <Text style={[typography.h1, { color: colors.text[mode] }]}>Welcome! </Text>
                        <Text style={[typography.h5, { color: colors.text['gray'] }]}>Sign in to your account to continue</Text>
                        <View style={tailwind("mt-6")}>
                            <AuthInput label='Email adress' icon_name='email-outline' placeHolder='Enter your Email Adress' />
                            <Space direction='h' size={16} />
                            <AuthInput label='Password' icon_name='email-outline' placeHolder='Enter your Password' />
                        </View>
                        <Space direction='h' size={32} />
                        <View >
                            <Button text='Sign in' text_color={colors.primary[mode]} bg_color={colors.primary.transparent} />
                            <Space direction='h' size={8} />
                            <Button text='forget password?' text_color={colors.text.gray}  />
                            <Space direction='h' size={8} />
                            <Button text='Create an account' text_color={colors.text.dark} bg_color={colors.primary[mode]} />
                        </View>
                    </View>
                    <Space direction='h' size={50} />
                </ScrollView>
            </KeyboardAvoidingView>
        </Pressable>

    )


}






////// Nb: longPRes any screen to toggle theme mode to (dark | light )


