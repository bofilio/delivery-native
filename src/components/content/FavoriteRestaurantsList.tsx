import React from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { featuredRestaurant } from '../../data'
import { Space } from '../util'
import { Restaurant } from './Restaurant'


export const FavoriteRestaurantList = () => {
    return (
        <ScrollView showsHorizontalScrollIndicator={false}>
            <View style={tailwind('flex  px-2')}>
                {featuredRestaurant.map((rest, index) => (
                    < React.Fragment key={index}>
                     <Restaurant key={index} name={rest.name} imageUrl={rest.imageUrl} mainCategory={rest.mainCategory} />
                    {index<featuredRestaurant.length-1 && <Space size={12}/>}
                    </React.Fragment>
                ))}
            </View>
        </ScrollView>
    )
}