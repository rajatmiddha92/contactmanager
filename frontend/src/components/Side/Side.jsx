import React from 'react';
import "./Side.css"


const Side = ()=> {
    return (
        <div className='side'>
            <div className='side-upper'>
                <h1 className='logo' >LOGO</h1>
                <div className='side-dashboard'>
                    <h4>Dashboard</h4>
                </div>
                <div className='side-totalContact'>
                    <h5 className='total-contact'>Total Contacts</h5>
                </div>
            </div>
            <div className='logout-div'>
                <h6 className='logout'>Log out</h6>
            </div>
        </div>
    );
}

export default Side;