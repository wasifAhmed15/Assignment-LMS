import WAButton from "../component/WAButton";
import { useNavigate } from "react-router-dom";

export default function MainScreen()

{
    let Navigate =  useNavigate()
    return <>

    <div className="h-screen py-5 flex justify-center items-center">
        <div className="w-50">
            <div className="text-center py-5">
                <h1>Login</h1>
            </div>
            <div className="py-5">
            <WAButton color={"info"} varient={"contained"} Text={"Teacher Login"} onClick={()=>Navigate("/login")}/>
            </div>                                                                                                                  

            <div className="py-10">
                <WAButton color={"info"} varient={"contained"} Text={"Student Login"} onClick={()=>Navigate("/login")}/>
            </div>

        </div>

    </div>
    </>
}