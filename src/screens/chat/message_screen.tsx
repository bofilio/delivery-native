import React from 'react'
import { View, Text } from 'react-native'
import tailwind from 'tailwind-rn';
import { NativeStackScreenProps  } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../navigation/chat_stack'

type Props = NativeStackScreenProps<RootStackParamList, 'Message'>;

export const MessageScreen = ({ route, navigation }: Props) => {
    const { chatId } = route.params;

    return (
        <View style={tailwind('flex-1 justify-center items-center')}>
            <Text>the chat with : { chatId }</Text>
        </View>
    )
}

