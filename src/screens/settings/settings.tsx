import React, { useContext } from 'react'
import { Text, View, ScrollView } from 'react-native'
import tailwind from 'tailwind-rn'
import { DrawerScreenProps } from '@react-navigation/drawer';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ThemeContext } from '../../contexts';
import { TopBar } from '../../components/layout.tsx';
import { RootDrawerParamList } from '../../navigation';
import { SettingSection } from '../../components/content';
import { UserIcon, BookmarkIcon, MailIcon, WalletIcon, CreditCardIcon, HelpIcon, AddUserIcon, MultipleCashIcon } from '../../components/icons';
import { Space } from '../../components/util';

type Props = DrawerScreenProps<RootDrawerParamList, 'Settings'>;

export const SettingsScreen = ({ route, navigation }: Props) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView style={[tailwind("h-full"), { backgroundColor: colors.bg[mode] }]}>
            <TopBar navigation={navigation} />
            <ScrollView style={[tailwind("flex-1 px-6"), { backgroundColor: colors.bg[mode] }]}>
                
                <View style={tailwind('flex flex-row justify-start py-4 px-1')}>
                        <Text style={[typography.h5, { color: colors.text[mode] }]}>Settings</Text>
                </View>
                <SettingSection
                    title='General'
                    sections={[
                        {
                            label: 'Personal Information',
                            onPres: ()=>{console.log('Personal Information')},
                            icon: <UserIcon color={colors.primary.dark} size={24} />
                        },
                        {
                            label: 'Saved Addresses',
                            onPres: ()=>{console.log('Personal Information')},
                            icon: <BookmarkIcon color={colors.secondary.dark}  size={24} />
                        },
                        {
                            label: 'Marketting Prefrences',
                            onPres: ()=>{console.log('Personal Information')},
                            icon: <MailIcon color={colors.warning.dark} size={24} />
                        }
                    ]} 
                />

                <Space direction='h' size={20}/>

                <SettingSection
                    title='Payments'
                    sections={[
                        {
                            label: 'Payment Methods',
                            onPres: ()=>{console.log('Payment Methods')},
                            icon: <WalletIcon color={colors.primary.dark} size={24} />
                        },
                        {
                            label: 'My Cards',
                            onPres: ()=>{console.log('My Cards')},
                            icon: <CreditCardIcon color={colors.secondary.dark}  size={16} />
                        }
                    ]} 
                />

                <Space direction='h' size={20}/>

                <SettingSection
                    title='Others'
                    sections={[
                        {
                            label: 'Support',
                            onPres: ()=>{console.log('Support')},
                            icon: <HelpIcon color={colors.primary.dark} size={24} />
                        },
                        {
                            label: 'Invite Friend',
                            onPres: ()=>{console.log('Invite Friend')},
                            icon: <AddUserIcon color={colors.secondary.dark}  size={24} />
                        },
                        {
                            label: 'Discounts',
                            onPres: ()=>{console.log('Discounts')},
                            icon: <MultipleCashIcon color={colors.warning.dark} size={24} />
                        }
                    ]} 
                />
            </ScrollView>
        </SafeAreaView>

    )
}