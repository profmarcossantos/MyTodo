import db from "../back-end/firebaseConnect";

export const createTodo = (todo) => {

    return new Promise((resolve, reject) => {

        db.collection("todo")
            .add(todo)
            .then((retorno) => {
                console.log(retorno)
                resolve()
            })
            .catch((retorno) => {
                console.log(retorno)
                reject()
            })


    })
}