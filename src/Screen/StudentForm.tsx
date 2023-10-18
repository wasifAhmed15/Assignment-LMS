import WAButton from "../component/WAButton"
import WAinput from "../component/WAinput"
import Form from 'react-bootstrap/Form';
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FbAdd } from "../config/firebasemethod";
import { FbGet } from "../config/firebasemethod";

export default function StudentScreen() {

  const rigester = ()=>{
console.log(model)


FbAdd("Rigestration",model).then((res)=>{
  console.log(res)
  Navigate("/Success")
}).catch((err)=>{
  console.log(err)
})
  }




  let [model,setmodel]=useState<any>({})
  let Navigate = useNavigate()

const fillmodel = (key:string,val:any)=>{

  model[key]=val
  setmodel({...model})
      }





      let [coursename,setcoursename]=useState<any>([])
      let GetCard = ()=>{
        FbGet("CourseCard").then((res:any)=>{
            console.log(res);
            setcoursename([...res])
              }).catch((err)=>{
            console.log(err);
            
        })
      }   
      
      
      useEffect(()=>{
        GetCard()

      },[])

      
   
      // const Click = ()=>{
      //   GetCard()
      // }


  return<>
{/* <WAButton varient={"contained"} color={"info"} Text={"click"} onClick={Click}/> */}
  <div className=" h-screen flex justify-center items-center">

<div className="w-[500px]  p-10 rounded-lg border shadow-lg">
<div className="py-5 text-center">
    <h1>Student Registerion Form</h1>
</div>

<div className="py-2 text-center">
        <WAinput type="text" label="Name" variant={"outlined"}  fullwidth onchange={(e:any)=>{fillmodel("Name", e.target.value)}} value={model.name}/>

    </div>


    <div className="py-2 text-center">
        <WAinput type="text" label="Last Name" variant={"outlined"} fullwidth onchange={(e:any)=>{fillmodel("LastName", e.target.value)}} value={model.LastName}/>

    </div>

    <div className="py-2 text-center">
        <WAinput type="email" label="email" variant={"outlined"}  fullwidth onchange={(e:any)=>{fillmodel("Email", e.target.value)}} value={model.Email}/>

    </div>


    <div className="py-2 text-center">

        <WAinput type="password" label="Password" variant={"outlined"}  fullwidth  onchange={(e:any)=>{fillmodel("password", e.target.value)}} value={model.password}/>
    </div>

    <div className="py-2 text-center">

<WAinput type="NIC NO" label="NIC No" variant={"outlined"}  fullwidth  onchange={(e:any)=>{fillmodel("NICNo", e.target.value)}} value={model.NICNo}/>


</div>

<div className="py-2 text-center">

<WAinput type="Adress" label="Adress" variant={"outlined"}  fullwidth  onchange={(e:any)=>{fillmodel("Address", e.target.value)}} value={model.Adress}/>
</div>

<div className="py-2 text-center">


    <Form.Select onChange={(e:any)=>fillmodel("option",e.target.value)} value={model.option}>
      
      {/* <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option> */}

      {
        coursename.map((x:any,i:any)=>{
          return <option value={x.CourseName}>{x.CourseName}</option>
        })
      }
    </Form.Select>
</div>








<div className="text-center">
  <WAButton Text={"register"} varient={"contained"} color={"info"}  onClick={rigester}/>

</div>
 
  
  </div>
  </div>
  </>
}