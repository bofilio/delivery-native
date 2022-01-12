import React, { FC } from 'react'
import { View } from 'react-native'
import tailwind from 'tailwind-rn'
export const Circle:FC<{size?:number,color:string}> = ({size=8,color}) => {
    return (
        <View style={[tailwind('rounded-full'),{width:size,height:size,backgroundColor:color}]}/>
    )
}
