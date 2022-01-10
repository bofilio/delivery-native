import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { View, Text, StyleSheet, StyleProp } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { ChatScreen, ExploreScreen, FavouriteScreen, ForgotPassScreen, HomeScreen, OrdersScreen, SettingsScreen, SigninScreen, SignoutScreen, SignupScreen } from '../screens';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerParamList } from '../screens/types';
import { AdditionalDrawerContent } from '../components/menus';
import { AlertContext, ThemeContext } from '../contexts';
import { Alert, MyStatusBar } from '../components/util';
import { SafeAreaView } from 'react-native-safe-area-context';



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
                <Drawer.Screen name='Chat' component={ChatScreen} />
                <Drawer.Screen name='Settings' component={SettingsScreen} />
                <Drawer.Group >
                    <Drawer.Screen name="Signin" component={SigninScreen} options={{ drawerItemStyle: { display: 'flex' } }} />
                    <Drawer.Screen name="Signup" component={SignupScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="ForgotPass" component={ForgotPassScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                    <Drawer.Screen name="Signout" component={SignoutScreen} options={{ drawerItemStyle: { display: 'none' } }} />
                </Drawer.Group>
            </Drawer.Navigator>
            
        </NavigationContainer>


    );
}

const styles=StyleSheet.create({
    item:{
        color:'red'
    }
})

