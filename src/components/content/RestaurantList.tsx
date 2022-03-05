import React from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { Restaurant } from './Restaurant'


export const RestaurantList = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={tailwind('flex flex-row px-2')}>
                
            </View>
        </ScrollView>
    )
}
