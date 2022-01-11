import { IUserAPi, MyUser } from "..";
import { auth } from '../../constants'
import {
    createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut,
    sendEmailVerification, sendPasswordResetEmail, deleteUser, reauthenticateWithCredential,
    signInWithPopup, GoogleAuthProvider, AuthCredential, updateProfile, User
} from "firebase/auth";
import { userStorage, UserStorage, UserStorageManager } from "../../local storage";

export type signupProps = {
    name?: string,
    email: string,
    password: string,
}
export type signinProps = {
    email: string,
    password: string,
}

class FirebaseUserApi implements IUserAPi {

    async Signup(payload: signupProps) {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, payload.email, payload.password);
            const user = userCredential.user
            if (user && payload.name) {
                await updateProfile(user, {
                    displayName: payload.name
                })
            }
            return user as MyUser
        } catch (err: any) {
            throw new Error(err.message);
        };
    }

    async Signin({ email, password }: signinProps) {
        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            return userCredential.user as MyUser
        } catch (err: any) {
            throw new Error(err.message);
        };

    }
    async Signout() {
        try {
            await signOut(auth)
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    async SendEmailVerification() {
        try {
            auth.currentUser && await sendEmailVerification(auth.currentUser)

        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    async SendResetPasswordEmail(email: string) {
        try {
            await sendPasswordResetEmail(auth, email)
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    async DeleteUser() {
        try {
            auth.currentUser && await deleteUser(auth.currentUser)
        } catch (err: any) {
            throw new Error(err.message);
        }
    }
    async UpdateUser(user: User, userInfos: any): Promise<void> {
        try {
            await updateProfile(user, {
                displayName: userInfos.name
            })
        } catch (err: any) {
            throw new Error(err.message);
        }

    }
    async SigninWithGoogle() {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            //const credential = GoogleAuthProvider.credentialFromResult(result);
            //const token = credential.accessToken;
            return userCredential.user as MyUser;
        } catch (err: any) {
            throw new Error(err.message);
        }

    }



}

 const firebaseAuth = FirebaseUserApi.prototype;
 firebaseAuth.userStorage=userStorage
 export {firebaseAuth};
