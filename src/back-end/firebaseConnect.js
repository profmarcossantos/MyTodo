import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore"

// Personalizar com as chaves do criador!
const firebaseConfig = {
    apiKey: "AIzaSyDbUlly7nVHdmuGgv7huWqG4B90OABxDQ8",
    authDomain: "mytodo-7ac81.firebaseapp.com",
    projectId: "mytodo-7ac81",
    storageBucket: "mytodo-7ac81.appspot.com",
    messagingSenderId: "914423293764",
    appId: "1:914423293764:web:ca6d885e41a52fdcd4d911"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
export default db

