import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyD1NO4gOYD3nEa18NmSr52nOiiw8f86j-c",
    authDomain: "deliverfood-95847.firebaseapp.com",
    projectId: "deliverfood-95847",
    storageBucket: "deliverfood-95847.appspot.com",
    messagingSenderId: "214239896220",
    appId: "1:214239896220:web:ed9f7d8144a147d13c8359"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
