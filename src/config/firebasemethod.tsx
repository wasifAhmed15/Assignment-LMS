import {getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword,onAuthStateChanged}from 'firebase/auth'
import{getDatabase,onValue,ref, set,push} from "firebase/database"
import { app } from './fbconfig'
let auth = getAuth(app)
let db = getDatabase(app)
export function fbSignup(body:any){
return new Promise((resolve, reject) => {
    if (!body.Email || !body.password){
        reject(alert("correct Your Email&Password"))
    }else{
        createUserWithEmailAndPassword(auth,body.Email,body.password).then((res)=>{
            let id = res.user.uid
            body.id = id
            const reference = ref(db,`user/${id}`)
            set(reference,body).then((res)=>{
                resolve("USER CREATE SUCCESFULLY")
            }).catch((err)=>{
                reject(err)
            })

        }).catch((err)=>{
            reject(err)
        })
        
    }
})
}





export function fbLogin(body:any){
    return new Promise((resolve, reject) => {
        if(!body.Email  || !body.password){
            reject("Email and Password is Required")
            reject()
        }else{
            signInWithEmailAndPassword(auth , body.Email, body.password).then((res)=>{
                let id = res.user.uid
                const reference = ref(db,`user/${id}`)
                onValue(reference,(data)=>{
                    if(data.exists()){
                        resolve(data.val())

                    }else{
                        reject("No Data Found")
                    }
                })
            }).catch((err)=>{
                reject(err)
            })
        }
    })
}

export let fbAuth=()=>{
    return new Promise((resolve,reject)=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/auth.user
              const uid = user.uid;
              resolve(uid)
              // ...
            } else {
             reject("No User is Logged in")
              // User is signed out
              // ...
            }
          });
    })
 }


export let FbAdd = (nodename:String,body:any,id?:any)=>{
return new Promise((resolve, reject) => {
    const TaskId = push(ref(db,`${nodename}/`)).key
    body.id = TaskId
    const reference = ref(db,`${nodename}/${body.id}`)



    set(reference,body).then((res=>{
resolve ("Data Send Succesfully")
    })
    ).catch((err)=>{
        reject(err);
        

    })
})
}

export let FbGet = (nodename:string,id?:any)=>{
    return new Promise((resolve, reject) => {
        const reference = ref(db,`${nodename}/${id?id:""}`)
        onValue(reference,(data)=>{
            if(data.exists()){
                resolve(Object.values(data.val()))
            }else{
                reject("Dont Data Found")
            }
        })
    })
}
