import { useState } from 'react'
import { auth } from '../../constants'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential,
    signInWithPopup, GoogleAuthProvider, AuthCredential
} from "firebase/auth";

export type actionType = 'signup' | 'signin' | 'signout' | 'send_email_verification' | 'send_reset_password_email' | 'delete_user' | 'reauthenticate' | 'google_signin'
export type payLoadType = {
    email: string,
    password: string
}

export const useFireBaseAuth = () => {
    const [state, setstate] = useState({ isloading: false, uid: '', errormsg: "" })
    async function performAction(action: actionType, paylaod?: payLoadType|undefined) {

        setstate({ isloading: true, uid: '', errormsg: "" })

        switch (action) {

            case "signup":
                try {
                    const userCredential = paylaod? await createUserWithEmailAndPassword(auth, paylaod.email, paylaod.password):null;
                    userCredential && setstate({ isloading: false, uid: userCredential.user.uid, errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "signin":
                try {
                    const userCredential = paylaod? await signInWithEmailAndPassword(auth, paylaod.email, paylaod.password):null;
                    userCredential && setstate({ isloading: false, uid: userCredential.user.uid, errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "signout":
                try {
                    await signOut(auth)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "send_email_verification":
                try {
                    
                    auth.currentUser!=null && await sendEmailVerification(auth.currentUser)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "send_reset_password_email":
                try {
                    paylaod && await sendPasswordResetEmail(auth, paylaod.email)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            case "delete_user":
                try {
                    auth.currentUser!=null && await deleteUser(auth.currentUser)
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;
            //Use before operations such as updatePassword that require tokens from recent sign-in attempts. 
            case "reauthenticate":

                try {
                    auth.currentUser!=null && await reauthenticateWithCredential(auth.currentUser, new AuthCredential())
                    setstate({ isloading: false, uid: '', errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;
            case "google_signin":
                const provider = new GoogleAuthProvider();
                try {
                    const result = await signInWithPopup(auth, provider);
                    //const credential = GoogleAuthProvider.credentialFromResult(result);
                    //const token = credential.accessToken;
                    const user = result.user;
                    setstate({ isloading: false, uid: user.uid, errormsg: "" })
                } catch (err: any) {
                    setstate({ isloading: false, uid: '', errormsg: err.message })
                }; break;

            default:
                setstate({ isloading: false, uid: '', errormsg: "action undefined!" })
        }
    }

    return { state, performAction };
}


