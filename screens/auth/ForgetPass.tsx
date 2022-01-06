
type color = {
    name: string,
    dark: string,
    light: string
}
type typography = {
    variant: string,
    size: number,
    font?: 'bold' | 'normal' | number
}

type Theme = {
    mode: 'dark' | 'light',
    colors: color[],
    typography: typography[]
}


export const theme: Theme = {
    mode: 'light',
    colors: [
        {
            name: 'primary',
            dark: '#503e9d',
            light: '#503e9d'
        },
        {
            name: 'secondary',
            dark: '#fb6d3a',
            light: '#fb6d3a'
        },
        {
            name: 'success',
            dark: '#419d3e',
            light: '#419d3e'
        },
        {
            name: 'warning',
            dark: '#facd5d',
            light: '#facd5d'
        },
        {
            name: 'text',
            dark: '#182135',
            light: '#f7fafc',
        },
        {
            name: 'bg',
            dark: '#2d2d2d',
            light: '#f7f7f7',
        }


    ],
    typography: [
        {
            variant: "h1",
            size: 48,
            font: "normal",
        }

    ]
}