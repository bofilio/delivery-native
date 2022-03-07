import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ExploreScreen, FavouriteScreen, ForgotPassScreen, HomeScreen, OrdersScreen, SettingsScreen, SigninScreen, SignupScreen } from '../screens';
import { ChatStack } from './chat_stack'
import { NavigationContainer } from '@react-navigation/native';
import { AdditionalDrawerContent } from '../components/menus';
import { ThemeContext } from '../contexts';
import { Alert } from '../components/util';
import { TopBar } from '../components/layout.tsx';



/** undefined means the screens dont recieve params */

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export function Navigation() {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    
    return (
        <NavigationContainer>
            <Alert/>
            <Drawer.Navigator
                screenOptions={{
                    headerShown: false,
                    drawerStyle: { width: '80%', backgroundColor: colors.bg[mode] },
                }}
                initialRouteName="Home"
                drawerContent={(props) => <AdditionalDrawerContent {...props} />}

            >
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name='Explore' component={ExploreScreen} />
                <Drawer.Screen name="Favourite" component={FavouriteScreen} />
                <Drawer.Screen name='Orders' component={OrdersScreen} />
                <Drawer.Screen name='Chat' component={ChatStack} />
                <Drawer.Screen name='Settings' component={SettingsScreen} />
                <Drawer.Group >
                    <Drawer.Screen name="Signin" component={SigninScreen} options={{ drawerItemStyle: { display: 'flex' } }} />
                    <Drawer.Screen name="Signup" component={SignupScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="ForgotPass" component={ForgotPassScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                   
                </Drawer.Group>
            </Drawer.Navigator>
            
        </NavigationContainer>


    );
}

export type RootDrawerParamList = {
    Home: undefined;
    Signin: undefined;
    Signup: undefined;
    ForgotPass: undefined;
    Explore:undefined;
    Category: undefined;
    Restaurant:undefined;
    Search:undefined;
    Settings:undefined;
    Chat:undefined;
    Favourite:undefined;
    Orders:undefined;
  };


