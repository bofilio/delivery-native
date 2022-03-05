import React, { FC, useContext } from 'react'
import { Pressable, View , Text} from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { categoryType } from '../../types'
import { Space } from '../util'


export const Category:FC<categoryType> = (props) => {
    const {icon,name,color}=props
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <Pressable 
            style={[tailwind(`w-24 p-4 items-center rounded-lg ${(mode === 'dark') ? 'bg-gray-700' : 'bg-gray-200'} `)]}
            onPress={() => { }}
            android_ripple={{ color: colors.ripple, borderless: false, }}
        >
            <View style={[tailwind('w-12 h-12 items-center justify-center rounded-lg'),{backgroundColor:color}]}>
                {icon}
            </View>
            <Space size={4} />
            <Text style={[typography.h8, { color: colors.text[mode] }]}>{name}</Text>
            <Text style={[typography.xs, { color: colors.text.gray }]}>253+ options </Text>
        </Pressable>
    )
}