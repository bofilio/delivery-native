
import { StyleSheet } from "react-native"

export type ThemeType = {
    mode: 'dark' | 'light',
    colors: {
        primary:any,
        secondary:any,
        success:any,
        info:any,
        warning:any,
        danger:any,
        text:any,
        bg:any,
        border:any
    },
    typography: {
        h1:{},
        h2:{},
        h3:{},
        h4:{},
        h5:{},
        h6:{},
        inputLabel:{},
    }
}


export const theme1: ThemeType = {
    mode: 'light',
    colors: {
        primary: {
            dark: '#503e9d',
            light: '#503e9d',
            transparent: '#503e9d10',
            
        },
        secondary: {
            dark: '#fb6d3a',
            light: '#fb6d3a',
            transparent: '#fb6d3a10',
        },
        success: {
            dark: '#419d3e',
            light: '#419d3e',
            transparent: '#419d3e10',
        },
        info:{
            dark: '#2ACAEA',
            light: '#2ACAEA',
            transparent: '#2ACAEA10',
        },
        danger:{
            dark: '#FF3333',
            light: '#FF3333',
            transparent: '#FF333310',
        },
        warning: {
            dark: '#facd5d',
            light: '#facd5d',
            transparent: '#facd5d10',
        },
        text: {
            light: '#182135',
            dark: '#f7fafc',
            gray: "#A3A3A4"
        },
        bg: {
            dark: '#2d2d2d',
            light: '#f7f7f7',
        },
        border:{
            dark: '#1d1d1d',
            light: '#e2e2e2',
        }

    },
    typography: StyleSheet.create({
        h1: {
            fontSize: 48,
            fontWeight: '700',
        },
        h2: {
            fontSize: 36,
            fontWeight: '700',
        },
        h3: {
            fontSize: 30,
            fontWeight: '700',
        },
        h4: {
            fontSize: 24,
            fontWeight: '700',
        },
        h5: {
            fontSize: 20,
            fontWeight: '700',
        },
        h6: {
            fontSize: 14,
            fontWeight: '700',
        },
        inputLabel:{
            fontSize:12,
            fontWeight:'700',
            textTransform:'uppercase',
        }
    }),

}
