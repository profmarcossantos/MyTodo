import db from "../back-end/firebaseConnect";
import { collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore'


export const createTodo = (todo) => {
    return new Promise(async (resolve, reject) => {
        try {
            const docRef = await addDoc(collection(db, "todo"), todo)
            console.log("Documento registro ID:", docRef.id)
            resolve()
        } catch (error) {
            console.log("Error:", error)
            reject()
        }
    })
}


export const getTodos = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await getDocs(collection(db, "todo"))
            let registros = []
            querySnapshot.forEach((item) => {
                const todo = item.data()
                todo.key = item.id
                registros.push(todo)
            })
            resolve(registros)
        } catch (error) {
            console.log("Error:", error)
            reject()
        }
    })
}


export const deleteTodo = (key) => {

    return new Promise(async(resolve, reject) => {
        try {
            await deleteDoc(doc(db, "todo", key))
            resolve("Registro Excluído com Sucesso!")
        } catch (error) {
            console.log("Error:", error)
            reject()
        }
    })

}