import React from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-rn'
import { upComingOrders } from '../../../data'
import { Space } from '../../util'
import { UpcomingOrder } from './UpcomingOrder'

export const UpComingOrderList = () => {
    return (
        <View style={tailwind("flex px-2")}>
            {upComingOrders.map((order, index) => (
                <React.Fragment key={index}>
                    <UpcomingOrder
                        restaurantName={order.restaurantName}
                        code={order.code}
                        estimatedArrival={order.estimatedArrival}
                        deliveryTime={order.deliveryTime}
                    />
                    <Space size={16}/>
                </React.Fragment>

            ))}

        </View>
    )
}
