import React from 'react'
import { View } from 'react-native'
import { popularDishes } from '../../data'
import { Space } from '../util'
import { Food } from './Food'

export const PopularDishes = () => {
    return (
        <View>
            {popularDishes.map((dish, index)=>(
            <React.Fragment key={index}>
                <Food
                    name={dish.name}
                    imageUrl={dish.imageUrl}
                    totalRating={dish.totalRating}
                    ratingAvg={dish.ratingAvg}
                    category={dish.category}
                    timeDelivery={dish.timeDelivery}
                />
                {index <popularDishes.length-1 && <Space size={8} />}
            </React.Fragment>
           
            ))}
        </View>
    )
}
