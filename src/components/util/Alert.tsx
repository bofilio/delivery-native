import React, { FC, useContext, useEffect } from 'react'
import { Platform, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import tailwind from 'tailwind-rn'
import { AlertContext, ThemeContext } from '../../contexts'

export type statusType = 'danger' | 'info' | 'warning' | 'success' | 'primary' | undefined
export type AlertProps = {
    status: statusType,
    message: string | null | undefined
}

export const Alert: FC<{}> = () => {
    const { alert, setAlert } = useContext(AlertContext)
    const { status = 'primary', message } = alert
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    useEffect(() => {

        if (alert.message) {
            var timer = setTimeout(() => {
                setAlert({ status: undefined, message: null })
            }, 5000)
        }
        return () => { clearTimeout(timer) }

    }, [alert])
    if (!message) {
        return (<></>)
    }
    return (

        <SafeAreaView style={[tailwind(' p-2 z-50 w-full top-0 absolute'), { backgroundColor: colors[status].transparent, elevation: (Platform.OS === 'android') ? 50 : 0 }]}>
            <Text style={{ color: colors[status][mode] }}>
                {message}
            </Text>
        </SafeAreaView>
    )
}

