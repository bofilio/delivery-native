import React from 'react'
import { Pressable,Text,TouchableOpacity } from 'react-native'
import tailwind from 'tailwind-rn'
type ButtonProps={
    text:string,
    bg_color?:string,
    text_color:string,
    onPress?:()=>void,
    style?:{}
}
export const Button = ({text,bg_color="",text_color,onPress, style= tailwind(' w-full ')}:ButtonProps) => {
    return (
        <TouchableOpacity onPress={onPress} style={[{backgroundColor:bg_color}, tailwind("flex items-center rounded-lg p-4 justify-center"),style ]}>
            <Text style={[{color:text_color}]} > {text} </Text>
        </TouchableOpacity>
    )
}


