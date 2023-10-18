import {Button} from "@mui/material"
type typeprops ={
    
   
    Text:String
    onClick?:any
    varient : any
    color:any
}

export default function  WAButton(props:typeprops){
    let {Text,onClick,varient,color}=props
return <>
<Button variant={varient} onClick={onClick } color={color}>{Text}</Button>
</>
}