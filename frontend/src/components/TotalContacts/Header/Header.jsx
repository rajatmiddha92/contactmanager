import React, { useEffect } from 'react';
import { useState } from 'react';
import "./Header.css"
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SearchIcon from '@mui/icons-material/Search';

function Header(props) {
    const [search, setSearch] = useState("")
    const [emailList, setEmailList] = useState("")
    
    const userId = JSON.parse(localStorage.getItem("userdetails"))._id
    const token = JSON.parse(localStorage.getItem("token"))

    useEffect(()=>{
        searchedEmail()
    },[])
    
    const searchedEmail = async()=>{
        try{
            const response = await fetch(`http://localhost:5500/allcontacts/${userId}/${search}` ,{
                headers: {
                    "Authorization" : token
                }
            })
            const result = await response.json()
            if(!result.error){
                console.log(result)
                setEmailList(result.data.contacts)

                props.searchedData(emailList)


            }else{
                console.log(result.error)
            }

        } catch(e){
            console.log(e);
        }
    }

    return (
        <div className='header'>
            <div className='total-contact'>
                <h4>Total Contacts</h4>
            </div>
            <div className='search-bar'>
                <button style={{backgroundColor:"#F2F2F2"}} onClick={searchedEmail}><SearchIcon /></button>
                <input className='search-by-email' type="email"  value={search} placeholder="search by email" onChange={(e)=>setSearch(e.target.value)} /> 
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