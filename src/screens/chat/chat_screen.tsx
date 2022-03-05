import React, { useContext, useState } from 'react'
import { Text, View, ScrollView, Modal, Pressable } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FilterIcon, DownArrowIcon } from '../../components/icons';
import { ModalProvider, OpenModal, CloseModal } from '../../contexts/ModalContext'
import { MyModal } from '../../components/modals';
import { Space } from '../../components/util';
import { ChatEntry, ChatEntryType } from '../../components/content/chat_entry';

type Props = DrawerScreenProps<RootDrawerParamList, 'Chat'>;


const chatEntry:ChatEntryType[] = [
    {
        from: "Jhon Smith",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkmiXxUZbmQ9S_RCQPjD39C6FZB5S3w76A-Q&usqp=CAU",
        job: "CEO",
        title: "SpecialOffer Just for You!",
        lastMessage: "Hi, we are running a new promotion in your area. If you want to get a free delivery, then use code 'FREE' at the checkout.",
        isSeen: false,
        timeSent: "1h ago",
        tags: [
            {
                title: 'Promotion',
                color: '#503e9d',
                bgColor: '#503e9d10'
            },
            {
                title: 'Expire Soon',
                color: '#fb6d3a',
                bgColor: '#fb6d3a10'
            },
        ],
    },
    {
        from: "Mhog Mhog",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh-J04gXCOsTHzwjH5Ay2IWfnWBzFfBlP0sg&usqp=CAU",
        job: "Mc Mhog",
        title: "Order status",
        lastMessage: "Hi, we are happy to inform you that your order is ready. Please check it out.",
        isSeen: false,
        timeSent: "2h  ago",
        tags: [],
    },
    {
        from: "Dr Mundo",
        imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbeAoyj-zKbM4uxNW-6bKQw9eOOxraONhrsQ&usqp=CAU",
        job: "Burger Slaves",
        title: "Canceling order",
        lastMessage: "Your order has beeb canceled successfully.",
        isSeen: true,
        timeSent: "3h ago",
        tags: [],
    },
];


export const ChatScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    const [selectedFilter, setSelectedFilter] = useState('Recent');

    return (
        <SafeAreaView>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex h-full"), { backgroundColor: colors.bg[mode] }]}>

                <View style={tailwind('flex flex-row justify-between py-4 px-10')}>
                    <Text style={[typography.h5, { color: colors.text[mode] }]}>Messages</Text>
                    <ModalProvider>
                        <OpenModal>
                            <View
                                style={tailwind(`rounded-md flex flex-row justify-center items-center h-8 px-2 ${(mode === 'dark') ? 'bg-gray-700' : 'bg-gray-200'}`)}
                            >
                                <FilterIcon color={mode === 'dark' ? colors.text.dark : colors.text.light} />
                                <Text style={[tailwind('mx-1'), typography.h8, { color: colors.text[mode] }]}>{selectedFilter}</Text>
                                <DownArrowIcon color={mode === 'dark' ? colors.text.dark : colors.text.light} />
                            </View>
                            <MyModal>
                                <View style={tailwind('flex-1 justify-center w-full items-center')}>
                                    <View style={tailwind(`p-5 rounded-md justify-center w-40 items-center ${(mode === 'dark') ? 'bg-gray-700' : 'bg-gray-200'}`)}>
                                        <CloseModal onPress={() => setSelectedFilter('Recent')}>
                                            <View style={tailwind('rounded-md justify-center items-center bg-green-500 py-2 px-5')}>
                                                <Text style={[typography.h8, { color: colors.text[mode] }]}>Recent</Text>
                                            </View>
                                        </CloseModal>
                                        <Space direction='h' size={10} />
                                        <CloseModal onPress={() => setSelectedFilter('Not-Viewd')}>
                                            <View style={tailwind('rounded-md justify-center items-center bg-purple-500 py-2 px-5')}>
                                                <Text style={[typography.h8, { color: colors.text[mode] }]}>Not-Viewd</Text>
                                            </View>
                                        </CloseModal>
                                    </View>

                                </View>
                            </MyModal>
                        </OpenModal>
                    </ModalProvider>
                </View>

                <View style={tailwind('flex-1 px-10')}>
                {
                    chatEntry.map((entry, index) =>(
                        <React.Fragment key={index} >
                            <ChatEntry
                                from={entry.from}
                                job={entry.job}
                                imageUrl={entry.imageUrl}
                                title={entry.title}
                                lastMessage={entry.lastMessage}
                                isSeen={entry.isSeen}
                                timeSent={entry.timeSent}
                                tags={entry.tags}
                            />
                            {index < chatEntry.length - 1 && <Space direction='v' size={6} />}
                        </React.Fragment>
                    ))
                }
                </View>
                

            </ScrollView>
        </SafeAreaView>

    )
}