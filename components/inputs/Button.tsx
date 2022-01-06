import React from 'react'
import { Pressable,Text,TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
type ButtonProps={
    text:string,
    bg_color?:string,
    text_color:string,
    onPress?:()=>{},
}
export const Button = ({text,bg_color="",text_color,onPress}:ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{backgroundColor:bg_color}, tailwind('rounded-lg p-4 w-full flex items-center justify-center')]}>
            <Text style={[{color:text_color}]} > {text} </Text>
        </TouchableOpacity>
    )
}


