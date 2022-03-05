
import { StyleSheet } from "react-native"


export const theme1 = {
    mode: 'light' as "light"|"dark",
    colors: {
        primary: {
            dark: '#503e9d',
            light: '#503e9d',
            transparent: '#503e9d10',
        }as const,
        secondary: {
            dark: '#fb6d3a',
            light: '#fb6d3a',
            transparent: '#fb6d3a10',
        }as const,
        success: {
            dark: '#419d3e',
            light: '#419d3e',
            transparent: '#419d3e10',
        }as const,
        info:{
            dark: '#2ACAEA',
            light: '#2ACAEA',
            transparent: '#2ACAEA10',
        }as const,
        danger:{
            dark: '#FF3333',
            light: '#FF3333',
            transparent: '#FF333310',
        }as const,
        warning: {
            dark: '#facd5d',
            light: '#facd5d',
            transparent: '#facd5d10',
        }as const,
        text: {
            light: '#182135',
            dark: '#f7fafc',
            gray: "#A3A3A4"
        }as const,
        bg: {
            dark: '#2d2d2d',
            light: '#f7f7f7',
        } as const,
        bgGrey:{
            light:'#f7f7f7',
            dark:'#475569'
        },
        border:{
            dark: '#1d1d1d',
            light: '#e2e2e2',
        }as const,
        ripple: '#503e9d30',   

    }as const,

    typography: StyleSheet.create({
        h1: {
            fontSize: 48,
            fontWeight: '700',
        }as const,
        h2: {
            fontSize: 36,
            fontWeight: '700',
        }as const,
        h3: {
            fontSize: 30,
            fontWeight: '700',
        }as const,
        h4: {
            fontSize: 24,
            fontWeight: '700',
        }as const,
        h5: {
            fontSize: 20,
            fontWeight: '700',
        }as const,
        h6: {
            fontSize: 16,
            fontWeight: '700',
        }as const,
        h7: {
            fontSize: 14,
            fontWeight: '700',
        }as const,
        h8: {
            fontSize: 12,
            fontWeight: '700',
        }as const,
        inputLabel:{
            fontSize:12,
            fontWeight:'700',
            textTransform:'uppercase',
        }as const,
        xs:{
            fontSize:11,
            fontWeight:'400',
        }as const,
    }),

}as const

export type ThemeType= typeof theme1