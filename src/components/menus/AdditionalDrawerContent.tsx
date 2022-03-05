import React, { useContext, useEffect, useMemo, useState } from "react";
import { DrawerContentScrollView, DrawerItem, DrawerItemList, DrawerContentComponentProps } from "@react-navigation/drawer";
import { Logo, Space, TransitionScreen } from "../util";
import { View, Text, Pressable, Switch } from "react-native";
import tailwind from 'tailwind-rn'
import { ChatIcon, ExploreIcon, FavouriteIcon, HomeIcon, OrdersIcon, SettingsIcon, SignoutIcon } from "../icons";
import { AlertContext, ThemeContext } from "../../contexts";
import { useAuth } from "../../hooks";
import { firebaseAuth } from "../../api/firebase";

export function AdditionalDrawerContent(props: DrawerContentComponentProps) {
    const { navigation, state } = props
    /**theme */
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    /**auth */
    const { state: authState, user, dispatch } = useAuth(firebaseAuth);
    async function logout() {
        await dispatch('signout');
    }
    /**alert */
    const { setAlert } = useContext(AlertContext)
    /**Effects */
    useEffect(() => {
        setAlert({ status: 'danger', message: authState.errormsg })
    }, [authState.errormsg != null])

    if (authState.isloading) {
        return (
            <TransitionScreen />
        )
    }
    return (    
            <DrawerContentScrollView {...props}>
    
                <View style={tailwind('p-2 flex flex-row justify-between items-center')}>
                    <Logo variant="sm" includeText={true} />
                    {
                        user != null &&
                        <Pressable onPress={() => logout()}>
                            <SignoutIcon size={24} color={colors.text[mode]} />
                        </Pressable>
                    }
    
    
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
    
                <View style={tailwind('flex flex-row items-center p-6')}>
                    <Text style={{ color: colors.text[mode] }}>
                        Switch Mode
                    </Text>
                    <Space direction="v" size={32} />
    
                    <Switch
                        trackColor={{ false: colors.text.gray, true: colors.primary[mode] }}
                        thumbColor={mode === 'dark' ? colors.secondary[mode] : colors.text.dark}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => setTheme({ ...theme, mode: mode === 'dark' ? 'light' : 'dark' })}
                        value={mode === 'dark'}
                    />
                    <Space direction="v" size={4} />
                    <Text style={{ color: colors.text[mode] }}>
                        {mode}
                    </Text>
    
                </View>
    
    
            </DrawerContentScrollView>
        )
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