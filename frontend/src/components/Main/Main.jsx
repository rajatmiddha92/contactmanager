import React from "react";
import Side from "../Side/Side";
import TotalContacts from "../TotalContacts/TotalContacts";
import "./Main.css"

const Main = ()=>{
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