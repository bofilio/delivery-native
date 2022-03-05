import React, { useContext } from 'react'
import { Pressable, View, Text, StyleProp, ViewStyle } from 'react-native'
import tailwind from 'tailwind-rn'
import { TabulationContext, ThemeContext } from '../../contexts'

type TabType = {
    id: number;
    title: string;
    style?: StyleProp<ViewStyle>
}
export const Tab: React.FC<TabType> = (props) => {
    const { theme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    const { active_id, setActiveId } = useContext(TabulationContext)
    const { id, title, style, children } = props
    return (
        <Pressable
            style={
                [style,
                    { backgroundColor: (id === active_id) ? colors.primary[mode] : colors.bgGrey[mode] },
                    tailwind("py-2  rounded-lg flex-grow")
                ]
            }
            onPress={() => setActiveId(id)} >
            <Text style={[tailwind("text-center"), { color: id === active_id ? colors.text.dark : colors.text[mode] }]}>
                {title} {colors.bgGrey['light']}
            </Text>
        </Pressable>
    )
}

type TabContentType = {
    id: number,
}
export const TabContent: React.FC<TabContentType> = (props) => {
    const { active_id } = useContext(TabulationContext)
    const { id, children } = props
    return (
        <View style={tailwind(`${id !== active_id ? "hidden" : ""}`)}>
            {children}
        </View>
    )
}