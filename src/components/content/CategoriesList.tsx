import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { theme1 } from '../../constants'
import { ThemeContext } from '../../contexts'
import { categoryType } from '../../types'
import { StoreIcon } from '../icons'
import { Category } from '../menus/Category'
import { Space } from '../util'

export const CategoriesList = () => {
    const { theme, setTheme } = useContext(ThemeContext)
    const { mode, colors } = theme;
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View style={tailwind('flex flex-row px-2')}>
                {categories.map((cat, index) => (
                    <React.Fragment key={index} >
                        <Category  icon={cat.icon} name={cat.name} color={cat.color} />
                        {index < categories.length - 1 && <Space direction='v' size={12} />}
                    </React.Fragment>
                ))}
            </View>
        </ScrollView>
    )
}

export const categories: categoryType[] = [
    {
        id: 1,
        name: 'Pick up',
        color: "#503e9d",
        icon:<StoreIcon size={28} color={theme1.colors.text.dark} />
    },
    {
        id: 2,
        name: 'Dign in',
        color: "#fb6d3a",
        icon:<StoreIcon size={28} color={theme1.colors.text.dark} />
    },
    {
        id:3,
        name: 'High class',
        color: "#419d3e",
        icon:<StoreIcon size={28} color={theme1.colors.text.dark} />
    },
    {
        id:4,
        name: 'Traditional',
        color: "#2ACAEA",
        icon:<StoreIcon size={28} color={theme1.colors.text.dark} />
    },

]