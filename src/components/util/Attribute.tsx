import React, { FC, useContext } from 'react'
import { View,Text } from 'react-native'
import tailwind from 'tailwind-rn';
import { ThemeContext } from '../../contexts';

export const Attribute:FC<{icon:JSX.Element, value:string}> = ({icon, value}) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={tailwind('flex flex-row items-center mr-2 mb-1')}>
            {icon}
            <Text style={[typography.xs, { color: colors.text.gray }]}>{value}</Text>
        </View>
    )
}
