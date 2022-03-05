import React from 'react'
import { View, Text, Image, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'

type TagType = {
    title: string,
    color: string,
    bgColor: string,
}

export type ChatEntryType = {
    id?:number;
    from: string;
    job:string,
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

    return (
        <Pressable
            style={tailwind('flex flex-row justify-start items-start')}
            onPress={()=>console.log("navigate to messaging")}
        >
            <Image
                source={{uri: imageUrl}}
                style={tailwind('w-16 h-16 rounded-full')}
            />
            <View style={tailwind('flex justify-start items-start ml-4')}>
                <Text style={tailwind('')}>{from}, {job}</Text>
            </View>
        </Pressable>
    )
}

