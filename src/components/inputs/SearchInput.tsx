import React, { useState } from 'react'
import { Pressable, TextInput, View } from 'react-native'
import tailwind from 'tailwind-rn'
import { CloseIcon, SearchIcon } from '../icons'

export const SearchInput = () => {
    const [text, setText] = useState('')

    return (
        <View style={tailwind('bg-gray-200 rounded-lg flex flex-row items-center  px-2')}>
            <Pressable>
                <SearchIcon size={16} />
            </Pressable>
            <TextInput style={[tailwind(" h-8 px-2"),{width:'50%'}]} placeholder='Search' value={text} onChangeText={setText} />
            {
                text!='' &&
                <Pressable style={tailwind('absolute right-2')} onPress={()=>setText('')}>
                    <CloseIcon />
                </Pressable>
            }

        </View>
    )
}
