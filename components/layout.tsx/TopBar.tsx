import { MaterialCommunityIcons } from '@expo/vector-icons'
import React, { useContext } from 'react'
import { Pressable, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { Button } from '../inputs'


export const TopBar = ({navigation}:any) => {

    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={[tailwind('px-4 py-3 flex flex-row items-center'),{backgroundColor:colors.bg[mode]}]}>

            <Pressable onPress={() => navigation.toggleDrawer()}>
                <MaterialCommunityIcons name='menu' size={24} color={colors.text[mode]} />
            </Pressable>

        </View>
    )
}
