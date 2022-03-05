import React, { useContext } from 'react'
import { ScrollView, Text, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TabulationProvider, ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';
import { Tab, TabContent } from '../../components/menus';
import { Space } from '../../components/util';


type Props = DrawerScreenProps<RootDrawerParamList, 'Favourite'>;

export const FavouriteScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>
                <View style={tailwind('py-8 mb-16')}>
                    <TabulationProvider>
                        <View style={tailwind("flex flex-row items-center")}>
                            <Tab id={1} title={'Dishes'} />
                            <Space direction='v' size={4}/>
                            <Tab id={2} title={'Restaurants'} />
                        </View>
                        <View>
                            <TabContent id={1}>
                                <Text>dishes</Text>
                            </TabContent>
                            <TabContent id={2} >
                                <Text>restaurants</Text>
                            </TabContent>
                        </View>

                    </TabulationProvider>
                </View>
            </ScrollView>

        </SafeAreaView>

    )
}