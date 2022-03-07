import React, { useContext } from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts';
import { trimString } from '../../helpers';
import { Ping } from '../util';

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

    return (
        <Pressable
            style={tailwind('flex flex-row justify-start items-start')}
            android_ripple={{ color: colors.ripple, borderless: false, radius: 1 }}
            onPress={() => console.log('go to messages')}
        >
            
            {!isSeen &&
                <Ping
                    style={tailwind('absolute right-1 top-3')}
                    pingWidth={6}
                    pingHeight={6}
                    pingRadius={3}
                    pingColor={colors.secondary.dark}
                 />
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

