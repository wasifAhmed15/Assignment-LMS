import { FbGet } from "../config/firebasemethod"
import {useState,useEffect} from "react"
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function StudentList(){


    let [FromData,setFromData]=useState<any>([])
    let GetData =()=>{
        FbGet("Rigestration").then((res:any)=>{
            setFromData([...res])

            
            
        }).catch((err)=>{
            console.log(err)
        })
    }
    useEffect(()=>{
        GetData()
    },[])
    
    console.log(FromData)


    return <>

<TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right" className="text-center">Last Name</TableCell>
            <TableCell align="right" className="text-center">Email&nbsp;</TableCell>
            <TableCell align="right" className="text-center">Adress&nbsp;</TableCell>
            <TableCell align="right" className="text-center">NIC&nbsp;</TableCell>
            <TableCell align="right" className="text-center">Course&nbsp;</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            

        {FromData.map((x:any,i:any) => (
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {x.Name}
              </TableCell>
              <TableCell align="right" className="text-center">{x.LastName}</TableCell>
              <TableCell align="right" className="text-center">{x.Email}</TableCell>
              <TableCell align="right" className="text-center">{x.Address}</TableCell>
              <TableCell align="right" className="text-center">{x.NICNo}</TableCell>
              <TableCell align="right" className="text-center">{x.option}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  
    
    
    
    </>
}