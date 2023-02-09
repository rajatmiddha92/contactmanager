import React, { useState } from 'react';
import "./TotalContacts.css"
import axios from 'axios';
import Header from './Header/Header';
import Functionalities from './Functionalities/Functionalities';
import editimage from "./../images/Edit.png";
import deleteimage from "./../images/delete.png";
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import { red, blue } from '@mui/material/colors';
import EditIcon from '@mui/icons-material/Edit';
// import sort from "./../images/sorting.png"
// import columnDevide from "./../images/columnDevide.png"


const TotalContacts = (props) => {

    const [arr, setArr] = useState([])
    const [deleteId, setDeleteId] = useState()
    const userId = JSON.parse(localStorage.getItem("userdetails"))._id
    const token = JSON.parse(localStorage.getItem("token"))
    useEffect(()=>{
        fetchData()
    },[])
    const fetchData=async()=>{
        let result=await axios.get(`http://localhost:5500/allcontacts/${userId}`,{
            headers:{
                "Authorization":token
            }
        })
        
        setArr(result.data.contacts)
        }

        const handleDeleteId=(e,id)=>{
            setDeleteId(()=>e.target.checked)
            console.log(deleteId)
        }

    return (
        <div className='totalContact'>
            <Header />
            <Functionalities />

            {/* TABLE POPULATION OF CONTACTS  */}

            <table className="table table-striped">
            <thead className='thead'>
                <tr>
                    <th><input type="checkbox" /></th>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Company</th>
                    <th scope="col">Industry</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone Number</th>
                    <th scope="col">Country</th>
                    <th scope="col">Action</th>    
                </tr>
            </thead>
            <tbody>    
                {arr.map((data, key) => {
                    return (<tr key={key}>
                        <td><input type="checkbox" onChange={(e)=>{handleDeleteId(e,data._id); setDeleteId(()=>e.target.checked)}}/></td>
                        <td>{data.name}</td>
                        <td>{data.designation}</td>
                        <td>{data.company}</td>
                        <td>{data.industry}</td>
                        <td>{data.email}</td>
                        <td>{data.phonenumber}</td>
                        <td>{data.category}</td>
                        <td>
                            <div className='tableaction'>
                                <div className='table-row-edit'>
                                   <EditIcon sx={{color:blue[400]}}/>
                                </div>
                                <div>
                                    
                                    <DeleteIcon sx={{color:red[400]}}/>
                                   
                                </div>
                            </div>
                        </td>
                    </tr>)
                })}
            </tbody>
            </table>

        </div>
    );
}

export default TotalContacts;
