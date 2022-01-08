import React, { useContext } from 'react'
import { View, Text, TextInput } from 'react-native';
import tailwind from 'tailwind-rn';
import { ThemeContext } from '../../contexts';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Space } from '../util';

type AuthInputProps={
    label:string,
    placeHolder?:string,
    icon_name:any,
    type?:'password'|'email'|'text'
}

export const AuthInput = ({label,placeHolder="",icon_name,type='text'}:AuthInputProps) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const {mode, colors, typography}=theme;


    return (
        <View style={tailwind('flex flex-row')}>
            <View style={[tailwind('p-5  rounded-xl '), { backgroundColor: colors.primary.transparent }]}>
                <MaterialCommunityIcons name={icon_name} size={24} color={colors.primary[mode]} />
            </View>
            <Space direction='v' size={16}/>
            <View style={[tailwind("flex-grow flex border-b justify-around"), { borderColor: colors.border[mode] }]}>
                <Text style={[typography.inputLabel, { color: colors.text[mode] }]}>{label}</Text>
                <TextInput secureTextEntry={type==='password'} placeholder={placeHolder} style={[tailwind('flex-grow'), { color: colors.text[mode] }]} placeholderTextColor={colors.text.gray} />
            </View>
        </View>
    )
}


