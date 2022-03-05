import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../contexts';
import { TopBar } from '../components/layout.tsx';
import { RootDrawerParamList } from '../navigation';
import { FoodIcon, StoreIcon } from '../components/icons';
import { SectionHeader, Space } from '../components/util';
import { Category } from '../components/menus/Category';
import { CategoriesList, Food, Restaurant, FeaturedRestaurantList, FeaturedDishes } from '../components/content';


type Props = DrawerScreenProps<RootDrawerParamList, 'Home'>;

export const HomeScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>
                <View style={tailwind('py-4 mb-16')}>
                    <SectionHeader title="Explore Categories" />
                    <Space size={8} />
                    <CategoriesList />
                    <Space size={24} />
                    <SectionHeader title="Featured restaurants" />
                    <Space size={8} />
                    <FeaturedRestaurantList/>
                    <Space size={24} />
                    <SectionHeader title="Featured Recipies" />
                    <Space size={8} />
                   <FeaturedDishes/>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}