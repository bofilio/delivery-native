import React, { useContext } from 'react'
import { ActivityIndicator, View } from 'react-native';
import tailwind from 'tailwind-rn';
import { ThemeContext } from '../../contexts';

export const TransitionScreen = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors } = theme;
    return (
        <View style={[tailwind('flex w-full h-full justify-center items-center'),{backgroundColor:colors.bg[mode]}]}>
            <ActivityIndicator size='large' color={colors.primary[mode]} />
        </View>
    )
}
