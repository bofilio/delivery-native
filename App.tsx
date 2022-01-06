import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import tailwind from 'tailwind-rn';
import { ThemeProvider } from './contexts';
import { Signin } from './screens';

export default function App() {


  return (
    <ThemeProvider>
      <SafeAreaView>
        <Signin />
      </SafeAreaView>
    </ThemeProvider>

  );
}