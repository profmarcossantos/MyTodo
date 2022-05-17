import db from "../back-end/firebaseConnect";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


export const login = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {

            const auth = getAuth();
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    // Signed in
                    const user = userCredential.user;
                    // ...
                    resolve(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    reject(errorCode)
                });


        } catch (error) {
            console.log("Error:", error)
            reject()
        }
    })
}
