import React from 'react'
import { View } from 'react-native'
type SpaceProps = {
    direction?: 'h' | 'v',
    size: number
}
export const Space = ({ direction = "h", size }: SpaceProps) => {

    if (direction === 'h')
        return (
            <View style={{ marginTop: size }}></View>
        )
    else
        return (
            <View style={{ marginRight: size }}></View>
        )
}


