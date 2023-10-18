import {useState,useEffect} from "react"
import { FbGet } from "../config/firebasemethod"
import { useParams } from "react-router-dom"
export default function CourseDetail (){
    let [courseDetail,setcourseDetail]=useState<any>([])
let GetCard = ()=>{
    FbGet("CourseCard").then((res:any)=>{
        console.log(res)
        setcourseDetail([...res])
    }).catch((err)=>{
        console.log(err);
        
    })   
}

useEffect(()=>{
    GetCard()
},[])
let  params = useParams()
return<>



{
    courseDetail.map((x:any,i:any)=>{
        return x.CourseName==params.id?<div className="py-5 border rounded w-50" key={i}>
            <div>
                <h1>Course Name:{x.CourseName}</h1>
                <div className="text-center ">

                <p className="fs-4">Month:{x.Month}</p>
                <p className="fs-4">Per Month Fees :{x.CourseFees}</p>
                <p className="fs-4">Sir Name : {x.SirName}</p>
                </div>
            </div>


        </div>:null 

    })
    
}        
</>
}