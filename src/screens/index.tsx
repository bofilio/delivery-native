import React, { useContext } from 'react'
import { Image, Pressable, ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../contexts';
import { TopBar } from '../components/layout.tsx';
import { RootDrawerParamList } from '../navigation';
import { ArrowRightIcon, CashIcon, FoodIcon, MotoCycleIcon, MyLocationIcon, StarIcon, StoreIcon } from '../components/icons';
import { Attribute, SectionHeader, Space } from '../components/util';
import { Category } from '../components/menus/Category';
import { Badge } from '../components/util/Badge';
import { Food, Restaurant } from '../components/content';


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
                    <ScrollView horizontal>
                        <View style={tailwind('flex flex-row px-2')}>

                            <Category icon={<StoreIcon size={28} color={colors.text.dark} />} name='Pick up' color={colors.primary[mode]} />
                            <Space direction='v' size={12} />
                            <Category icon={<FoodIcon size={28} color={colors.text.dark} />} name='Dign in' color={colors.secondary[mode]} />
                            <Space direction='v' size={12} />
                            <Category icon={<StoreIcon size={28} color={colors.text.dark} />} name='Hight Class' color={colors.warning[mode]} />
                            <Space direction='v' size={12} />
                            <Category icon={<StoreIcon size={28} color={colors.text.dark} />} name='Pick up' color={colors.danger[mode]} />
                            <Space direction='v' size={12} />
                            <Category icon={<StoreIcon size={28} color={colors.text.dark} />} name='Pick up' color={colors.success[mode]} />
                        </View>
                    </ScrollView>

                    <Space size={24} />

                    <SectionHeader title="Featured restaurants" />
                    <Space size={8} />
                    <ScrollView horizontal>
                        <View style={tailwind('flex flex-row px-2')}>
                            <Restaurant />
                            <Restaurant />
                            <Restaurant />
                        </View>
                    </ScrollView>

                    <Space size={24} />
                    <SectionHeader title="Featured Recipies" />
                    <Space size={8} />
                    <View>
                        <Food />
                        <Space size={8} />
                        <Food />
                        <Space size={8} />
                        <Food />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}
export * from './auth'
export * from './chat'
export * from './explore'
export * from './favourite'
export * from './orders'
export * from './search'
export * from './settings'