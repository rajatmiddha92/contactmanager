import React from 'react';
import "./Side.css"
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';


const Side = ()=> {
    return (
        <div className='side'>
            <div className='side-upper'>
                <h1 className='logo' >LOGO</h1>
                <div className='side-dashboard'>
                    <DashboardIcon />
                    Dashboard
                </div>
                <div className='side-totalContact'>
                    <p className='total-contact'>
                        <ContactsIcon />
                        <span style={{color: "white"}}>Total Contacts</span>
                    </p>
                </div>
            </div>
            <div className='logout-div'>
                <h6 className='logout'>
                    <LogoutIcon />
                    <button>Log out</button>
                </h6>
            </div>
        </div>
    );
}


export default Side;