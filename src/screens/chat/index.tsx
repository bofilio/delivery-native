import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';


type Props = DrawerScreenProps<RootDrawerParamList, 'Chat'>;

export const ChatScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <View style={tailwind("flex h-full bg-red-400 justify-center items-center")}>
                <Text style={typography.h3}>Chat Screen</Text>
            </View>
        </SafeAreaView>

    )
}