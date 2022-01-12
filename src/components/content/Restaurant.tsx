import React, { useContext } from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn';
import { ThemeContext } from '../../contexts';
import { CashIcon, FoodIcon, MyLocationIcon, StarIcon } from '../icons';
import { Attribute, Space } from '../util';
import { Badge } from '../util/Badge';

export const Restaurant = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    return (
        <View style={tailwind('flex flex-row mr-3 ')} >
            <Pressable
                android_ripple={{ color: colors.ripple, borderless: false, }}
                style={tailwind(`p-3 flex  rounded-lg ${(mode === 'dark') ? 'bg-gray-700' : 'bg-gray-200'} `)}
            >
                <Image source={require('../../assets/img/burgerKing.png')} width={16} height={16} />
            </Pressable>
            <View style={tailwind('flex-grow  pl-3')}>
                <Text style={[typography.h6, { color: colors.text[mode] }]}>Burger King</Text>
                <Space size={4} />
                <View style={tailwind('flex flex-row flex-wrap w-48 ')}>
                    <Attribute
                        icon={<StarIcon size={20} color={colors.warning.light} />}
                        value={'4.8(1,457)'}
                    />
                    <Attribute
                        icon={<FoodIcon size={20} color={colors.text.gray} />}
                        value={'Burger'}
                    />
                    <Attribute
                        icon={<CashIcon size={20} color={colors.text.gray} />}
                        value={'$$'}
                    />
                    <Badge badgeColor='primary' text='free delivery' />
                    <Attribute
                        icon={<MyLocationIcon size={20} color={colors.text.gray} />}
                        value={'4.5km'}
                    />
                </View>
            </View>

        </View>
    )
}
