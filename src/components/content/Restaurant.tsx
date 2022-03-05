import React, { useContext } from 'react'
import { View, Image, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn';
import { ThemeContext } from '../../contexts';
import { restaurantType } from '../../types';
import { CashIcon, FoodIcon, MyLocationIcon, StarIcon } from '../icons';
import { Attribute, Space } from '../util';
import { Badge } from '../util/Badge';

export const Restaurant:React.FC<restaurantType> = (props) => {
    const {id,imageUrl,name,tags,mainCategory,location}=props
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    console.log(imageUrl);
    
    return (
        <View style={tailwind('flex flex-row mr-3 ')} >
            <Pressable
                android_ripple={{ color: colors.ripple, borderless: false, }}
                style={tailwind(`p-3 flex  rounded-lg ${(mode === 'dark') ? 'bg-gray-700' : 'bg-gray-200'} `)}
            >
              <Image source={{uri: imageUrl}} resizeMode='contain' style={tailwind('flex w-full rounded-lg h-16 w-16')} />  
                
            </Pressable>
            <View style={tailwind('flex-grow  pl-3')}>
                <Text style={[typography.h6, { color: colors.text[mode] }]}>{name}</Text>
                <Space size={4} />
                <View style={tailwind('flex flex-row flex-wrap w-48 ')}>
                    <Attribute
                        icon={<StarIcon size={20} color={colors.warning.light} />}
                        value={'4.8(1,457)'}
                    />
                    <Attribute
                        icon={<FoodIcon size={20} color={colors.text.gray} />}
                        value={mainCategory}
                    />
                    <Attribute
                        icon={<CashIcon size={20} color={colors.text.gray} />}
                        value={'$$'}
                    />
                    <Badge badgeColor='primary' text={tags?tags[0]:""} />
                    <Attribute
                        icon={<MyLocationIcon size={20} color={colors.text.gray} />}
                        value={'4.5km'}
                    />
                </View>
            </View>

        </View>
    )
}
