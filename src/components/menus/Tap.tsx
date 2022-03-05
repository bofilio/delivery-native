import React, { useContext } from 'react'
import { Pressable, View,Text } from 'react-native'
import tailwind from 'tailwind-rn'
import { TabulationContext, ThemeContext } from '../../contexts'

type TabType={
    id:number;
    title:string;
}
export const Tab:React.FC<TabType> = (props) => {
    const { theme } = useContext(ThemeContext)
    const { mode, colors, typography } = theme;

    const { active_id,setActiveId }=useContext(TabulationContext)
    const {id,title,children}=props
  return (
    <Pressable style={{ backgroundColor: id===active_id? colors.primary[mode]:  colors.bgGrey[mode] }} onPress={()=>setActiveId(id)} >
        <Text>{title}</Text>
    </Pressable>
  )
}

type TabContentType={
    id:number,
}
export const TabContent:React.FC<TabContentType> = (props) => {
    const { active_id }=useContext(TabulationContext)
    const {id,children}=props
  return (
    <View style={tailwind(`${id!==active_id? "hidden":""}`)}>
        {children}
    </View>
  )
}