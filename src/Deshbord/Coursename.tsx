import WAButton from "../component/WAButton"
import { FbGet } from "../config/firebasemethod"
import {useEffect,useState} from "react"
import { Navigate, useNavigate } from "react-router-dom"

export default function Coursename(){
    let [coursename,setcoursename]=useState<any>([])
let GetCard = ()=>{
    FbGet("CourseCard").then((res:any)=>{
        console.log(res)
        setcoursename([...res])
    }).catch((err)=>{
        console.log(err);
        
    })
    

}

useEffect(()=>{
    GetCard()
},[])
let  navigate = useNavigate()
    return <>
 <div className="container-fluid">
    <div className="row ">
       {
        coursename.map((x:any,i:any)=>{
            return<div className="col-lg-4 col-md-6 col-sm-12 border rounded  shadow-2xl  m-2">
                <div className="py-5 text-center fs-5 ">
                    <h1 className="font-bold fs-1">{x.CourseName}</h1>
                </div>
                
                <div className="text-center ">
                    <WAButton varient={"contained"} color={"info"} Text={"Course Detail"}onClick={()=>navigate(`/Admin/Coursedetail/${x.CourseName}`)}/>
                </div>


                    </div>
        })


       }
    </div>
 </div>
    
    </>
}