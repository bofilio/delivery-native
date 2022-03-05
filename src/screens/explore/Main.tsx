import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';
import { SectionHeader, Space } from '../../components/util';
import { NearbyRestaurants, PopularDishes } from '../../components/content';


type Props = DrawerScreenProps<RootDrawerParamList, 'Explore'>;

export const ExploreScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>
                <View style={tailwind('py-8 mb-16')}>
                    <SectionHeader title="Restaurants nearby" />
                    <Space size={12} />
                    <NearbyRestaurants />
                    <Space size={24} />
                    <SectionHeader title="Popular orders" />
                    <Space size={12} />
                    <PopularDishes />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}