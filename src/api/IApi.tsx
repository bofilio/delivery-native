export type MyCuurentUser = MyUser | null;
export class MyUser {
    uid: string;
    displayName: string | null = null;
    email: string | null = null;
    phoneNumber: string | null = null;
    photoURL: string | null = null;
    providerId: string = "email";
    emailVerified: boolean = false;
    isAnonymous: boolean = false;
    refreshToken: string = '';
    constructor(uid: string) {
        this.uid = uid
    }
    getIdToken(forceRefresh?: boolean): Promise<string> {
        throw new Error("Method not implemented.");
    }
    reload(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    toJSON(): object {
        return JSON.parse(JSON.stringify(this))
    }

}

export interface IApi {

}
export interface IUserAPi extends IApi {

    Signup(data: any): Promise<MyUser>;
    Signin(data: any): Promise<MyUser>;
    SigninWithGoogle(): Promise<MyUser>;
    Signout(): Promise<void>;
    SendEmailVerification(): Promise<void>;
    SendResetPasswordEmail(email: string): Promise<void>;
    UpdateUser(user: MyUser, userInfos: any): Promise<void>;
    DeleteUser(user?: MyUser): Promise<void>;
}



