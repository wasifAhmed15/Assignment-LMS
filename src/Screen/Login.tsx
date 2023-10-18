import WAinput from "../component/WAinput"
import { useState,useEffect } from 'react';
import { useNavigate,Link } from "react-router-dom";
import WAButton from "../component/WAButton";
import { fbLogin,fbAuth} from "../config/firebasemethod";

export default function LoginData(){
let [model,setmodel]=useState<any>({})
let navigate = useNavigate()

const fillmodel = (key:string,val:any)=>{

    model[key]=val
    setmodel({...model})
    
        }
const LoginTask = (e:any)=>{
    e.preventDefault();
    console.log(model)
    fbLogin(model).then((res:any)=>{
        if(res.role == "Admin"){
            navigate("/Admin")
        }else{

            navigate("/Student")
        }

    }).catch((err)=>{
        console.log(err)

    })
}

// useEffect(() => {
//     fbAuth()
//       .then((res) => {
       
//         navigate("/student");
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }, []);




return <>
<div className=" h-screen flex justify-center items-center">

<div className="w-[500px]  p-10 rounded-lg">
<div className="py-5 text-center">
    <h1>LOGIN</h1>
</div>

    <div className="py-2 text-center">
        <WAinput type="email" label="email" variant={"outlined"} onchange={(e:any)=>fillmodel("Email",e.target.value)} fullwidth value={model.Email}/>



    </div>
    <div className="py-2 text-center">

        <WAinput type="password" label="Password" variant={"outlined"} onchange={(e:any)=>fillmodel("password",e.target.value)} fullwidth value={model.password}/>
    </div>
    <div className="py-5 text-center">

    <WAButton varient={"contained"} color={"info"} Text={"Login"} onClick={LoginTask}/>
    </div>

    <div className="text-center py-10">
    <Link to="/SingUp">Create Account?</Link>


    </div>

    
</div>
</div>

</>
}