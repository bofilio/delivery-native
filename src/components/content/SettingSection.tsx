import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts';
import { ForwardArrowIcon } from '../icons';
import { Space } from '../util';
import { color } from 'react-native-reanimated';

type SectionItemType={
    label: string,
    onPres: ()=>void,
    icon: JSX.Element,
}

type SettingSectionType = {
    title: string,
    sections: SectionItemType[],
}

export const SettingSection = ({title, sections }: SettingSectionType) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    return (
        <View style={tailwind('flex justify-between px-1')}>
            <Text 
                style={[tailwind('flex flex-row justify-between py-2'), {color: colors.text.gray}]}
            >
                {title}
            </Text>

            {
                sections.map((section, index) => {
                    return(
                        <View style={tailwind('')}>
                            <View style={[tailwind('relative flex flex-row justify-start items-center py-3'), {borderBottomWidth: 1, borderBottomColor: colors.text.gray}]}>
                                {section.icon}
                                <Text style={[tailwind('ml-2'), typography.h6, {color:  colors.text[mode] }]}>{section.label}</Text>
                                <Pressable
                                    style={[tailwind("absolute right-0 h-10 w-10 justify-center items-center")]}
                                    onPress={section.onPres}
                                >
                                    <ForwardArrowIcon size={24} color={mode == "dark" ? colors.text.dark : colors.text.light} />
                                </Pressable>
                            </View>
                            { index < sections.length && <Space direction='h' size={10} />}
                        </View>
                    )
                })
            }


        </View>
    )
}


