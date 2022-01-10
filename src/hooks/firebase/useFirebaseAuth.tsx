import { useState } from 'react'
import { auth } from '../../constants'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential,
    signInWithPopup, GoogleAuthProvider, AuthCredential, updateProfile
} from "firebase/auth";

export type actionType = 'signup' | 'signin' | 'signout' | 'send_email_verification' | 'send_reset_password_email' | 'delete_user' | 'reauthenticate' | 'google_signin'
export type AuthpayLoadType = {
    email: string,
    password?: string,
    name?: string | null
}
export type ApiresponseType = {
    isloading: boolean,
    data: any,
    errormsg: string | null
}

export const useFireBaseAuth = () => {
    const [state, setstate] = useState({ isloading: false, data: null, errormsg: null } as ApiresponseType)
    async function performAction(action: actionType, paylaod?: AuthpayLoadType) {

        setstate({ isloading: true, data:null, errormsg: null })

        switch (action) {

            case "signup":

                try {
                    const userCredential = paylaod ? await createUserWithEmailAndPassword(auth, paylaod.email, paylaod.password || '') : null;
                    const user = userCredential?.user
                    if (user) {
                        await updateProfile(user, {
                            displayName: paylaod?.name
                        })
                    }

                    setstate({ isloading: false, data: user?.uid, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "signin":

                try {
                    const userCredential = paylaod ? await signInWithEmailAndPassword(auth, paylaod.email, paylaod.password || '') : null;
                    setstate({ isloading: false, data: userCredential?.user.uid, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "signout":
                try {
                    await signOut(auth)
                    setstate({ isloading: false, data: null, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "send_email_verification":

                try {
                    auth.currentUser != null && await sendEmailVerification(auth.currentUser)
                    setstate({ ...state, isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "send_reset_password_email":

                try {
                    paylaod && await sendPasswordResetEmail(auth, paylaod.email)
                    setstate({ ...state, isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "delete_user":
                try {
                    auth.currentUser != null && await deleteUser(auth.currentUser)
                    setstate({ isloading: false, data: null, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            //Use before operations such as updatePassword that require tokens from recent sign-in attempts. 
            case "reauthenticate":

                try {
                    auth.currentUser != null && await reauthenticateWithCredential(auth.currentUser, new AuthCredential())
                    setstate({ ...state, isloading: false, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            case "google_signin":
                const provider = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(auth, provider);
                    //const credential = GoogleAuthProvider.credentialFromResult(result);
                    //const token = credential.accessToken;
                    const user = result.user;
                    setstate({ isloading: false, data: user.uid, errormsg: null })
                } catch (err: any) {
                    setstate({ ...state, isloading: false, errormsg: err.message })
                }; break;

            default:
                setstate({ isloading: false, data: null, errormsg: "action undefined!" })
        }
    }

    return { state, performAction };
}


