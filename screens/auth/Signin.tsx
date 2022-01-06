import React, { useContext } from 'react'
import { View,Text, Image, ImageBackground, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { Logo } from '../../components/util';
import { ThemeContext } from '../../contexts';
const banner_img = require('../../assets/img/banner.png')
export const Signin = () => {
    const { theme, dispatch } = useContext(ThemeContext)
    return (
        <View style={{backgroundColor:theme.colors.bg[theme.mode]}, tailwind('h-full')}> 

            <ImageBackground style={tailwind('h-72 rounded-full flex items-center justify-center ')}
                imageStyle={{ borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}
                source={(banner_img)} 
            >
                <Logo variant='sm' includeText />
            </ImageBackground>
            <View style={tailwind('flex px-8 py-2')}>
                <Text style={[theme.typography.h1,{color:theme.colors.text[theme.mode]}]}> Welcome! </Text>
                <Text style={[theme.typography.h5,{color:theme.colors.text['gray']}]}> Sign in to your account to continue </Text>
            </View>

        </View>
    )


}



