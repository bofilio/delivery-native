import React from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { featuredRestaurant } from '../../data'
import { Restaurant } from './Restaurant'


export const FeaturedRestaurantList = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
            <View style={tailwind('flex flex-row px-2')}>
                {featuredRestaurant.map((rest, index) => (
                    <Restaurant key={index} name={rest.name} imageUrl={rest.imageUrl} mainCategory={rest.mainCategory} />
                ))}
            </View>
        </ScrollView>
    )
}
