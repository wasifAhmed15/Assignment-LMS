import { BrowserRouter,Route,Routes } from "react-router-dom";
import StudentScreen from "../Screen/StudentForm";
import LoginData from "../Screen/Login";
import SignupData from "../Screen/Singup";
import MainScreen from "../Screen/MainScreen";


import Admin from "../Deshbord/Admin";
import SuccessSms from "../Screen/SucessSMS";
export default function AppRouter(){
    return <>
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<MainScreen/>}/>
        <Route path="Student" element={<StudentScreen/>}/>
        <Route path="Success" element={<SuccessSms/>}/>
        
        <Route path="Admin/*" element={<Admin/>}/>
        <Route path="login" element={<LoginData/>}/>
        <Route path="SingUp" element={<SignupData/>}/>
       
    </Routes>
   
    </BrowserRouter>
    </>
}