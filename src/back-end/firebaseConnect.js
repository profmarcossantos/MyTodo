import * as firebase from 'firebase/app'
import firestore from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyDbUlly7nVHdmuGgv7huWqG4B90OABxDQ8",
    authDomain: "mytodo-7ac81.firebaseapp.com",
    projectId: "mytodo-7ac81",
    storageBucket: "mytodo-7ac81.appspot.com",
    messagingSenderId: "914423293764",
    appId: "1:914423293764:web:ca6d885e41a52fdcd4d911"
};

const firebaseApp = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()

const db = firebaseApp.firestore()
export default db


