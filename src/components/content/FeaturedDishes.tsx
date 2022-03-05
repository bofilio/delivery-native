import React from 'react'
import { View } from 'react-native'
import { featuredDishes } from '../../data'
import { Space } from '../util'
import { Food } from './Food'

export const FeaturedDishes = () => {
    return (
        <View>
            {featuredDishes.map((dish, index)=>(
            <React.Fragment key={index}>
                <Food
                    name={dish.name}
                    imageUrl={dish.imageUrl}
                    totalRating={dish.totalRating}
                    ratingAvg={dish.ratingAvg}
                    category={dish.category}
                    timeDelivery={dish.timeDelivery}
                />
                {index <featuredDishes.length-1 && <Space size={8} />}
            </React.Fragment>
           
            ))}
        </View>
    )
}
