import WAinput from "../component/WAinput"
import WAButton from "../component/WAButton"
import { FbAdd } from "../config/firebasemethod"
import { useState } from "react"
export default function CourseForm(){
    let [model,setmodel]=useState<any>({})
    const fillmodel = (key:string,val:any)=>{

        model[key]=val
        setmodel({...model})
            }
            let AddCourse = ()=>{
                console.log(model);
                FbAdd("CourseCard",model).then((res)=>{
                    console.log(res);
                    
                }).catch((err)=>{
                    console.log(err);
                    
                })
                
            }


    return <>
    <div className=" h-screen flex justify-center ">
    <div className="w-[1000px]  p-10 rounded-lg border shadow-lg">
    <div className="py-5 text-center">
    <h1>Course From</h1>
</div>
    <div className="py-2 text-center">
        <WAinput type="text" label="Course Name" variant={"outlined"}   onchange={(e:any)=>{fillmodel("CourseName", e.target.value)}} value={model.CourseName}/>
       


    </div>

    <div className="py-2 text-center">
    <WAinput type="Number" label="Course Fees" variant={"outlined"}   onchange={(e:any)=>{fillmodel("CourseFees", e.target.value)}} value={model.CourseFees}/>
    </div>

    <div className="py-2 text-center">
    <WAinput type="Number" label="Month" variant={"outlined"}   onchange={(e:any)=>{fillmodel("Month", e.target.value)}} value={model.Month}/>
    </div>
    <div className="py-2 text-center">
    <WAinput type="text" label="Sir Name" variant={"outlined"}   onchange={(e:any)=>{fillmodel("SirName", e.target.value)}} value={model.SirName}/>
    </div>
    <div className="py-2 text-center">
        <WAButton Text={"Add"} varient={"contained"} color={"info"} onClick={AddCourse}/>

    </div>
    </div>
    </div>
    
    </>
}