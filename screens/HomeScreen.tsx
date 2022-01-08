import React, { useContext } from 'react'
import { Pressable, ScrollView, Text } from 'react-native'
import { Button } from '../components/inputs'
import tailwind from 'tailwind-rn'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../contexts';
import { TopBar } from '../components/layout.tsx';
import { RootDrawerParamList } from './types';


type Props = DrawerScreenProps<RootDrawerParamList, 'Home'>;

export const HomeScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation}/>
            <ScrollView style={tailwind('flex h-full bg-red-400')}>
                
            </ScrollView>
        </SafeAreaView>

    )
}
