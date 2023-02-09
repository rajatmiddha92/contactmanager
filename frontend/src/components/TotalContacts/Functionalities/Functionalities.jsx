import React, { useState } from "react";
import "./Functionalities.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import exportFile from "./../../images/exportFile.png"
import ImportFile from "../../ImportFile";
import ImportComplete from "../../ImportComplete";
import DeleteContactComfirmation from "../../DeleteContactComfirmation";

const Functionalities = (props)=>{
const [importFile, setImportFile] = useState(false)
const [importComplete, setImportComplet] = useState(false)
const [deletefile,setDeletefile]=useState(false)

const handledelete=async()=>{
    let {ids}=props
    console.log(ids)
    setDeletefile(true)
}
    return <>
            <div className='below-header-nav'>
                <div className='below-header-nav-left'>
                    <div className='selectdate'> 
                        <CalendarMonthIcon />
                        Select Date
                        <ExpandMoreIcon />

                    </div>
                    <div className='filter'>
                        <FilterListIcon />
                        Filter  |
                        <ExpandMoreIcon />
                    </div>
                </div>
                <div className='below-header-nav-right'>
                    <div className='delete'>   
                        <button onClick={handledelete}><DeleteOutlineIcon />Delete</button>    
                    </div>
                    <div className='import'>
                        <button onClick={()=>{setImportFile(true)}}><ImportExportIcon />Import</button>                      
                    </div>
                    <div className='export'>
                        <img src={exportFile}  alt="exportFile" />
                        Export
                    </div>

                </div>
                <div className="importFile">
                    <ImportFile trigger={importFile} setfile={setImportFile} importCompletStatus={setImportComplet}  > 
                    </ImportFile>
                </div>
                <div className="importFile">
                    <ImportComplete trigger2={importComplete} > 
                    </ImportComplete>
                </div>
                <div className="deletefile">
                  <DeleteContactComfirmation trigger3={deletefile} arr={props.ids} checkids={props.checkids} rend={props.rend} hide={setDeletefile}/>
                </div>
                
                
            </div>
    </>
}

export default Functionalities