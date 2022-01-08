import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { ThemeProvider } from './contexts';
import { SafeAreaView } from 'react-native-safe-area-context';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer';
import { ForgotPassScreen, HomeScreen, SigninScreen, SignupScreen } from './screens';
import { NavigationContainer } from '@react-navigation/native';
import { RootDrawerParamList } from './screens/types';
import { AdditionalDrawerContent } from './components/menus';



/** undefined means the screens dont recieve params */

const Drawer = createDrawerNavigator<RootDrawerParamList>();

export default function App() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home" drawerContent={(props) => <AdditionalDrawerContent {...props} />}>
          <Drawer.Screen name="Home" component={HomeScreen} />
          <Drawer.Screen name="Signin" component={SigninScreen} />
          <Drawer.Screen name="Signup" component={SignupScreen} />
          <Drawer.Screen name="ForgotPass" component={ForgotPassScreen} />
        </Drawer.Navigator>
      </NavigationContainer>
    </ThemeProvider>

  );
}


