import React, { useContext } from 'react'
import { Pressable, View ,Image,Text} from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { FoodType } from '../../types'
import { FoodIcon, MotoCycleIcon, StarIcon } from '../icons'
import { Attribute } from '../util'
import { Badge } from '../util'

export const Food = ({id, name, imageUrl, totalRating, ratingAvg, category, timeDelivery }: FoodType) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <Pressable style={tailwind('px-4 ')}  >
            <Image source={{uri: imageUrl}} resizeMode='contain' style={tailwind('flex w-full rounded-lg h-48')} />
            <View style={tailwind('flex flex-row justify-between items-center')}>
                <Text style={[typography.h6, { color: colors.text[mode] }]}>
                    {name}
                </Text>
                <Badge badgeColor='primary' text='Free delivery' />
            </View>
            <View style={tailwind('flex flex-row flex-wrap  ')}>
                <Attribute
                    icon={<StarIcon size={20} color={colors.warning.light} />}
                    value={ratingAvg+'('+totalRating+')'}
                />
                <Attribute
                    icon={<FoodIcon size={20} color={colors.text.gray} />}
                    value={category}
                />
                <Attribute
                    icon={<MotoCycleIcon size={20} color={colors.text.gray} />}
                    value={timeDelivery}
                />

            </View>
        </Pressable>
    )
}
