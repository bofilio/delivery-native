import React, { useContext, useLayoutEffect, useState } from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import tailwind from 'tailwind-rn';
import { Banner, Logo, MyStatusBar, Space, TransitionScreen } from '../../components/util';
import { AlertContext, ThemeContext } from '../../contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { AuthInput, Button } from '../../components/inputs';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootDrawerParamList } from '../types';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { useFireBaseAuth } from '../../hooks';


type Props = DrawerScreenProps<RootDrawerParamList, 'Signup'>;
type signUpProps = {
    email: string,
    password: string,
    name?: string
}
export const SignupScreen = ({ route, navigation }: Props) => {
    /**theme */
    const { theme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    /** update input data with state */
    const [inputs, setInputs] = useState({ email: '', password: '', name: '' } as signUpProps)
    /**Authentication Hook */
    const { state, performAction } = useFireBaseAuth();
    const { isloading, data: uid, errormsg } = state
    async function signUp() {
        await performAction('signup', { email: inputs.email, password: inputs.password, name: inputs.name })
    }
    /**AlertProvider  */
    const {alert,setAlert} = useContext(AlertContext)

    /**Side Effects */
    useLayoutEffect(() => {
        if(uid){
            setAlert({status:undefined, message:null})
            navigation.navigate('Home')
        }
        if(errormsg){
            setAlert({status:'danger', message:state.errormsg})
        }
    }, [uid,errormsg])

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
                        <Text style={[typography.h2, { color: colors.text[mode] }]}>Create an account </Text>
                        <View style={tailwind("mt-6")}>
                            <AuthInput
                                onChangeText={(text) => setInputs({ ...inputs, name: text })}
                                label='Full name' icon_name='email-outline' placeHolder='Enter your Email Adress'

                            />
                            <Space direction='h' size={16} />
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
                                text='Create an account'
                                text_color={colors.text.dark}
                                bg_color={colors.primary[mode]}
                                onPress={() => signUp()}
                            />
                            <Space direction='h' size={24} />
                            <View style={tailwind('flex flex-row items-center justify-center')}>
                                <Text style={[{ color: colors.text.gray }]}>
                                    Already have an account?
                                </Text>
                                <Space direction='v' size={4} />
                                <Button
                                    text=' Sign in'
                                    style={tailwind('p-0')}
                                    text_color={colors.secondary[mode]}
                                    onPress={() => navigation.navigate('Signin')}
                                />
                            </View>
                        </View>
                    </View>
                    <Space direction='h' size={50} />
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    )


}

////// Nb: longPRes any screen to toggle theme mode to (dark | light )


