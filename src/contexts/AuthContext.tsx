import React, { useState, useEffect, createContext, FC, Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from '../constants';
import { onAuthStateChanged } from "firebase/auth";
import { User } from 'firebase/auth';
const STORAGE_KEY = '@user'

type UserType = User | null
export const AuthenticationContext = createContext<{ user: UserType }>(
    {
        user: null,
    }
);
export const AuthenticationProvider: FC<{}> = ({ children }) => {
    const [user, setUser] = useState(null as UserType);
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, async user => {
            if (user) {
                setUser(user)
                await saveUserToLocalStorage(user)
            } else {
                setUser(null)
                await removeUserFromLocalStorage()
            }
        })

        if (!user) {
            getUserFromLocalStorage().then(user => {
                user && setUser(user)
            })
        } 

        return unsbscribe;
    }, [])
    return (
        <AuthenticationContext.Provider value={{ user }} >
            {children}
        </AuthenticationContext.Provider>
    )
}



async function saveUserToLocalStorage(user: User) {
    try {
        await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(user.toJSON()))
    } catch (e) {
        alert('Storage full !')
    }
}
async function removeUserFromLocalStorage() {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY)

    } catch (e) {
        alert('error removing user from local storage !')
    }
}
async function getUserFromLocalStorage() {
    try {
        const raw_user = await AsyncStorage.getItem(STORAGE_KEY)
        if (!raw_user) return null

        const user = JSON.parse(raw_user) as User
        return user
    } catch (e) {
        return null
    }
}