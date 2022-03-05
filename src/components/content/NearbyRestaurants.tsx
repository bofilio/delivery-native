import React from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { nearByRestaurants } from '../../data'
import { Restaurant } from './Restaurant'

export const NearbyRestaurants = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={tailwind('flex flex-row px-2')}>
                {nearByRestaurants.map((rest, index) => (
                    <Restaurant key={index} name={rest.name} imageUrl={rest.imageUrl} mainCategory={rest.mainCategory} />
                ))}
            </View>
        </ScrollView>
    )
}
