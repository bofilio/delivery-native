import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../types';


type Props = DrawerScreenProps<RootDrawerParamList, 'Settings'>;

export const SettingsScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <View style={tailwind("flex h-full bg-red-400 justify-center items-center")}>
                <Text style={typography.h3}>Settings Screen</Text>
            </View>
        </SafeAreaView>

    )
}