import React from 'react'
import { View, Image, Text } from 'react-native'
import tailwind from 'tailwind-rn'
const logoimg = require('../../assets/img/hamburger.png')


type LogoType = {
    variant: "sm" | "lg",
    includeText?: boolean,
}
export const Logo = ({ variant, includeText = true }: LogoType) => {
    let logosize = "w-10 h-8  mr-2" 
    
    
    switch (variant){
        case 'sm': break;  
        case 'lg':
            logosize='w-20 h-16 mr-2'
            break
        default: break;

}
return (
    <View style={tailwind('flex flex-row items-center ')} >
        <Image style={tailwind(logosize)} source={logoimg} resizeMode='contain' />
        {includeText && <Text style={tailwind('text-xl text-white')}>Nibble</Text>}
    </View>
)
    
}

