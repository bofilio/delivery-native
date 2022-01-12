import React, { FC, useContext } from 'react'
import { GestureResponderEvent, Pressable, PressableStateCallbackType, StyleProp, ViewStyle } from 'react-native'
import { ThemeContext } from '../../contexts'

type PressbaleProps={
    onPress:((event: GestureResponderEvent) => void) | null | undefined,
    onPressOut:((event: GestureResponderEvent) => void) | null | undefined,
    style?:StyleProp<ViewStyle> | ((state: PressableStateCallbackType) => StyleProp<ViewStyle>)

} 

export const MyPressable:FC<PressbaleProps> = (props) => {
    const {onPress,onPressOut,style,children}=props
    const { theme, setTheme } = useContext(ThemeContext)
    return (
        <Pressable style={style} onPressOut={onPressOut} onPress={onPress} android_ripple={{color: theme.colors.ripple, borderless: false,}}>
            {children}
        </Pressable>
    )
}
