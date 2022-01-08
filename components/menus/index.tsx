import React, { useContext } from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Logo, Space } from "../util";
import { View, Text, Pressable } from "react-native";
import tailwind from 'tailwind-rn'
import { ChatIcon, ExploreIcon, FavouriteIcon, HomeIcon, OrdersIcon, SettingsIcon, SignoutIcon } from "../icons";
import { ThemeContext } from "../../contexts";
export function AdditionalDrawerContent(props: DrawerContentComponentProps) {
    const { navigation, state } = props
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <DrawerContentScrollView {...props}>
            <View style={tailwind('p-2 flex flex-row justify-between items-center')}>
                <Logo variant="sm" includeText={true} />
                <Pressable onPress={() => { }}>
                    <SignoutIcon size={24} color={ colors.text[mode]}/>
                </Pressable>

            </View>
            <Space size={16} />

            {
                getMenuItems().map(item => (
                    <DrawerItem
                        key={item.key}
                        label={item.label}
                        onPress={() => navigation.navigate(item.screen)}
                        icon={item.icon} focused={state.routeNames[state.index] === item.label} 
                        activeBackgroundColor={colors.primary[mode]}
                        activeTintColor={colors.text.dark}
                        inactiveTintColor={colors.text[mode]}
                        />
                        
                ))
            }


        </DrawerContentScrollView>
    );
}


function getMenuItems() {
    return [
        {
            key: 0,
            label: 'Home',
            screen: 'Home',
            icon: HomeIcon
        },
        {
            key: 1,
            label: 'Explore',
            screen: 'Explore',
            icon: ExploreIcon
        },
        {
            key: 2,
            label: 'Favourite',
            screen: 'Favourite',
            icon: FavouriteIcon
        },
        {
            key: 3,
            label: 'Orders',
            screen: 'Orders',
            icon: OrdersIcon
        },
        {
            key: 4,
            label: 'Chat',
            screen: 'Chat',
            icon: ChatIcon
        },
        {
            key: 5,
            label: 'Settings',
            screen: 'Settings',
            icon: SettingsIcon
        },

    ]
}