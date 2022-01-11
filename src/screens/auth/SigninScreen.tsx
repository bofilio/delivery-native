import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text,  KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import tailwind from 'tailwind-rn';
import { Banner, Space, TransitionScreen } from '../../components/util';
import { AlertContext, ThemeContext } from '../../contexts';
import { AuthInput, Button } from '../../components/inputs';
import { RootDrawerParamList } from '../../navigation';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useAuth } from '../../hooks';
import { SafeAreaView } from 'react-native-safe-area-context';
import { firebaseAuth } from '../../api/firebase';

type Props = DrawerScreenProps<RootDrawerParamList, 'Signin'>;
type signInProps = {
    email: string,
    password: string,
}
export const SigninScreen = ({ navigation }: Props) => {
    /**ThemeProvider */
    const { theme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    /**AlertProvider  */
    const { setAlert } = useContext(AlertContext)

    /** update input data with state */
    const [inputs, setInputs] = useState({ email: '', password: '' } as signInProps)

    /**Authentication Hook */
    const { state,user, dispatch } = useAuth(firebaseAuth);
    const { isloading, errormsg } = state;
    async function signIn() {
        await dispatch('signin', { email: inputs.email, password: inputs.password })
    }

    /**Side Effects */
    useLayoutEffect(() => {
        if (user) {
            setAlert({ status: undefined, message: null })
            navigation.navigate('Home')
        }
        if (errormsg) {
            setAlert({ status: 'danger', message: state.errormsg })
        }
    }, [user, errormsg])

    /**Ui*/

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
                        <Text style={[typography.h2, { color: colors.text[mode] }]}>Welcome! </Text>
                        <Text style={[typography.h5, { color: colors.text['gray'] }]}>Sign in to your account to continue</Text>
                        <View style={tailwind("mt-6")}>
                            <AuthInput
                                onChangeText={(text) => setInputs({ ...inputs, email: text })}
                                label='Email adress' icon_name='email-outline' placeHolder='Enter your Email Adress'
                            />

                            <Space direction='h' size={16} />
                            <AuthInput
                                onChangeText={(text) => setInputs({ ...inputs, password: text })}
                                type='password' label='Password' icon_name='email-outline' placeHolder='Enter your Password'
                            />

                        </View>
                        <Space direction='h' size={32} />
                        <View >
                            <Button
                                text='Sign in'
                                text_color={colors.text.dark} bg_color={colors.primary[mode]}
                                
                                onPress={() => signIn()}

                            />
                            <Space direction='h' size={8} />
                            <Button text='forget password?' text_color={colors.text.gray} onPress={() => navigation.navigate('ForgotPass')} />
                            <Space direction='h' size={8} />
                            <Button text='Create an account' text_color={colors.primary[mode]} bg_color={colors.primary.transparent}
                                onPress={() => navigation.navigate('Signup')} />
                        </View>
                    </View>
                    <Space direction='h' size={50} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )



}

////// Nb: longPRes any screen to toggle theme mode to (dark | light )


