import React, { useContext, useEffect } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts';
import { trimString } from '../../helpers';
import Animated, { withTiming, useSharedValue, useAnimatedStyle, withRepeat, Easing } from 'react-native-reanimated';

type TagType = {
    title: string,
    color: string,
    bgColor: string,
}

export type ChatEntryType = {
    id?: number;
    from: string;
    job: string,
    imageUrl: string;
    title: string;
    lastMessage: string;
    isSeen: boolean,
    timeSent: string,
    tags: TagType[] | null | undefined,
}

export const ChatEntry: React.FC<ChatEntryType> = (props) => {
    const { id,
        from,
        imageUrl,
        job,
        title,
        lastMessage,
        isSeen,
        timeSent,
        tags } = props;

    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

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
        <Pressable
            style={tailwind('flex flex-row justify-start items-start')}
            android_ripple={{ color: colors.ripple, borderless: false, radius: 1 }}
            onPress={() => console.log('go to messages')}
        >
            {!isSeen &&
                <Animated.View
                    style={[tailwind('absolute right-1 top-6'), styleAnimated, { backgroundColor: colors.secondary.dark, width: 6, height: 6, borderRadius: 3 }]}
                ></Animated.View>
            }
            {!isSeen &&
                <View
                    style={[tailwind('absolute right-1 top-6'), { zIndex: 1, backgroundColor: colors.secondary.dark, width: 6, height: 6, borderRadius: 3 }]}
                ></View>
            }
            <Image
                source={{ uri: imageUrl }}
                style={tailwind('w-16 h-16 rounded-full')}
            />
            <View style={tailwind('flex flex-1 ml-4')}>
                <View style={tailwind('flex flex-row justify-between items-center')}>
                    <Text style={[typography.h8, { color: colors.text.gray }]}>{from}, {job}</Text>
                    <Text style={[typography.h8, { color: colors.text.gray }]}>{timeSent}</Text>
                </View>
                <Text style={[typography.h6, { color: mode == 'dark' ? colors.text.dark : colors.text.light }]}>{trimString(title, 30)}</Text>
                <Text style={[typography.h8, { color: colors.text.gray }]}>{trimString(lastMessage, 88)}</Text>

            </View>
        </Pressable>
    )
}

