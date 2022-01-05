import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'tailwind-rn';

export default function App() {


  return (
    <SafeAreaView>
      <View style = {tailwind('flex bg-red-500 items-center justify-center w-full h-full')}>
        <Text>Hello World !:</Text>
      </View>
    </SafeAreaView>
  );
}