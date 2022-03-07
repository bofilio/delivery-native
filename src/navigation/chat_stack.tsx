import React from 'react';
import { createNativeStackNavigator  } from '@react-navigation/native-stack';
import { ChatScreen, MessageScreen } from '../screens/chat';

export type RootStackParamList = {
  Chat: undefined;
  Message: { chatId: string };
};


const Stack = createNativeStackNavigator<RootStackParamList>();

export const ChatStack = () => (
  <Stack.Navigator
    initialRouteName="Chat"
    screenOptions={{
        headerShown:false,
    }}
  >
    <Stack.Screen name="Chat" component={ChatScreen} />
    <Stack.Screen name="Message" component={MessageScreen} />
  </Stack.Navigator>
);
