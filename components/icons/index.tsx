import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import React from 'react'

export const MenuIcon = ({focused, color, size}:any) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name='menu' />
    )
}
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
export const SearchIcon = ({focused, color, size}:any) => {
    return (
        <MaterialIcons color={color} size={size} name='search'  />
    )
}
export const CloseIcon = ({focused, color, size}:any) => {
    return (
        <MaterialIcons color={color} size={size} name='close'  />
    )
}
export const UserIcon = ({focused, color, size}:any) => {
    return (
        <AntDesign color={color} size={size} name='user'  />
    )
}
