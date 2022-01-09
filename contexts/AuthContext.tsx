import React, { useState, useEffect, createContext, FC, Dispatch, SetStateAction } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { auth } from '../constants';
import { onAuthStateChanged } from "firebase/auth";

const STORAGE_KEY = '@uid'
type uidType= string|null

export const AuthenticationContext = createContext<{ uid:uidType }>(
    {
        uid: null,
    }
);
export const AuthenticationProvider: FC<{}> = ({ children }) => {
    const [uid, setUid]= useState(null as uidType);
    useEffect(() => {
        const unsbscribe = onAuthStateChanged(auth, async user => {
            if (user) {
                setUid(user.uid)
                await saveUid(user.uid)
            } else {
                setUid(null)
                await AsyncStorage.removeItem(STORAGE_KEY)
            }
        })
        
        if(!uid) getUid().then( uid=>{ setUid(uid) }).catch(err=>err )

        return unsbscribe;
    }, [])
    return (
        <AuthenticationContext.Provider value={{ uid }} >
            {children}
        </AuthenticationContext.Provider>
    )
}



async function saveUid (uid: uidType)  {
    try {
        if(uid!=null) await AsyncStorage.setItem(STORAGE_KEY, uid)
    } catch (e) {
        alert('Storage full !')
    }
}
async function removeUid () {
    try {
        await AsyncStorage.removeItem(STORAGE_KEY)

    } catch (e) {
        alert('error removing uid !')
    }
}
async function getUid (){
    try {
        const uid = await AsyncStorage.getItem(STORAGE_KEY)
        return uid
    } catch (e) {
        return 'error'
    }
}