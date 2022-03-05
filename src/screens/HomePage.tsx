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
import { CategoriesList, Food, Restaurant } from '../components/content';
import { categories } from '../data';


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
                    <ScrollView showsHorizontalScrollIndicator={false} horizontal>
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
                        <Food 
                            name="Spicy Na Thai Town" 
                            imageUrl="https://i.ytimg.com/vi/6zNQ9TX5qiU/maxresdefault.jpg"
                            totalRating={1125}
                            ratingAvg={4.8}
                            category="dish"
                            timeDelivery="45 - 50 min"
                        />
                        <Space size={8} />
                        <Food 
                            name="Chicken Burger" 
                            imageUrl="https://3.bp.blogspot.com/-0tXqH7hJkMA/Xzm0tUlchgI/AAAAAAABUEE/_IHEjknPQVAqVhJYkjyLH7LxG1obagESwCLcBGAsYHQ/s660/burger-de-poulet-frit-fried-chicken-burger.jpg"
                            totalRating={854}
                            ratingAvg={4.5}
                            category="burger"
                            timeDelivery="30 - 40 min"
                        />
                        <Space size={8} />
                        <Food 
                            name="Double Viande" 
                            imageUrl="https://media-mcetv.ouest-france.fr/wp-content/uploads/2018/10/Un-restaurant-sert-un-burger-XXL-avec-27kg-de-viande-small.jpg"
                            totalRating={1263}
                            ratingAvg={4.7}
                            category="burger"
                            timeDelivery="35 - 45 min"
                        />
                    </View>
                </View>


            </ScrollView>
        </SafeAreaView>

    )
}