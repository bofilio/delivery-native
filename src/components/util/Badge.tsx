import React, { useContext } from 'react'
import { View , Text} from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'


type badgeProps={
    badgeColor:"primary"|"secondary"|"success"|"danger"|"warning",
    text:string
}
export const Badge = ({badgeColor,text,}:badgeProps) => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;
    return (
        <View style={[{backgroundColor:colors[badgeColor].transparent} , tailwind('p-1 mr-2 mb-1 rounded')]} >
            <Text style={{color:colors[badgeColor][mode]}}>
                {text}
            </Text>
        </View>

    )
}
