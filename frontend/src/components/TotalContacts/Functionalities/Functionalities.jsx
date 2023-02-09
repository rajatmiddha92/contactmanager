import React, { useState } from "react";
import "./Functionalities.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import exportFile from "./../../images/exportFile.png"
import ImportFile from "../../ImportFile";

const Functionalities = ()=>{
const [importFile, setImportFile] = useState(false)
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
                        <button><DeleteOutlineIcon />Delete</button>    
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
                    <ImportFile trigger={importFile} setfile={setImportFile} > 
                    </ImportFile>
                </div>
                
            </div>
    </>
}

export default Functionalities