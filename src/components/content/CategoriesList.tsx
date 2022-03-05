import React, { useContext } from 'react'
import { ScrollView, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { ThemeContext } from '../../contexts'
import { categories } from '../../data'
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
                    <>
                        <Category key={index} icon={<StoreIcon size={28} color={colors.text.dark} />} name={cat.name} color={cat.color} />
                        {index < categories.length - 1 && <Space direction='v' size={12} />}
                    </>
                ))}
            </View>
        </ScrollView>
    )
}
