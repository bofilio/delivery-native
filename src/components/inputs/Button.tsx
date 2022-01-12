import React, { useContext } from 'react'
import { Pressable,Text } from 'react-native'
import { color } from 'react-native-reanimated'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
type ButtonProps={
    text:string,
    bg_color?:string,
    text_color:string,
    onPress?:()=>void,
    style?:{},
    disabled?:boolean,
}
export const Button: React.FC<ButtonProps> = (props) => {
    const {text,bg_color="",text_color,onPress, style= tailwind(' w-full '),disabled} = props;
    const { theme, setTheme } = useContext(ThemeContext)
   
    return (
        <Pressable disabled={disabled}  android_ripple={{color: theme.colors.ripple, borderless: false,}}  onPress={onPress} style={[{backgroundColor:bg_color}, tailwind("flex items-center rounded-lg p-4 justify-center"),style ]}>
            <Text style={[{color:text_color}]} > {text} </Text>
        </Pressable>
    )
}


