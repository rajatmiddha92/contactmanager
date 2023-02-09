import React from "react";
import Side from "../Side/Side";
import TotalContacts from "../TotalContacts/TotalContacts";
import "./Main.css"
import { useState } from "react";
import { useNavigate,useLocation } from "react-router-dom";


const Main = ()=>{
    const navigate=useNavigate()
    const location=useLocation()
    const [update,setUpdate]=useState(0)
    const loggedin=JSON.parse(localStorage.getItem('userdetails'))
    console.log(location)
    return <>
    <div className="main">
        <div>
            <Side />
        </div>
        <div>
            <TotalContacts update={update} />
        </div>
    </div>
    
    </>
}

export default Main