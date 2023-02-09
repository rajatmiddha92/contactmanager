import React from "react";
import Side from "../Side/Side";
import TotalContacts from "../TotalContacts/TotalContacts";
import "./Main.css"
import { useNavigate } from "react-router-dom";

const Main = ()=>{
    const navigate=useNavigate()
    const loggedin=JSON.parse(localStorage.getItem('userdetails'))
    console.log(loggedin)
  
    return <>
    <div className="main">
        <div>
            <Side />
        </div>
        <div>
            <TotalContacts />
        </div>
    </div>
    
    </>
}

export default Main