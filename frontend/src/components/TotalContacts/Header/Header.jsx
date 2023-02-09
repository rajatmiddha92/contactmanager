import React from 'react';
import { useState } from 'react';
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
    const [search, setSearch] = useState("")

    return (
        <div className='header'>
            <div className='total-contact'>
                <h4>Total Contacts</h4>
            </div>
            <div className='search-bar'>
                <SearchIcon />
                <input className='search-by-email' type="email"  value={search} placeholder="tejavardhanreddy464@gmail.com" onChange={(e)=>setSearch(e.target.value)} /> 
            </div>
            <div className='header-user-admin'>
                <div>
                    <AccountCircleIcon />
                </div>
                <div className='header-user-admin-name'>
                    <p className='name'>Ram Darvin</p>
                    <p>Super Admin</p>
                </div>
            </div>

            
        </div>
    );
}

export default Header;