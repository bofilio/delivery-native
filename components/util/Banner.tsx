import React from 'react'
import { View, Text, Image, ImageBackground, StyleSheet, Pressable, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native'; 7
import tailwind from 'tailwind-rn';
import { Space } from './Space';
import { Logo } from './Logo';
const banner_img = require('../../assets/img/banner.png')
export const Banner = () => {
    return (
        <>
            <ImageBackground style={tailwind('h-48 rounded-full flex items-center justify-center ')}
                imageStyle={{ borderBottomLeftRadius: 22, borderBottomRightRadius: 22 }}
                source={(banner_img)}
            >
                <Logo variant='lg' includeText />
            </ImageBackground>
            <Space direction='h' size={8} />
        </>

    )
}
