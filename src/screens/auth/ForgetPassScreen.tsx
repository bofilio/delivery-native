import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import tailwind from 'tailwind-rn';
import { Banner, Logo, MyStatusBar, Space, TransitionScreen } from '../../components/util';
import { AlertContext, ThemeContext } from '../../contexts';
import { AuthInput, Button } from '../../components/inputs';
import { RootDrawerParamList } from '../../navigation';
import { useFireBaseAuth } from '../../hooks';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';

type Props = DrawerScreenProps<RootDrawerParamList, 'ForgotPass'>;


export const ForgotPassScreen = ({ route, navigation }: Props) => {
    /**get the theme object  */
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    /**AlertProvider  */
    const { alert, setAlert } = useContext(AlertContext)
    /** update input data with state */
    const [email, setEmail] = useState('')

    /**Authentication Hook */
    const { state, performAction } = useFireBaseAuth();
    const { isloading, data: uid, errormsg } = state;
    async function SendResetPasswordEmail() {
        await performAction('send_reset_password_email', { email: email })
    }

    /**Side Effects */
    useLayoutEffect(() => {
        if (errormsg) {
            setAlert({ status: 'danger', message: state.errormsg })
        }
    }, [errormsg])

    /**Ui */

    if (isloading) {
        return (
            <TransitionScreen />
        )
    }

    return (
        <SafeAreaView>
            <KeyboardAvoidingView style={[{ backgroundColor: colors.bg[mode] }, tailwind('h-full')]} behavior={Platform.OS === "ios" ? "padding" : "height"} enabled  >
                <ScrollView>
                    <Banner />
                    <View style={tailwind('flex px-8 py-2')}>
                        <Text style={[typography.h2, { color: colors.text[mode] }]}>Forget password? </Text>
                        <Space direction='h' size={8} />
                        <Text style={[typography.h5, { color: colors.text['gray'] }]}>Please enter your email address to continue </Text>
                        <Space direction='h' size={32} />
                        <View style={tailwind("mt-6")}>
                            <AuthInput
                                onChangeText={(text) => setEmail(text)}
                                label='Email adress' icon_name='email-outline' placeHolder='Enter your Email Adress'
                            />
                        </View>
                        <Space direction='h' size={32} />
                        <View >
                            <Button
                                text='Continue'
                                text_color={colors.text.dark}
                                bg_color={colors.primary[mode]}
                                onPress={() => SendResetPasswordEmail()}
                                disabled={!email}
                            />
                        </View>
                        <Space direction='h' size={16} />
                        <View >
                            <Button
                                text='Signin'
                                text_color={colors.text[mode]}
                                bg_color={colors.primary.transparent}
                                onPress={() => navigation.navigate('Signin')}

                            />
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>

    )


}

////// Nb: longPRes any screen to toggle theme mode to (dark | light )


