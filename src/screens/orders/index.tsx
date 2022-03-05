import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';
import { SectionHeader, Space } from '../../components/util';
import { UpComingOrderList } from '../../components/content';


type Props = DrawerScreenProps<RootDrawerParamList, 'Orders'>;

export const OrdersScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>
                <View style={tailwind('py-4 mb-16')}>
                    <SectionHeader title="Upcoming orders" />
                    <Space size={16} />
                    <UpComingOrderList/>
                    <Space size={24} />
                    <SectionHeader title="Previous orders" />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}