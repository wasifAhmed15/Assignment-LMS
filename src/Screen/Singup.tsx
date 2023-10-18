import WAButton from "../component/WAButton"
import WAinput from "../component/WAinput"
import { useState } from "react"
import { fbSignup } from "../config/firebasemethod"
import { useNavigate } from "react-router-dom"

export default function SignupData(){
    let [model,setmodel]=useState<any>({})
    let Navigate = useNavigate()

const fillmodel = (key:string,val:any)=>{

    model[key]=val
    setmodel({...model})
        }
        const Signup = ()=>{
            console.log(model)
            model.role = "user";
    
            fbSignup(model).then((res)=>{
                if (model.role == "Admin") {
                    Navigate("/Admin");
                }
               

            }).catch((err)=>{
                Navigate("/Student");
                console.log(err)
            })
        }


    return <>
    <div className=" h-screen flex justify-center items-center">

<div className="w-[500px]  p-10 rounded-lg">
<div className="py-5 text-center">
    <h1>Signup</h1>
</div>

<div className="py-2 text-center">
        <WAinput type="text" label="Name" variant={"outlined"} onchange={(e:any)=>fillmodel("Name",e.target.value)} fullwidth/>

    </div>


    <div className="py-2 text-center">
        <WAinput type="text" label="Last Name" variant={"outlined"} onchange={(e:any)=>fillmodel("LastName",e.target.value)} fullwidth/>

    </div>


    



    <div className="py-2 text-center">
        <WAinput type="email" label="email" variant={"outlined"} onchange={(e:any)=>fillmodel("Email",e.target.value)} fullwidth value={model.Email} />

    </div>
    <div className="py-2 text-center">

        <WAinput type="password" label="Password" variant={"outlined"} onchange={(e:any)=>fillmodel("password",e.target.value)} fullwidth value={model.password} />
    </div>
    <div className="py-5 text-center">

    <WAButton varient={"contained"} color={"info"} Text={"Login"} onClick={Signup}/>
    </div>

    
</div>
</div>

    </>
}