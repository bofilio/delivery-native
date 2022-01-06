
import { StyleSheet } from "react-native"

export type ThemeType = {
    mode: 'dark' | 'light',
    colors: any,
    typography: any
}


export const theme1: ThemeType = {
    mode: 'light',
    colors: {
        primary: {
            dark: '#503e9d',
            light: '#503e9d',
            main: '#503e9d',
        },
        secondary: {

            dark: '#fb6d3a',
            light: '#fb6d3a',
            main: '#fb6d3a',
        },
        success: {
            dark: '#419d3e',
            light: '#419d3e',
            main: '#419d3e',
        },
        warning: {
            dark: '#facd5d',
            light: '#facd5d',
            main: '#facd5d',
        },
        text: {
            light: '#182135',
            dark: '#f7fafc',
            gray: "#777777"
        },
        bg: {
            dark: '#2d2d2d',
            light: '#f7f7f7',
        }

    },
    typography: StyleSheet.create({
        h1: {
            fontSize: 48,
            fontWeight: '700',
        },
        h5: {
            fontSize: 20,
            fontWeight: '400',
        }
    }),

}
