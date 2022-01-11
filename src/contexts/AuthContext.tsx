import React, { useState, useEffect, createContext, FC, Dispatch, SetStateAction } from 'react'
import { auth } from '../constants';
import { onAuthStateChanged } from "firebase/auth";
import { User } from 'firebase/auth';
import { MyCuurentUser, MyUser } from '../api';
import AsyncStorage from '@react-native-async-storage/async-storage'

const USER_STORAGE_KEY = '@user'


export const AuthenticationContext = createContext<{ user: MyCuurentUser, setUser: React.Dispatch<React.SetStateAction<MyCuurentUser>> }>(
    {
        user: null,
        setUser: () => null
    }
);
export const AuthenticationProvider: FC<{}> = ({ children }) => {
    const [user, setUser] = useState(null as MyCuurentUser);
    useEffect(() => {

        if (!user) {
            AsyncStorage.getItem(USER_STORAGE_KEY).then(user_str => {
                if (user_str) {
                    const user = JSON.parse(user_str) as MyUser
                    setUser(user)
                }

            })
        }
    }, [])


    return (
        <AuthenticationContext.Provider value={{ user, setUser }} >
            {children}
        </AuthenticationContext.Provider>
    )
}


