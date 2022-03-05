import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../../contexts'
import { UpcomingOrderType } from '../../../types'
import { DeliveryClockIcon } from '../../icons'
import { Space } from '../../util'


export const UpcomingOrder: React.FC<UpcomingOrderType> = (props) => {
    const { restaurantName, code, estimatedArrival,deliveryTime  } = props
    const percentage = Math.floor(estimatedArrival / deliveryTime *100) 
    const { theme } = useContext(ThemeContext)
    const { colors, mode,typography } = theme
    return (
        <View style={[tailwind("flex p-4 rounded-2xl"), { backgroundColor: colors.bgGrey[mode] }]}>
            <View style={tailwind("flex flex-row items-center justify-between")}>
                <Text style={[{color:colors.text[mode]},typography.h6]}>{restaurantName}</Text>
                <Text style={{color:colors.text.gray}}>{code}</Text>
            </View>
            <Space size={12} />
            <View style={tailwind('flex flex-row items-center justify-between')}>
                <View style={tailwind('flex flex-row items-center')}>
                    <DeliveryClockIcon size={30} color={colors.text.gray} />
                    <Space size={16} direction='v' />
                    <View>
                        <Text style={{color:colors.text.gray}}>Estimated Arrival</Text>
                        <Text style={[typography.h3,{color:colors.text[mode]}]}>{estimatedArrival}min</Text>
                    </View>
                </View>

                <View style={[tailwind('px-3 py-2  rounded-lg'), { backgroundColor: colors.primary[mode] }]}>
                    <Text style={{ color: colors.text.dark }}>Track</Text>
                </View>
            </View>
            <Space size={12} />
            <View style={tailwind('flex flex-row w-full bg-gray-300 rounded-sm')}>
                <View style={[tailwind('w-2/12 h-1 rounded-sm')]}>
                    <View style={
                        {
                            backgroundColor: colors.secondary[mode],
                            width: percentage >= 0 ?`${ Math.min(Math.floor(percentage/16*100),100)}%`: '0%' ,
                            height:4,
                            borderRadius:6
                        }} />
                </View>
                <View style={[tailwind('w-3/12 h-1 rounded-sm')]}>
                    <View style={
                        {
                            backgroundColor: colors.secondary[mode],
                            width: percentage >= 16 ? `${ Math.min(Math.floor((percentage-16)/41*100),100)}%`: '0%' ,
                            height: 4,
                            borderRadius:6
                        }
                    } />
                </View>
                <View style={[tailwind('w-7/12 h-1 flex flex-row rounded-sm')]}>
                    <View style={
                        {
                            backgroundColor: colors.secondary[mode],
                            width: percentage >= 41 ? `${ Math.min(Math.floor((percentage-41)),100)}%`: '0%' ,
                            height: 4,
                            borderRadius:6
                        }
                    } />
                    
                </View>
            </View>
        </View>
    )
}
