import React, { FC, useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { ArrowRightIcon } from '../icons'


export const SectionHeader: FC<{ title: string, navigateTo?: string, navigation?:any }> = ({ title, navigateTo,navigation }) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={tailwind('w-full flex flex-row justify-between items-center px-2')}>
            <Text style={[typography.h5, { color: colors.text[mode] }]}>
                {title}
            </Text>
            <Pressable style={[tailwind("flex flex-row items-center"),]} onPress={() => { }}>
                <Text style={[typography.h6, { color: colors.primary[mode] }]}>see all</Text>
                <ArrowRightIcon color={colors.primary[mode]} />
            </Pressable>
        </View>
    )
}
