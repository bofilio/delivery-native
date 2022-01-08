import React from 'react'
import { Pressable, ScrollView, Text } from 'react-native'
import { Button } from '../components/inputs'
import tailwind from 'tailwind-rn'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from './Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';
type Props = NativeStackScreenProps<RootStackParamList, 'Home'>;
export const HomeScreen = ({ route, navigation }: Props) => {
    return (
        <SafeAreaView>
            <ScrollView style={tailwind('h-full bg-red-400')}>
                <Text>Home</Text>
                <Button text="sign In" text_color='black' onPress={()=>navigation.navigate('Signin') }/>

            </ScrollView>
        </SafeAreaView>

    )
}
