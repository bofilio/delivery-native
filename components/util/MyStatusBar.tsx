import React,{useContext} from 'react'
import { ThemeContext } from '../../contexts';
import { SafeAreaView } from 'react-native-safe-area-context';

export const MyStatusBar = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <SafeAreaView style={{ flex: 0, backgroundColor: colors.primary[mode]}} />
    )
}
