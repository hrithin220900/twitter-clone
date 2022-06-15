import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD0QBUFMUSQZeN9BPPT6HG4_kO-Z5Lj8Cg",
    authDomain: "twitter-clone-44332.firebaseapp.com",
    projectId: "twitter-clone-44332",
    storageBucket: "twitter-clone-44332.appspot.com",
    messagingSenderId: "884062656437",
    appId: "1:884062656437:web:fcf761df031e47b4256bfc"
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export default app;
export { db, storage };