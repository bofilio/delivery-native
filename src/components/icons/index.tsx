import { AntDesign, MaterialCommunityIcons, Feather, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
type IconProps={
    focused?:boolean,
    color?:string,
    size?:number
} 

export const MenuIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name='menu' />
    )
}
export const HomeIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name='home' />
    )
}
export const ExploreIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="map-search-outline" />
    )
}

export const SignoutIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="logout" />
    )
}
export const SigninIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="login" />
    )
}
export const SignupIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="person-add" />
    )
}

export const FavouriteIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="favorite-outline" />
    )
}
export const OrdersIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="basket-outline" />
    )
}
export const ChatIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="chat-outline" />
    )
}
export const SettingsIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name='settings' />
    )
}
export const SearchIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name='search'  />
    )
}
export const CloseIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name='close'  />
    )
}
export const UserIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <AntDesign color={color} size={size} name='user'  />
    )
}
export const CartIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="cart-outline" />
    )
}
export const ArrowRightIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="keyboard-arrow-right"  />
    )
}
export const ArrowLeftIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="keyboard-arrow-left"  />
    )
}
export const ArrowDownIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="keyboard-arrow-down"  />
    )
}
export const ArrowUpIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="keyboard-arrow-up"  />
    )
}
export const StoreIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="store-mall-directory"  />
    )
}
export const FoodIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="food-fork-drink"  />
    )
}
export const StarIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="star"  />
    )
}
export const CashIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name="cash"  />
    )
}
export const MyLocationIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="my-location"  />
    )
}
export const MotoCycleIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialIcons color={color} size={size} name="motorcycle"  />
    )
}

export const FilterIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <Feather name="filter" color={color} size={size} />
    )
}

export const DownArrowIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <AntDesign color={color} size={size} name='down'  />
    )
}
export const DeliveryClockIcon = ({focused=false, color, size=16}:IconProps) => {
    return (
        <MaterialCommunityIcons color={color} size={size} name='clock-fast'  />
    )
}



