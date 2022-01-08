import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useContext, useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { MenuIcon, SearchIcon, UserIcon } from '../icons'
import { Button, SearchInput } from '../inputs'
import { Space } from '../util'


export const TopBar = ({ navigation }: any) => {
    
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={[tailwind('px-4 py-3 flex flex-row items-center justify-between'), { backgroundColor: colors.bg[mode] }]}>

            <Pressable onPress={() => navigation.toggleDrawer()}>
                <MenuIcon size={24} color={colors.text[mode]} />
            </Pressable>
            
            <SearchInput/>
            
            <Pressable onPress={() => {}}>
                <UserIcon size={24} color={colors.text[mode]} />
            </Pressable>

        </View>
    )
}
