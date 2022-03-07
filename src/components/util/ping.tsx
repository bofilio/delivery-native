
import React, { useEffect }from 'react'
import { View, StyleProp, ViewStyle } from 'react-native'
import Animated, { withTiming, useSharedValue, useAnimatedStyle, withRepeat, Easing } from 'react-native-reanimated';


type PingType = {
    pingWidth: number,
    pingHeight: number,
    pingRadius: number,
    pingColor: string,
    style: StyleProp<ViewStyle>,
}

export const Ping: React.FC<PingType> = (props) => {
    const { pingWidth, pingHeight, pingRadius, pingColor, style } = props

    const progress = useSharedValue(1);
    const scale = useSharedValue(1);

    const styleAnimated = useAnimatedStyle(() => {
        return {
            opacity: progress.value,
            transform: [{scale: scale.value}]
        };
    }, []);

    useEffect(()=>{
        progress.value = withRepeat(withTiming(0.2, {duration:1000, easing: Easing.out(Easing.quad),}),-1);
        scale.value = withRepeat(withTiming(2, {duration:1000}),-1);
    }, [])


    return (
        <View style={style}>
            <Animated.View
                    style={[style, styleAnimated, { backgroundColor: pingColor, width: pingWidth, height: pingHeight, borderRadius: pingRadius }]}
            ></Animated.View>

            <View
                style={[style, { zIndex: 1, backgroundColor: pingColor, width: pingWidth, height: pingHeight, borderRadius: pingRadius }]}
            ></View>

        </View>
    )
}

