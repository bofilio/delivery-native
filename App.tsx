import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import tailwind from 'tailwind-rn';
import { ThemeProvider } from './contexts';
import { HomeScreen } from './screens';
import { Navigator } from './screens/Navigator';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <ThemeProvider>
      <Navigator />
    </ThemeProvider>

  );
}