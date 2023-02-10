import React from 'react';
import "./Side.css"
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ContactsIcon from '@mui/icons-material/Contacts';
import { useNavigate } from 'react-router-dom';

const Side = ()=> {
   const navigate=useNavigate()
    const handlelogout=()=>{
         localStorage.removeItem('userdetails')
         localStorage.removeItem('token')
         navigate('/')
    }

    return (
        <div className='side'>
            <div className='side-upper'>
                <h1 className='logo' >LOGO</h1>
                <div className='side-dashboard'>
                    <DashboardIcon />
                    <span className='dash'>Dashboard</span>
                </div>
                <div className='side-totalContact'>
                    <p className='total-contact'>
                        <ContactsIcon style={{color:'white'}} />
                        <span className='total'>Total Contacts</span>
                        <span className='line'></span>
                    </p>
                </div>
            </div>
            <div className='logout-div'>
                
                    <LogoutIcon style={{marginLeft:'2.313rem'}} />
                    <span className='logout' onClick={handlelogout}>Log out</span>
                   
            </div>
        </div>
    );
}


export default Side;