import React from "react";
import "./Functionalities.css"
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FilterListIcon from '@mui/icons-material/FilterList';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import exportFile from "./../../images/exportFile.png"

const Functionalities = ()=>{

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
                        <button><ImportExportIcon />Import</button>                      
                    </div>
                    <div className='export'>
                        <img src={exportFile}  alt="exportFile" />
                        Export
                    </div>

                </div>
            </div>
    </>
}

export default Functionalities