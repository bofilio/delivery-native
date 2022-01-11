import { useContext, useState } from 'react'
import { auth } from '../constants'

import { signinProps, signupProps } from '../api/firebase';
import { IUserAPi, MyCuurentUser } from '../api';
import { AuthenticationContext } from '../contexts';
import AsyncStorage from '@react-native-async-storage/async-storage'

export type actionType = 'signup' | 'signin' | 'signout' | 'send_email_verification' | 'send_reset_password_email' | 'delete_user' | 'reauthenticate' | 'google_signin'

export type ApiStateType = {
    isloading: boolean,
    errormsg: string | null
}

type AuthHookReturnType={
    state:ApiStateType,
    user:MyCuurentUser,
    dispatch:Function
}
export const useAuth= (userManager: IUserAPi):AuthHookReturnType  => {
    const [state, setstate] = useState({ isloading: false, errormsg: null } as ApiStateType)
    const { user, setUser } = useContext(AuthenticationContext)
    const USER_STORAGE_KEY="@user"
    async function dispatch(action: actionType, paylaod?: signupProps | signinProps ) {

        setstate({ isloading: true, errormsg: null })

        switch (action) {
            case "signup":

                try {
                    const user = await userManager.Signup(paylaod as signupProps)
                    setUser(user)
                    await AsyncStorage.setItem(USER_STORAGE_KEY,JSON.stringify(user))
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "signin":

                try {
                    const user = await userManager.Signin(paylaod as signupProps)
                    setUser(user)
                    await AsyncStorage.setItem(USER_STORAGE_KEY,JSON.stringify(user))
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;
            case "google_signin":
                try {
                    const user = await userManager.SigninWithGoogle();
                    setUser(user)
                    await AsyncStorage.setItem(USER_STORAGE_KEY,JSON.stringify(user))
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ isloading: false, errormsg: err.message })
                }; break;

            case "signout":
                try {
                    await userManager.Signout()
                    setUser(null)
                    await AsyncStorage.removeItem(USER_STORAGE_KEY)
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "send_email_verification":
                try {
                    auth.currentUser != null && await userManager.SendEmailVerification()
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ isloading: false, errormsg: err.message })
                }; break;

            case "send_reset_password_email":

                try {
                    paylaod && await userManager.SendResetPasswordEmail(paylaod.email)
                    setstate({ isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ isloading: false, errormsg: err.message })
                }; break;

            case "delete_user":
                try {
                    await userManager.DeleteUser()
                    dispatch('signout'); 
                    
                } catch (err: any) {
                    setstate({ isloading: false, errormsg: err.message })
                }; break;






            default:
                setstate({ isloading: false, errormsg: "action undefined!" })
        }
    }

    return { state,user, dispatch };
}




