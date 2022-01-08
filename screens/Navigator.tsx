import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ForgotPassScreen, SigninScreen } from '.';
import { SignupScreen } from '.';
import { HomeScreen } from '.';
import { ThemeContext } from '../contexts';
import { MyStatusBar } from '../components/util';


/** undefined means the screens dont recieve params */
export type RootStackParamList = {
    Home: undefined;
    Signin: undefined;
    Signup: undefined;
    ForgotPass:undefined
};
const Stack = createNativeStackNavigator<RootStackParamList>();


export const Navigator = () => {
    const { theme, setTheme } = React.useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
                
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Signin" component={SigninScreen} />
                <Stack.Screen name="Signup" component={SignupScreen} />
                <Stack.Screen name="ForgotPass" component={ForgotPassScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
