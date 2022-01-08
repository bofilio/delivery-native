import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export const HomeIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name='home' />
    )
}
export const ExploreIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="map-search-outline" />
    )
}

export const SignoutIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="logout" />
    )
}
export const FavouriteIcon = ({focused, color, size}:any) => {
    return (
        <MaterialIcons color={color} size={size} name="favorite-outline" />
    )
}
export const OrdersIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="basket-outline" />
    )
}
export const ChatIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="chat-outline" />
    )
}
export const SettingsIcon = ({focused, color, size}:any) => {
    return (
        <MaterialIcons color={color} size={size} name='settings' />
    )
}