import React, { useState, useContext, useCallback, useEffect } from 'react'
import { ThemeContext } from '../../contexts';
import { View, Image, Text, Pressable } from 'react-native'
import tailwind from 'tailwind-rn';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { RootStackParamList } from '../../navigation/chat_stack'
import { GiftedChat, Bubble, Send, InputToolbar } from 'react-native-gifted-chat'
import { BackArrowIcon, ForwardArrowIcon, SendIcon } from '../../components/icons';
import { useNavigation } from '@react-navigation/native';

type Props = NativeStackScreenProps<RootStackParamList, 'Message'>;

export const MessageScreen = ({ route, navigation }: Props) => {
    const { chatId } = route.params;
    const { goBack } = useNavigation();
    const [messages, setMessages] = useState([]);
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    const contactInfo = {
        name: "Jhon Smith",
        job: "CEO",
        email: "jhon_smith@gmail.com",
        pictureUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmiXxUZbmQ9S_RCQPjD39C6FZB5S3w76A-Q&usqp=CAU"
    }

    const renderBubble = (props)=>{
        return(
            <Bubble
                {...props}
                textStyle={{
                    left:{
                        color: colors.text[mode],
                    },
                    right:{
                        color: colors.text.dark,
                    },
                }}
                wrapperStyle={{
                    left:{
                        backgroundColor: colors.primary.transparent,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderBottomRightRadius: 10,
                        borderBottomLeftRadius: 0,
                    },
                    right:{
                        backgroundColor: colors.primary.dark,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 10,
                    },
                }}
             />
        )
    }

    const renderSend = (props)=>{
       return (
            <Send 
                {...props}
            >
                <SendIcon size={24} color={mode=="dark"? "white" :colors.primary.dark} />
            </Send>
       )
    }

    const renderInputToolbar = (props)=>{
        return(
            <InputToolbar 
                {...props}
                containerStyle={{
                    backgroundColor: colors.bgGrey[mode],
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingHorizontal: 5,
                }}
            />
        )
    }

    useEffect(() => {
        setMessages([
            {
                _id: 1,
                text: "Hi, we are running a new promotion in your area. If you want to get a free delivery, then use code 'FREE' at the checkout.",
                createdAt: new Date(),
                user: {
                  _id: 2,
                  name: 'Jhon Smith',
                  avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmiXxUZbmQ9S_RCQPjD39C6FZB5S3w76A-Q&usqp=CAU',
                },
            },
        ])
    }, [])

    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    }, [])

    return (
        <SafeAreaView>
            <View style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>
                <View style={[tailwind("flex w-full h-14 flex-row justify-start items-center px-5")]}>
                    <Pressable
                        style={[tailwind("rounded-md h-10 w-10 justify-center items-center"), {backgroundColor: colors.primary.light}]}
                        android_ripple={{ color: colors.ripple, borderless: false }}
                        onPress={goBack}
                    >
                        <BackArrowIcon size={24} color={colors.text.dark} />
                    </Pressable>
                </View>

                <View style={[tailwind("flex w-full h-20 flex-row justify-between items-center px-5 mt-5")]}>
                    <View style={tailwind('flex flex-row justify-start items-center')}>
                        <Image
                            source={{ uri: contactInfo.pictureUrl }}
                            style={tailwind('w-16 h-16 rounded-full')}
                        />
                        <View style={tailwind('flex justify-center items-start ml-2')}>
                            <Text style={[typography.h6, { color: mode == 'dark' ? colors.text.dark : colors.text.light }]}>{contactInfo.name}, {contactInfo.job}</Text>
                            <Text style={[typography.h8, { color: colors.text.gray }]}>{contactInfo.email}</Text>
                        </View>
                    </View>
                    <Pressable
                        style={[tailwind("h-10 w-10 justify-center items-center")]}
                        onPress={() => console.log("visit profile!")}
                    >
                        <ForwardArrowIcon size={24} color={mode == "dark" ? colors.text.dark : colors.text.light} />
                    </Pressable>
                </View>

                <GiftedChat
                    messages={messages}
                    onSend={messages => onSend(messages)}
                    user={{
                        _id: 1,
                    }}
                    textInputStyle={{
                        color: colors.text[mode],
                    }}
                    renderAvatar={null}
                    renderBubble={renderBubble}
                    alwaysShowSend
                    renderSend={renderSend}
                    renderInputToolbar={renderInputToolbar}
                />
            </View>
        </SafeAreaView>

    )
}

